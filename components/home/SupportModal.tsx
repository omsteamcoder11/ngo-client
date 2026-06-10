"use client";
import { useState } from "react";
import { X, Heart, Phone } from "lucide-react";

declare global { interface Window { Razorpay: any } }

type Mode = "choose" | "donate" | "callback" | "success";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function SupportModal({ isOpen, onClose }: Props) {
  const [mode, setMode] = useState<Mode>("choose");
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "", phone: "", email: "",
    amount: "", donate_towards: "general",
  });

  if (!isOpen) return null;

  const handleClose = () => { setMode("choose"); setForm({ name: "", phone: "", email: "", amount: "", donate_towards: "general" }); onClose(); };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleCallbackSubmit = async () => {
    if (!form.name || !form.phone) return alert("Name and phone are required");
    setLoading(true);
    try {
      const res = await fetch("/api/support/callback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: form.name, phone: form.phone, email: form.email }),
      });
      if (!res.ok) { alert("Server error. Please try again."); return; }
      const data = await res.json();
      if (data.success) setMode("success");
      else alert(data.message);
    } catch (err) {
      alert("Could not connect. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleDonateSubmit = async () => {
    if (!form.name || !form.phone || !form.amount) return alert("All fields are required");
    setLoading(true);
    try {
      const res = await fetch("/api/support/donation/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name, phone: form.phone, email: form.email,
          amount: form.amount, donate_towards: form.donate_towards,
        }),
      });
      if (!res.ok) { alert("Server error. Please try again."); return; }
      const data = await res.json();
      if (!data.success) { alert(data.message); return; }
      const rzp = new window.Razorpay({
        key: data.razorpay_key,
        amount: parseFloat(form.amount) * 100,
        currency: "INR",
        name: "Makal Sevai Margam",
        description: "Supporting Muthor Illam",
        order_id: data.order_id,
        prefill: { name: form.name, contact: form.phone, email: form.email },
        theme: { color: "#ea580c" },
        handler: async (response: any) => {
          const verify = await fetch("/api/support/donation/verify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              support_request_id: data.support_request_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            }),
          });
          const vData = await verify.json();
          if (vData.success) setMode("success");
          else alert("Payment verification failed");
        },
      });
      rzp.open();
    } catch (err) {
      alert("Could not connect. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: '100%', border: '1px solid #d1d5db', padding: '12px 16px',
    fontSize: 14, color: '#111827', outline: 'none', borderRadius: 6,
    boxSizing: 'border-box', fontFamily: 'inherit', background: 'white',
  };

  const btnPrimary: React.CSSProperties = {
    flex: 1, background: '#ea580c', color: 'white', border: 'none',
    padding: '12px', fontSize: 12, fontWeight: 900, textTransform: 'uppercase',
    letterSpacing: '0.1em', cursor: 'pointer', borderRadius: 6, fontFamily: 'inherit',
  };

  const btnSecondary: React.CSSProperties = {
    flex: 1, background: 'white', color: '#374151', border: '1px solid #d1d5db',
    padding: '12px', fontSize: 12, fontWeight: 900, textTransform: 'uppercase',
    letterSpacing: '0.1em', cursor: 'pointer', borderRadius: 6, fontFamily: 'inherit',
  };

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 99999, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.5)', padding: '0 16px' }}>
      <div style={{ background: 'white', width: '100%', maxWidth: 448, borderRadius: 12, boxShadow: '0 25px 50px rgba(0,0,0,0.25)', overflow: 'hidden' }}>

        <div style={{ background: '#ea580c', padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h2 style={{ color: 'white', fontWeight: 900, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.1em', margin: 0 }}>Support Us</h2>
          <button onClick={handleClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'white', display: 'flex' }}>
            <X size={20} />
          </button>
        </div>

        <div style={{ padding: 24 }}>

          {mode === "choose" && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <p style={{ color: '#374151', fontSize: 14, textAlign: 'center', margin: 0 }}>
                How would you like to support Makal Sevai Margam? 🙏
              </p>
              <button onClick={() => setMode("donate")}
                style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 12, border: '2px solid #ea580c', color: '#ea580c', padding: '16px 20px', fontWeight: 900, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.1em', background: 'white', cursor: 'pointer', borderRadius: 8, fontFamily: 'inherit' }}>
                <Heart size={18} /> Donate Now
              </button>
              <button onClick={() => setMode("callback")}
                style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 12, border: '2px solid #d1d5db', color: '#374151', padding: '16px 20px', fontWeight: 900, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.1em', background: 'white', cursor: 'pointer', borderRadius: 8, fontFamily: 'inherit' }}>
                <Phone size={18} /> Call Me Back
              </button>
            </div>
          )}

          {mode === "donate" && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <p style={{ color: '#6b7280', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, margin: 0 }}>Donate Now</p>
              {[
                { name: "name",   placeholder: "Your Name *",     type: "text"   },
                { name: "phone",  placeholder: "Phone Number *",   type: "tel"    },
                { name: "email",  placeholder: "Email (optional)", type: "email"  },
                { name: "amount", placeholder: "Amount (₹) *",     type: "number" },
              ].map(f => (
                <input key={f.name} name={f.name} type={f.type}
                  placeholder={f.placeholder} value={(form as any)[f.name]}
                  onChange={handleChange} style={inputStyle} />
              ))}
              <select name="donate_towards" value={form.donate_towards} onChange={handleChange} style={inputStyle}>
                <option value="general">General Fund</option>
                <option value="muthor_illam">Muthor Illam (Elders Home)</option>
                <option value="annadhanam">Annadhanam (Free Meals)</option>
                <option value="education">Education Aid</option>
                <option value="construction">Temple Construction</option>
              </select>
              <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
                <button onClick={() => setMode("choose")} style={btnSecondary}>Back</button>
                <button onClick={handleDonateSubmit} disabled={loading} style={{ ...btnPrimary, opacity: loading ? 0.6 : 1 }}>
                  {loading ? "Processing..." : "Pay Now →"}
                </button>
              </div>
            </div>
          )}

          {mode === "callback" && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <p style={{ color: '#6b7280', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, margin: 0 }}>Call Me Back</p>
              <p style={{ color: '#6b7280', fontSize: 14, margin: 0 }}>Leave your number — we will call you within 24 hours 🙏</p>
              {[
                { name: "name",  placeholder: "Your Name *",     type: "text"  },
                { name: "phone", placeholder: "Phone Number *",   type: "tel"   },
                { name: "email", placeholder: "Email (optional)", type: "email" },
              ].map(f => (
                <input key={f.name} name={f.name} type={f.type}
                  placeholder={f.placeholder} value={(form as any)[f.name]}
                  onChange={handleChange} style={inputStyle} />
              ))}
              <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
                <button onClick={() => setMode("choose")} style={btnSecondary}>Back</button>
                <button onClick={handleCallbackSubmit} disabled={loading} style={{ ...btnPrimary, opacity: loading ? 0.6 : 1 }}>
                  {loading ? "Submitting..." : "Submit →"}
                </button>
              </div>
            </div>
          )}

          {mode === "success" && (
            <div style={{ textAlign: 'center', padding: '24px 0', display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center' }}>
              <div style={{ fontSize: 48 }}>🙏</div>
              <h3 style={{ fontWeight: 900, color: '#111827', fontSize: 18, textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0 }}>Thank You!</h3>
              <p style={{ color: '#6b7280', fontSize: 14, margin: 0 }}>
                Your support means the world to our elders.<br />
                May God bless you always.
              </p>
              <button onClick={handleClose} style={{ ...btnPrimary, flex: 'none', padding: '12px 32px', marginTop: 8 }}>
                Close
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}