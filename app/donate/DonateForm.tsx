"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

declare global {
  interface Window { Razorpay: any; }
}

type Step = "amount" | "details" | "processing" | "success";

interface DonorDetails {
  name: string; email: string; phone: string; pan_number: string; dob: string;
  address_line1: string; city: string; state: string; pincode: string;
  country: string;
  passport_number: string;
  donor_category: "indian" | "nri" | "foreign";
  donate_towards: string;
  termsAccepted: boolean; declarationAccepted: boolean; dpdpConsent: boolean;
}

interface FormErrors {
  name?: string; email?: string; phone?: string; pan_number?: string; dob?: string;
  address_line1?: string; city?: string; state?: string; pincode?: string;
  country?: string; passport_number?: string; donate_towards?: string;
  termsAccepted?: string; declarationAccepted?: string; dpdpConsent?: string;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const RAZORPAY_KEY = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;

const ORG_NAME = "Uthamar Thiru Kovil Arrakattalai Makal Sevai Margam";

const DONATE_TOWARDS_OPTIONS = [
  { value: "", label: "Select a cause" },
  { value: "general", label: "General Fund" },
  { value: "construction", label: "Temple Building Construction" },
  { value: "food_service", label: "Food Service (Annadhanam)" },
 { value: "education", label: "Education Aid" }
];

const IMPACT_MESSAGES: Record<string, (amt: number) => string> = {
  food_service:    (a) => a >= 2000 ? "🍱 Feed 100 devotees for a day!" : a >= 500 ? "🍱 Feed 25 devotees!" : "🙏 Every rupee feeds a soul!",
  construction:    (a) => a >= 5000 ? "🏛️ Contribute to temple construction!" : a >= 1001 ? "🧱 Support a brick of dharma!" : "🙏 Every contribution builds faith!",
  children_fund:   (a) => a >= 5001 ? "🎓 Sponsor a child's education for a month!" : a >= 1001 ? "📚 School supplies for 2 children!" : "💛 Every rupee brightens a child's future!",
  general:         (a) => a >= 5001 ? "✨ A generous offering to the cause!" : "🙏 Your contribution serves the community!",
};

const getImpactMessage = (towards: string, amount: number) => {
  const fn = IMPACT_MESSAGES[towards] || IMPACT_MESSAGES["general"];
  return fn(amount);
};

const INDIAN_STATES = [
  "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat",
  "Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh",
  "Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan",
  "Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal",
  "Andaman and Nicobar Islands","Chandigarh","Dadra and Nagar Haveli and Daman and Diu",
  "Delhi","Jammu and Kashmir","Ladakh","Lakshadweep","Puducherry",
];

const WORLD_COUNTRIES = [
  "Afghanistan","Albania","Algeria","Australia","Austria","Bangladesh","Belgium","Bhutan",
  "Brazil","Canada","China","Denmark","Egypt","Finland","France","Germany","Ghana",
  "Greece","Hong Kong","Hungary","Indonesia","Iran","Iraq","Ireland","Israel","Italy",
  "Japan","Jordan","Kenya","Kuwait","Malaysia","Maldives","Mexico","Morocco","Myanmar",
  "Nepal","Netherlands","New Zealand","Nigeria","Norway","Oman","Pakistan","Philippines",
  "Poland","Portugal","Qatar","Romania","Russia","Saudi Arabia","Singapore","South Africa",
  "South Korea","Spain","Sri Lanka","Sweden","Switzerland","Taiwan","Thailand","Turkey",
  "Ukraine","United Arab Emirates","United Kingdom","United States","Vietnam","Zimbabwe",
];

/* ── Theme ── */
const T = {
  saffron:     "#ea580c",
  saffronDeep: "#c2410c",
  gold:        "#d97706",
  goldLight:   "#fbbf24",
  green:       "#15803d",
};

const inputBase =
  "w-full px-4 py-3 rounded-2xl border-2 text-sm font-medium text-gray-800 bg-white placeholder-gray-400 focus:outline-none transition-all duration-200";
const inputCls  = (e?: string) =>
  `${inputBase} ${e ? "border-red-400 bg-red-50" : "border-gray-200 focus:border-[#ea580c] hover:border-orange-300"}`;
const selectCls = (e?: string) =>
  `${inputBase} cursor-pointer appearance-none ${e ? "border-red-400 bg-red-50" : "border-gray-200 focus:border-[#ea580c] hover:border-orange-300"}`;

const ErrorMsg = ({ msg }: { msg?: string }) =>
  msg ? <p className="text-red-500 text-xs mt-1.5 font-medium">{msg}</p> : null;

const initialDonor: DonorDetails = {
  name: "", email: "", phone: "", pan_number: "", dob: "",
  address_line1: "", city: "", state: "", pincode: "", country: "",
  passport_number: "",
  donor_category: "indian",
  donate_towards: "",
  termsAccepted: false, declarationAccepted: false, dpdpConsent: false,
};

export function DonateForm() {
  const router = useRouter();
  const [step, setStep]                   = useState<Step>("amount");
  const [frequency, setFrequency]         = useState<"one-time" | "monthly">("one-time");
  const [amount, setAmount]               = useState<number | "custom">(1001);
  const [customAmount, setCustomAmount]   = useState("");
  const [loading, setLoading]             = useState(false);
  const [error, setError]                 = useState("");
  const [errors, setErrors]               = useState<FormErrors>({});
  const [receiptUrl, setReceiptUrl]       = useState("");
  const [donor, setDonor]                 = useState<DonorDetails>(initialDonor);

  const finalAmount = amount === "custom"
    ? (parseFloat(customAmount.replace(/,/g, "")) || 0)
    : Number(amount);

  const isIndian  = donor.donor_category === "indian";
  const isNRI     = donor.donor_category === "nri";
  const isForeign = donor.donor_category === "foreign";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setDonor((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const validateAmount = () => {
    const parsed = amount === "custom"
      ? parseFloat(customAmount.replace(/,/g, ""))
      : Number(amount);
    if (!parsed || isNaN(parsed) || parsed < 100) {
      setError("Minimum donation amount is ₹100.");
      return false;
    }
    setError("");
    return true;
  };

  const validateDetails = (): boolean => {
    const e: FormErrors = {};
    if (!donor.name.trim())                                                                      e.name = "Full name is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(donor.email))                                        e.email = "Valid email is required";
    if (isIndian ? !/^[6-9]\d{9}$/.test(donor.phone) : donor.phone.length < 7)                  e.phone = "Valid phone number is required";
    if (!donor.dob)                                                                              e.dob = "Date of birth is required";
    if (!donor.donate_towards)                                                                   e.donate_towards = "Please select a cause";
    if ((isIndian || isNRI) && !donor.pan_number.trim())                                         e.pan_number = "PAN number is required";
    if ((isIndian || isNRI) && donor.pan_number && !/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(donor.pan_number.toUpperCase())) e.pan_number = "Invalid PAN format (e.g. ABCDE1234F)";
    if ((isNRI || isForeign) && !donor.passport_number.trim())                                   e.passport_number = "Passport number is required";
    if (!donor.address_line1.trim())                                                             e.address_line1 = "Address is required";
    if (!donor.city.trim())                                                                      e.city = "City is required";
    if (isIndian && !donor.state.trim())                                                         e.state = "State is required";
    if (!isIndian && !donor.country.trim())                                                      e.country = "Country is required";
    if (isIndian && !/^\d{6}$/.test(donor.pincode))                                              e.pincode = "Valid 6-digit pincode required";
    if (!isIndian && !donor.pincode.trim())                                                      e.pincode = "ZIP / Postal code is required";
    if (!donor.termsAccepted)                                                                    e.termsAccepted = "You must accept terms & conditions";
    if (!donor.declarationAccepted)                                                              e.declarationAccepted = "You must confirm your details are correct";
    if (!donor.dpdpConsent)                                                                      e.dpdpConsent = "You must consent to data processing under DPDP Act 2023";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const loadRazorpay = (): Promise<boolean> =>
    new Promise((resolve) => {
      if (window.Razorpay) return resolve(true);
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload  = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });

  const handlePayment = async () => {
    if (!validateDetails()) return;
    if (!finalAmount || isNaN(finalAmount) || finalAmount < 100) {
      setError("Please enter a valid donation amount (minimum ₹100).");
      return;
    }
    setLoading(true); setError("");
    try {
      const donorRes = await fetch(`${API_URL}/api/donors/by-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name:            donor.name,
          email:           donor.email,
          phone:           donor.phone,
          pan_number:      donor.pan_number.toUpperCase(),
          date_of_birth:   donor.dob,
          address_line1:   donor.address_line1,
          city:            donor.city,
          state:           isIndian ? donor.state : null,
          country:         isIndian ? "India" : donor.country,
          pincode:         donor.pincode,
          donor_category:  donor.donor_category,
          passport_number: donor.passport_number || null,
          donation_type:   frequency,
        }),
      });
      const donorData = await donorRes.json();
      if (!donorRes.ok) throw new Error(donorData.message);

      const orderRes = await fetch(`${API_URL}/api/donations/create-order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          donor_id:        donorData.donor.id,
          amount:          finalAmount,
          donation_type:   frequency,
          donate_towards:  donor.donate_towards,
          currency:        "INR",
          donor_phone:     donor.phone,
          pan_number:      donor.pan_number.toUpperCase(),
          passport_number: donor.passport_number || null,
          dob:             donor.dob,
          donor_category:  donor.donor_category,
          address_line1:   donor.address_line1,
          city:            donor.city,
          state:           donor.state || null,
          country:         isIndian ? "India" : donor.country,
          pincode:         donor.pincode,
        }),
      });
      const orderData = await orderRes.json();
      if (!orderRes.ok) throw new Error(orderData.message);

      const loaded = await loadRazorpay();
      if (!loaded) throw new Error("Razorpay failed to load.");

      const options = {
        key:         RAZORPAY_KEY,
        amount:      orderData.amount,
        currency:    "INR",
        name:        ORG_NAME,
        description: `${frequency === "monthly" ? "Monthly" : "One-time"} Donation — ${
          DONATE_TOWARDS_OPTIONS.find(o => o.value === donor.donate_towards)?.label || "General Fund"
        }`,
        order_id: orderData.razorpay_order_id,
        prefill:  { name: donor.name, email: donor.email, contact: donor.phone },
        theme:    { color: T.saffron },
        handler: async (response: any) => {
          setStep("processing");
          try {
            const verifyRes = await fetch(`${API_URL}/api/payments/verify`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ ...response, donation_id: orderData.donation_id }),
            });
            const verifyData = await verifyRes.json();
            if (!verifyRes.ok) throw new Error(verifyData.message);
            setReceiptUrl(verifyData.receipt_url || "");
            setStep("success");
          } catch (err: any) {
            setError(err.message || "Payment verification failed.");
            setStep("details");
          }
        },
        modal: { ondismiss: () => { setLoading(false); setError("Payment cancelled."); } },
      };
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err: any) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  /* ── Processing Screen ── */
  if (step === "processing") {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 bg-orange-50">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl text-center max-w-md w-full">
          <div className="w-16 h-16 border-4 border-[#ea580c] border-t-transparent rounded-full animate-spin mx-auto mb-6" />
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Verifying Payment...</h2>
          <p className="text-gray-500 mt-2 text-sm">Please wait while we confirm your transaction.</p>
        </div>
      </div>
    );
  }

  /* ── Success Screen ── */
  if (step === "success") {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 bg-orange-50">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl text-center max-w-md w-full">
          <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ background: "rgba(234,88,12,0.10)" }}>
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="#ea580c">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div className="text-4xl mb-2">🙏</div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">நன்றி! Thank You!</h2>
          <p className="text-gray-600 text-base mb-1">
            Dear <span className="font-bold text-gray-900">{donor.name}</span>,
          </p>
          <p className="text-gray-600 text-base mb-2">
            Your donation of{" "}
            <span className="font-bold text-[#ea580c]">₹{finalAmount.toLocaleString()}</span>{" "}
            towards{" "}
            <span className="font-semibold text-gray-800">
              {DONATE_TOWARDS_OPTIONS.find(o => o.value === donor.donate_towards)?.label || "General Fund"}
            </span>{" "}
            is a blessed contribution.
          </p>
          <p className="text-xs text-gray-400 mb-8">A receipt has been sent to {donor.email}</p>
          <div className="flex flex-col gap-3">
            {receiptUrl && (
              <a href={receiptUrl} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-4 rounded-2xl font-bold text-sm text-white transition"
                style={{ background: `linear-gradient(135deg, ${T.saffron}, ${T.saffronDeep})` }}>
                📄 Download 80G Tax Receipt
              </a>
            )}
            <button onClick={() => router.push("/")}
              className="text-gray-400 font-semibold hover:text-gray-700 transition text-sm py-2">
              ← Return to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  /* ── Main Form ── */
  return (
    <div className="min-h-screen flex items-center justify-center px-2 sm:px-4 py-8 sm:py-12 bg-orange-50">
      <div className="bg-white rounded-3xl shadow-2xl border border-orange-100 w-full max-w-lg mx-auto overflow-hidden">

        {/* Header */}
        <div className="px-6 sm:px-8 py-6 sm:py-8 text-white text-center"
          style={{ background: `linear-gradient(135deg, ${T.saffron}, ${T.saffronDeep})` }}>
          <div className="text-3xl mb-2">🪔</div>
          <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight">Make a Donation</h1>
          <p className="text-white/75 text-xs sm:text-sm mt-1 font-medium">
            உதவி செய்யுங்கள் • 100% goes to the cause • 80G Tax Exemption
          </p>
        </div>

        <div className="p-4 sm:p-6 md:p-8">

          {/* Step Indicator */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            {["amount", "details"].map((s, i) => (
              <div key={s} className="flex items-center gap-2 sm:gap-3">
                <div className={`w-9 h-9 rounded-2xl flex items-center justify-center text-xs sm:text-sm font-bold transition-all ${
                  step === s
                    ? "text-white shadow-lg"
                    : step === "details" && i === 0
                    ? "text-white"
                    : "bg-slate-100 text-slate-400"
                }`}
                  style={
                    step === s
                      ? { background: `linear-gradient(135deg, ${T.saffron}, ${T.saffronDeep})` }
                      : step === "details" && i === 0
                      ? { background: T.green }
                      : {}
                  }>
                  {step === "details" && i === 0 ? "✓" : i + 1}
                </div>
                <span className={`text-xs sm:text-sm font-bold ${step === s ? "text-gray-900" : "text-gray-400"}`}>
                  {s === "amount" ? "Gift Amount" : "Your Details"}
                </span>
                {i === 0 && <div className="w-8 sm:w-12 h-1 rounded-full bg-slate-100" />}
              </div>
            ))}
          </div>

          {/* ══ STEP 1: AMOUNT ══ */}
          {step === "amount" && (
            <div className="space-y-4 sm:space-y-5">

              {/* One-time / Monthly toggle */}
              <div className="inline-flex p-1.5 bg-slate-100 rounded-2xl w-full">
                {(["one-time", "monthly"] as const).map((f) => (
                  <button key={f} onClick={() => setFrequency(f)}
                    className="flex-1 py-2.5 rounded-xl text-xs sm:text-sm font-bold capitalize transition-all"
                    style={frequency === f
                      ? { background: "#fff", color: T.saffron, boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }
                      : { color: "#64748b" }}>
                    {f.replace("-", " ")}
                  </button>
                ))}
              </div>

              {/* Amount presets — auspicious odd numbers */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {[101, 501, 1001, 2001, 5001].map((amt) => (
                  <button key={amt} onClick={() => setAmount(amt)}
                    className="py-3 sm:py-4 rounded-2xl border-2 font-bold transition-all text-xs sm:text-sm"
                    style={amount === amt
                      ? { borderColor: T.saffron, background: "rgba(234,88,12,0.06)", color: T.saffron }
                      : { borderColor: "#f1f5f9", color: "#475569" }}>
                    ₹{amt.toLocaleString()}
                  </button>
                ))}
                <button onClick={() => setAmount("custom")}
                  className="py-3 sm:py-4 rounded-2xl border-2 font-bold transition-all text-xs sm:text-sm"
                  style={amount === "custom"
                    ? { borderColor: T.saffron, background: "rgba(234,88,12,0.06)", color: T.saffron }
                    : { borderColor: "#f1f5f9", color: "#475569" }}>
                  Custom
                </button>
              </div>

              {/* Custom amount input */}
              {amount === "custom" && (
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-lg">₹</span>
                  <input type="number" value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    placeholder="Enter amount"
                    className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl pl-10 pr-5 py-4 outline-none font-bold text-lg text-gray-900 transition-all"
                    style={{ borderColor: "transparent" }}
                    onFocus={e => (e.currentTarget.style.borderColor = T.saffron)}
                    onBlur={e  => (e.currentTarget.style.borderColor = "transparent")} />
                </div>
              )}

              {/* Donate Towards */}
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">
                  Donate Towards *
                </label>
                <div className="relative">
                  <select name="donate_towards" value={donor.donate_towards}
                    onChange={handleChange}
                    className={selectCls(errors.donate_towards)}>
                    {DONATE_TOWARDS_OPTIONS.map(o => (
                      <option key={o.value} value={o.value} disabled={o.value === ""}>{o.label}</option>
                    ))}
                  </select>
                </div>
                <ErrorMsg msg={errors.donate_towards} />
              </div>

              {/* Impact message */}
              {finalAmount >= 100 && (
                <div className="rounded-xl p-3 text-center text-xs sm:text-sm font-medium"
                  style={{ background: "rgba(234,88,12,0.06)", color: T.saffronDeep, border: `1px solid rgba(234,88,12,0.15)` }}>
                  {getImpactMessage(donor.donate_towards, finalAmount)}
                </div>
              )}

              {error && <p className="text-red-500 text-sm text-center">{error}</p>}

              <button
                onClick={() => { if (validateAmount()) setStep("details"); }}
                className="w-full text-white py-4 rounded-2xl font-bold text-base sm:text-lg transition-all shadow-lg active:scale-95"
                style={{ background: `linear-gradient(135deg, ${T.saffron}, ${T.saffronDeep})` }}>
                Continue to Details →
              </button>
            </div>
          )}

          {/* ══ STEP 2: DETAILS ══ */}
          {step === "details" && (
            <div className="space-y-3 sm:space-y-4">

              <div className="text-xs rounded-xl px-3 py-2 font-medium"
                style={{ background: "#fef3c7", border: "1px solid #fcd34d", color: "#92400e" }}>
                📋 All fields are required for your 80G tax exemption certificate
              </div>

              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">Full Name *</label>
                <input name="name" value={donor.name} onChange={handleChange}
                  placeholder="Rajesh Kumar" className={inputCls(errors.name)} />
                <ErrorMsg msg={errors.name} />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">Email Address *</label>
                <input name="email" type="email" value={donor.email} onChange={handleChange}
                  placeholder="rajesh@email.com" className={inputCls(errors.email)} />
                <ErrorMsg msg={errors.email} />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">Phone Number *</label>
                <input name="phone" value={donor.phone} onChange={handleChange}
                  placeholder={isIndian ? "9876543210" : "+1 234 567 8900"}
                  maxLength={isIndian ? 10 : 20}
                  className={inputCls(errors.phone)} />
                <ErrorMsg msg={errors.phone} />
              </div>

              {/* DOB */}
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">Date of Birth *</label>
                <input name="dob" type="date" value={donor.dob} onChange={handleChange}
                  className={inputCls(errors.dob)} />
                <ErrorMsg msg={errors.dob} />
              </div>

              {/* Donor Category */}
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">Donor Category *</label>
                <select name="donor_category" value={donor.donor_category}
                  onChange={(e) => setDonor({
                    ...donor,
                    donor_category: e.target.value as DonorDetails["donor_category"],
                    state: "", country: "", pincode: "", pan_number: "", passport_number: "",
                  })}
                  className={selectCls()}>
                  <option value="indian">Indian (Resident)</option>
                  <option value="nri">NRI (Non-Resident Indian)</option>
                  <option value="foreign">Foreign National</option>
                </select>
              </div>

              {/* PAN — Indian & NRI */}
              {(isIndian || isNRI) && (
                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">
                    PAN Number * {isNRI && <span className="normal-case text-orange-600">(Indian PAN)</span>}
                  </label>
                  <input name="pan_number" value={donor.pan_number}
                    onChange={(e) => setDonor({ ...donor, pan_number: e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, "") })}
                    placeholder="ABCDE1234F" maxLength={10}
                    className={inputCls(errors.pan_number)} />
                  <ErrorMsg msg={errors.pan_number} />
                </div>
              )}

              {/* Passport — NRI & Foreign */}
              {(isNRI || isForeign) && (
                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">
                    Passport Number *
                  </label>
                  <input name="passport_number" value={donor.passport_number}
                    onChange={(e) => setDonor({ ...donor, passport_number: e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, "") })}
                    placeholder="A1234567" maxLength={12}
                    className={inputCls(errors.passport_number)} />
                  <ErrorMsg msg={errors.passport_number} />
                </div>
              )}

              {/* Address */}
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">Address *</label>
                <input name="address_line1" value={donor.address_line1} onChange={handleChange}
                  placeholder="123, Street Name, Area" className={inputCls(errors.address_line1)} />
                <ErrorMsg msg={errors.address_line1} />
              </div>

              {/* City */}
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">City *</label>
                <input name="city" value={donor.city} onChange={handleChange}
                  placeholder="Chennai" className={inputCls(errors.city)} />
                <ErrorMsg msg={errors.city} />
              </div>

              {/* State / Country + Pincode */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                <div>
                  {isIndian ? (
                    <>
                      <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">State *</label>
                      <select name="state" value={donor.state} onChange={handleChange} className={selectCls(errors.state)}>
                        <option value="" disabled>Select state</option>
                        {INDIAN_STATES.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                      <ErrorMsg msg={errors.state} />
                    </>
                  ) : (
                    <>
                      <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">Country *</label>
                      <select name="country" value={donor.country} onChange={handleChange} className={selectCls(errors.country)}>
                        <option value="" disabled>Select country</option>
                        {WORLD_COUNTRIES.map((c) => <option key={c} value={c}>{c}</option>)}
                      </select>
                      <ErrorMsg msg={errors.country} />
                    </>
                  )}
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">
                    {isIndian ? "Pincode *" : "ZIP Code *"}
                  </label>
                  <input name="pincode" value={donor.pincode}
                    onChange={(e) => setDonor({ ...donor, pincode: isIndian ? e.target.value.replace(/\D/g, "") : e.target.value })}
                    placeholder={isIndian ? "600001" : "e.g. SW1A 1AA"}
                    maxLength={isIndian ? 6 : 12}
                    className={inputCls(errors.pincode)} />
                  <ErrorMsg msg={errors.pincode} />
                </div>
              </div>

              {/* FCRA notice for foreign donors */}
              {isForeign && (
                <div className="rounded-xl p-3 text-xs font-medium"
                  style={{ background: "#fef3c7", border: "1px solid #fcd34d", color: "#92400e" }}>
                  ⚠️ <strong>FCRA Notice:</strong> Foreign contributions are accepted under the Foreign Contribution (Regulation) Act, 2010.
                </div>
              )}

              {/* Amount summary */}
              <div className="rounded-xl p-3 sm:p-4 flex justify-between items-center"
                style={{ background: "rgba(234,88,12,0.05)", border: "1px solid rgba(234,88,12,0.12)" }}>
                <div>
                  <p className="text-xs text-gray-500">Donating</p>
                  <p className="text-lg font-bold" style={{ color: T.saffron }}>₹{finalAmount.toLocaleString()}</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-500">Towards</p>
                  <p className="font-bold text-gray-700 text-xs">
                    {DONATE_TOWARDS_OPTIONS.find(o => o.value === donor.donate_towards)?.label || "—"}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500">Type</p>
                  <p className="font-bold text-gray-700 capitalize text-sm">{frequency}</p>
                </div>
                <button onClick={() => setStep("amount")}
                  className="text-xs font-bold hover:underline" style={{ color: T.saffron }}>
                  Edit
                </button>
              </div>

              {/* Checkboxes */}
              <div className="space-y-2 pt-1">
                <label className="flex items-start gap-3 cursor-pointer p-3 rounded-2xl hover:bg-gray-50 transition">
                  <input type="checkbox" checked={donor.termsAccepted}
                    onChange={(e) => setDonor({ ...donor, termsAccepted: e.target.checked })}
                    className="w-4 h-4 mt-0.5 flex-shrink-0 accent-orange-600" />
                  <span className="text-xs text-gray-600 leading-relaxed">
                    I agree to the{" "}
                    <a href="/terms" target="_blank" className="font-semibold underline" style={{ color: T.saffron }}>Terms & Conditions</a>,{" "}
                    <a href="/privacy" target="_blank" className="font-semibold underline" style={{ color: T.saffron }}>Privacy Policy</a> and{" "}
                    <a href="/refund-policy" target="_blank" className="font-semibold underline" style={{ color: T.saffron }}>Refund Policy</a>
                  </span>
                </label>
                <ErrorMsg msg={errors.termsAccepted} />

                <label className="flex items-start gap-3 cursor-pointer p-3 rounded-2xl hover:bg-gray-50 transition">
                  <input type="checkbox" checked={donor.declarationAccepted}
                    onChange={(e) => setDonor({ ...donor, declarationAccepted: e.target.checked })}
                    className="w-4 h-4 mt-0.5 flex-shrink-0 accent-orange-600" />
                  <span className="text-xs text-gray-600 leading-relaxed">
                    I declare that the above information is correct and true to the best of my knowledge
                  </span>
                </label>
                <ErrorMsg msg={errors.declarationAccepted} />

                <label className="flex items-start gap-3 cursor-pointer p-3 rounded-2xl transition"
                  style={{ border: "1px solid rgba(234,88,12,0.12)", background: "rgba(234,88,12,0.04)" }}>
                  <input type="checkbox" checked={donor.dpdpConsent}
                    onChange={(e) => setDonor({ ...donor, dpdpConsent: e.target.checked })}
                    className="w-4 h-4 mt-0.5 flex-shrink-0 accent-orange-600" />
                  <span className="text-xs text-gray-600 leading-relaxed">
                    I consent to collection and processing of my personal data for donation and tax receipt purposes under the{" "}
                    <strong>Digital Personal Data Protection Act, 2023</strong>
                  </span>
                </label>
                <ErrorMsg msg={errors.dpdpConsent} />
              </div>

              {error && <p className="text-red-500 text-sm text-center">{error}</p>}

              {/* Submit */}
              <div className="pt-2 border-t border-slate-100">
                <button onClick={handlePayment} disabled={loading}
                  className="w-full text-white py-4 sm:py-5 rounded-2xl font-bold text-base sm:text-lg transition shadow-lg flex items-center justify-center gap-3 disabled:opacity-60 active:scale-95"
                  style={{ background: `linear-gradient(135deg, ${T.saffron}, ${T.saffronDeep})` }}>
                  {loading
                    ? <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    : `🔒 Complete ₹${finalAmount.toLocaleString()} Donation`}
                </button>
                <button onClick={() => setStep("amount")}
                  className="w-full mt-3 text-slate-400 font-bold text-sm py-2 hover:text-slate-600 transition">
                  ← Edit Amount
                </button>
              </div>

              <p className="text-xs text-gray-400 text-center">
                Secured by Razorpay • 256-bit SSL • 80G Tax Exemption
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}