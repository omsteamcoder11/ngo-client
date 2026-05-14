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
  country: string; company_name: string; gst_number: string;
  passport_number: string;
  donor_type: "individual" | "corporate" | "csr";
  donor_category: "indian" | "nri" | "foreign";
  isCompany: boolean;
  termsAccepted: boolean; declarationAccepted: boolean; dpdpConsent: boolean;
}

interface FormErrors {
  name?: string; email?: string; phone?: string; pan_number?: string; dob?: string;
  address_line1?: string; city?: string; state?: string; pincode?: string;
  country?: string; company_name?: string; gst_number?: string;
  passport_number?: string;
  termsAccepted?: string; declarationAccepted?: string; dpdpConsent?: string;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const RAZORPAY_KEY = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;

const INDIAN_STATES = [
  "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat",
  "Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh",
  "Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan",
  "Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal",
  "Andaman and Nicobar Islands","Chandigarh","Dadra and Nagar Haveli and Daman and Diu",
  "Delhi","Jammu and Kashmir","Ladakh","Lakshadweep","Puducherry"
];

const WORLD_COUNTRIES = [
  "Afghanistan","Albania","Algeria","Australia","Austria","Bangladesh","Belgium","Bhutan",
  "Brazil","Canada","China","Denmark","Egypt","Finland","France","Germany","Ghana",
  "Greece","Hong Kong","Hungary","Indonesia","Iran","Iraq","Ireland","Israel","Italy",
  "Japan","Jordan","Kenya","Kuwait","Malaysia","Maldives","Mexico","Morocco","Myanmar",
  "Nepal","Netherlands","New Zealand","Nigeria","Norway","Oman","Pakistan","Philippines",
  "Poland","Portugal","Qatar","Romania","Russia","Saudi Arabia","Singapore","South Africa",
  "South Korea","Spain","Sri Lanka","Sweden","Switzerland","Taiwan","Thailand","Turkey",
  "Ukraine","United Arab Emirates","United Kingdom","United States","Vietnam","Zimbabwe"
];

const inputBase = "w-full px-4 py-3 rounded-2xl border-2 text-sm font-medium text-gray-800 bg-white/80 placeholder-gray-400 focus:outline-none transition-all duration-200";
const inputCls = (e?: string) => `${inputBase} ${e ? "border-red-400 bg-red-50" : "border-gray-200 focus:border-blue-500 hover:border-gray-300"}`;
const selectCls = (e?: string) => `${inputBase} cursor-pointer appearance-none ${e ? "border-red-400 bg-red-50" : "border-gray-200 focus:border-blue-500 hover:border-gray-300"}`;
const ErrorMsg = ({ msg }: { msg?: string }) => msg ? <p className="text-red-500 text-xs mt-1.5 font-medium">{msg}</p> : null;

const initialDonor: DonorDetails = {
  name: "", email: "", phone: "", pan_number: "", dob: "",
  address_line1: "", city: "", state: "", pincode: "", country: "",
  company_name: "", gst_number: "", passport_number: "",
  donor_type: "individual", donor_category: "indian",
  isCompany: false,
  termsAccepted: false, declarationAccepted: false, dpdpConsent: false,
};

export function DonateForm() {
  const router = useRouter();
  const [step, setStep] = useState<Step>("amount");
  const [frequency, setFrequency] = useState<"one-time" | "monthly">("one-time");
  const [amount, setAmount] = useState<number | "custom">(1000);
  const [customAmount, setCustomAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [receiptUrl, setReceiptUrl] = useState("");
  const [donor, setDonor] = useState<DonorDetails>(initialDonor);

  const finalAmount = amount === "custom" ? parseFloat(customAmount) : amount;
  const isIndian = donor.donor_category === "indian";
  const isNRI = donor.donor_category === "nri";
  const isForeign = donor.donor_category === "foreign";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setDonor((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const validateAmount = () => {
    if (isNaN(finalAmount) || finalAmount < 100) {
      setError("Minimum donation amount is ₹100.");
      return false;
    }
    setError("");
    return true;
  };

  const validateDetails = (): boolean => {
    const e: FormErrors = {};
    if (!donor.name.trim())                                                         e.name = "Full name is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(donor.email))                           e.email = "Valid email is required";
    if (isIndian ? !/^[6-9]\d{9}$/.test(donor.phone) : donor.phone.length < 7)    e.phone = "Valid phone number is required";
    if (!donor.dob)                                                                 e.dob = "Date of birth is required";
    // PAN: required for Indian, optional for NRI, not needed for Foreign
    if (isIndian && !donor.pan_number.trim())                                       e.pan_number = "PAN number is required";
    if (isNRI && !donor.pan_number.trim())                                          e.pan_number = "PAN number is required";
    if ((isIndian || isNRI) && donor.pan_number && !/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(donor.pan_number.toUpperCase())) e.pan_number = "Invalid PAN format (e.g. ABCDE1234F)";
    // Passport: required for NRI and Foreign
    if ((isNRI || isForeign) && !donor.passport_number.trim())                     e.passport_number = "Passport number is required";
    if (!donor.address_line1.trim())                                                e.address_line1 = "Address is required";
    if (!donor.city.trim())                                                         e.city = "City is required";
    if (isIndian && !donor.state.trim())                                            e.state = "State is required";
    if (!isIndian && !donor.country.trim())                                         e.country = "Country is required";
    if (isIndian && !/^\d{6}$/.test(donor.pincode))                                e.pincode = "Valid 6-digit pincode required";
    if (!isIndian && !donor.pincode.trim())                                         e.pincode = "ZIP / Postal code is required";
    if (donor.isCompany && !donor.company_name.trim())                             e.company_name = "Company name is required";
    if (donor.isCompany && !donor.gst_number.trim())                               e.gst_number = "GST number is required";
    if (!donor.termsAccepted)                                                       e.termsAccepted = "You must accept terms & conditions";
    if (!donor.declarationAccepted)                                                 e.declarationAccepted = "You must confirm your details are correct";
    if (!donor.dpdpConsent)                                                         e.dpdpConsent = "You must consent to data processing under DPDP Act 2023";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const loadRazorpay = (): Promise<boolean> =>
    new Promise((resolve) => {
      if (window.Razorpay) return resolve(true);
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });

  const handlePayment = async () => {
    if (!validateDetails()) return;
    setLoading(true); setError("");
    try {
      const donorRes = await fetch(`${API_URL}/api/donors/by-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name:             donor.name,
          email:            donor.email,
          phone:            donor.phone,
          pan_number:       donor.pan_number.toUpperCase(),
          date_of_birth:    donor.dob,
          address_line1:    donor.address_line1,
          city:             donor.city,
          state:            isIndian ? donor.state : null,
          country:          isIndian ? "India" : donor.country,
          pincode:          donor.pincode,
          donor_type:       donor.donor_type,
          donor_category:   donor.donor_category,
          passport_number:  donor.passport_number || null,
          is_company:       donor.isCompany,
          company_name:     donor.isCompany ? donor.company_name : null,
          gst_number:       donor.isCompany ? donor.gst_number.toUpperCase() : null,
          donation_type:    frequency,
        }),
      });
      const donorData = await donorRes.json();
      if (!donorRes.ok) throw new Error(donorData.message);

      const orderRes = await fetch(`${API_URL}/api/donations/create-order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          donor_id:         donorData.donor.id,
          amount:           finalAmount,
          donation_type:    frequency,
          currency:         "INR",
          donor_phone:      donor.phone,
          pan_number:       donor.pan_number.toUpperCase(),
          passport_number:  donor.passport_number || null,
          dob:              donor.dob,
          donor_type:       donor.donor_type,
          donor_category:   donor.donor_category,
          company_name:     donor.isCompany ? donor.company_name : null,
          gst_number:       donor.isCompany ? donor.gst_number.toUpperCase() : null,
          address_line1:    donor.address_line1,
          city:             donor.city,
          state:            donor.state || null,
          country:          isIndian ? "India" : donor.country,
          pincode:          donor.pincode,
        }),
      });
      const orderData = await orderRes.json();
      if (!orderRes.ok) throw new Error(orderData.message);

      const loaded = await loadRazorpay();
      if (!loaded) throw new Error("Razorpay failed to load.");

      const options = {
        key: RAZORPAY_KEY,
        amount: orderData.amount,
        currency: "INR",
        name: "ChildSave NGO",
        description: `${frequency === "monthly" ? "Monthly" : "One-time"} Donation`,
        order_id: orderData.razorpay_order_id,
        prefill: { name: donor.name, email: donor.email, contact: donor.phone },
        theme: { color: "#2563eb" },
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

  if (step === "processing") {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl text-center max-w-md w-full mx-4">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-6" />
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Verifying Payment...</h2>
          <p className="text-slate-500 mt-2 text-sm">Please wait while we confirm your transaction.</p>
        </div>
      </div>
    );
  }

  if (step === "success") {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl text-center max-w-md w-full mx-4">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">Thank You! 🎉</h2>
          <p className="text-slate-600 text-base sm:text-lg mb-2">
            Dear <span className="font-bold text-slate-900">{donor.name}</span>,
          </p>
          <p className="text-slate-600 text-base sm:text-lg mb-8">
            Your donation of <span className="text-blue-600 font-bold">₹{finalAmount}</span> is changing lives.
          </p>
          <div className="flex flex-col gap-3">
            {receiptUrl && (
              <a href={receiptUrl} target="_blank" rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 sm:px-8 py-4 rounded-2xl font-bold text-sm hover:bg-blue-700 transition text-center">
                Download 80G Tax Receipt
              </a>
            )}
            <button onClick={() => router.push("/")}
              className="text-slate-500 font-semibold hover:text-slate-800 transition text-sm py-2">
              Return to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-2 sm:px-4 py-6 sm:py-12 bg-gray-50">
      <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 w-full max-w-lg mx-auto overflow-hidden">

        {/* Header */}
        <div className="bg-slate-900 px-6 sm:px-8 py-6 sm:py-8 text-white text-center">
          <h1 className="text-xl sm:text-2xl font-bold">Support a Child</h1>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">100% of your donation goes to the cause</p>
        </div>

        <div className="p-4 sm:p-6 md:p-8">

          {/* Step Indicator */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            {["amount", "details"].map((s, i) => (
              <div key={s} className="flex items-center gap-2 sm:gap-3">
                <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-2xl flex items-center justify-center text-xs sm:text-sm font-bold transition-all ${
                  step === s ? "bg-blue-600 text-white shadow-lg" :
                  step === "details" && i === 0 ? "bg-green-500 text-white" : "bg-slate-100 text-slate-400"
                }`}>
                  {step === "details" && i === 0 ? "✓" : i + 1}
                </div>
                <span className={`text-xs sm:text-sm font-bold ${step === s ? "text-slate-900" : "text-slate-400"}`}>
                  {s === "amount" ? "Gift Amount" : "Your Details"}
                </span>
                {i === 0 && <div className="w-8 sm:w-12 h-1 rounded-full bg-slate-100" />}
              </div>
            ))}
          </div>

          {/* STEP 1: AMOUNT */}
          {step === "amount" && (
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-flex p-1.5 bg-slate-100 rounded-2xl w-full">
                {["one-time", "monthly"].map((f) => (
                  <button key={f} onClick={() => setFrequency(f as any)}
                    className={`flex-1 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold capitalize transition-all ${
                      frequency === f ? "bg-white text-blue-600 shadow-sm" : "text-slate-500"
                    }`}>
                    {f.replace("-", " ")}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {[500, 1000, 2000, 5000, 10000].map((amt) => (
                  <button key={amt} onClick={() => setAmount(amt)}
                    className={`py-3 sm:py-4 rounded-2xl border-2 font-bold transition-all text-xs sm:text-sm ${
                      amount === amt ? "border-blue-600 bg-blue-50 text-blue-700" : "border-slate-100 text-slate-600 hover:border-slate-300"
                    }`}>
                    ₹{amt.toLocaleString()}
                  </button>
                ))}
                <button onClick={() => setAmount("custom")}
                  className={`py-3 sm:py-4 rounded-2xl border-2 font-bold transition-all text-xs sm:text-sm ${
                    amount === "custom" ? "border-blue-600 bg-blue-50 text-blue-700" : "border-slate-100 text-slate-600 hover:border-slate-300"
                  }`}>
                  Custom
                </button>
              </div>

              {amount === "custom" && (
                <div className="relative">
                  <span className="absolute left-4 sm:left-5 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-lg sm:text-xl">₹</span>
                  <input type="number" value={customAmount} onChange={(e) => setCustomAmount(e.target.value)}
                    placeholder="Enter custom amount"
                    className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl pl-10 sm:pl-12 pr-4 sm:pr-6 py-4 sm:py-5 outline-none focus:border-blue-600 text-slate-900 font-bold text-lg sm:text-xl transition-all" />
                </div>
              )}

              <div className="bg-blue-50 rounded-xl p-3 text-center text-xs sm:text-sm text-blue-700 font-medium">
                {finalAmount >= 5000 ? "🎓 Sponsor a child's education for a month!"
                  : finalAmount >= 2000 ? "🍱 Feed 10 children for a week!"
                  : finalAmount >= 1000 ? "📚 School supplies for 2 children!"
                  : "💙 Every rupee makes a difference!"}
              </div>

              {error && <p className="text-red-500 text-sm text-center">{error}</p>}

              <button onClick={() => { if (validateAmount()) setStep("details"); }}
                className="w-full bg-slate-900 text-white py-4 sm:py-5 rounded-2xl font-bold text-base sm:text-lg hover:bg-black transition-all shadow-xl">
                Continue to Details
              </button>
            </div>
          )}

          {/* STEP 2: DETAILS */}
          {step === "details" && (
            <div className="space-y-3 sm:space-y-4">
              <p className="text-xs bg-amber-50 border border-amber-200 text-amber-700 rounded-xl px-3 py-2 font-medium">
                All fields required for 80G tax exemption certificate
              </p>

              {/* Name */}
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

              {/* Donor Type + Category */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">Donor Type *</label>
                  <select name="donor_type" value={donor.donor_type}
                    onChange={(e) => {
                      const val = e.target.value as DonorDetails["donor_type"];
                      setDonor({ ...donor, donor_type: val, isCompany: val === "corporate" || val === "csr" });
                    }}
                    className={selectCls()}>
                    <option value="individual">Individual</option>
                    <option value="corporate">Corporate</option>
                    <option value="csr">CSR</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">Donor Category *</label>
                  <select name="donor_category" value={donor.donor_category}
                    onChange={(e) => setDonor({ ...donor, donor_category: e.target.value as DonorDetails["donor_category"], state: "", country: "", pincode: "", pan_number: "", passport_number: "" })}
                    className={selectCls()}>
                    <option value="indian">Indian</option>
                    <option value="nri">NRI</option>
                    <option value="foreign">Foreign</option>
                  </select>
                </div>
              </div>

              {/* PAN — Indian and NRI only */}
              {(isIndian || isNRI) && (
                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">
                    PAN Number * {isNRI && <span className="text-blue-500 normal-case">(Indian PAN)</span>}
                  </label>
                  <input name="pan_number" value={donor.pan_number}
                    onChange={(e) => setDonor({ ...donor, pan_number: e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, "") })}
                    placeholder="ABCDE1234F" maxLength={10}
                    className={inputCls(errors.pan_number)} />
                  <ErrorMsg msg={errors.pan_number} />
                </div>
              )}

              {/* Passport — NRI and Foreign only */}
              {(isNRI || isForeign) && (
                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">
                    Passport Number * {isForeign && <span className="text-purple-500 normal-case">(Required for Foreign donors)</span>}
                  </label>
                  <input name="passport_number" value={donor.passport_number}
                    onChange={(e) => setDonor({ ...donor, passport_number: e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, "") })}
                    placeholder="A1234567" maxLength={12}
                    className={inputCls(errors.passport_number)} />
                  <ErrorMsg msg={errors.passport_number} />
                </div>
              )}

              {/* Company checkbox */}
              <label className={`flex items-center gap-3 cursor-pointer p-3 rounded-2xl hover:bg-gray-50 transition ${donor.donor_type !== "individual" ? "opacity-60 pointer-events-none" : ""}`}>
                <input type="checkbox" checked={donor.isCompany}
                  onChange={(e) => setDonor({ ...donor, isCompany: e.target.checked, company_name: "", gst_number: "" })}
                  className="accent-blue-600 w-4 h-4 rounded"
                  disabled={donor.donor_type !== "individual"} />
                <span className="text-xs sm:text-sm font-semibold text-gray-700">Donating on behalf of a Company</span>
              </label>

              {/* Company fields */}
              {donor.isCompany && (
                <div className="grid grid-cols-1 gap-3 p-3 sm:p-4 bg-blue-50 rounded-2xl border border-blue-100">
                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">Company Name *</label>
                    <input name="company_name" value={donor.company_name} onChange={handleChange}
                      placeholder="ABC Pvt. Ltd." className={inputCls(errors.company_name)} />
                    <ErrorMsg msg={errors.company_name} />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">GST Number *</label>
                    <input name="gst_number" value={donor.gst_number}
                      onChange={(e) => setDonor({ ...donor, gst_number: e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, "") })}
                      placeholder="22ABCDE1234F1Z5" maxLength={15}
                      className={inputCls(errors.gst_number)} />
                    <ErrorMsg msg={errors.gst_number} />
                  </div>
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

              {/* State/Country + Pincode */}
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
                  <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">{isIndian ? "Pincode *" : "ZIP Code *"}</label>
                  <input name="pincode" value={donor.pincode}
                    onChange={(e) => setDonor({ ...donor, pincode: isIndian ? e.target.value.replace(/\D/g, "") : e.target.value })}
                    placeholder={isIndian ? "600001" : "e.g. SW1A 1AA"}
                    maxLength={isIndian ? 6 : 12}
                    className={inputCls(errors.pincode)} />
                  <ErrorMsg msg={errors.pincode} />
                </div>
              </div>

              {/* FCRA Notice */}
              {isForeign && (
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-800 font-medium">
                  ⚠️ <strong>FCRA Notice:</strong> Foreign contributions are accepted under the Foreign Contribution (Regulation) Act, 2010.
                </div>
              )}

              {/* Donation Summary */}
              <div className="bg-blue-50 rounded-xl p-3 sm:p-4 flex justify-between items-center">
                <div>
                  <p className="text-xs sm:text-sm text-gray-500">Donating</p>
                  <p className="text-lg sm:text-xl font-bold text-blue-600">₹{finalAmount}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs sm:text-sm text-gray-500">Type</p>
                  <p className="font-bold text-gray-700 capitalize text-sm">{frequency}</p>
                </div>
                <button onClick={() => setStep("amount")} className="text-xs sm:text-sm text-blue-600 font-bold hover:underline">
                  Change
                </button>
              </div>

              {/* Checkboxes */}
              <div className="space-y-2 pt-1">
                <label className="flex items-start gap-3 cursor-pointer p-3 rounded-2xl hover:bg-gray-50 transition">
                  <input type="checkbox" checked={donor.termsAccepted}
                    onChange={(e) => setDonor({ ...donor, termsAccepted: e.target.checked })}
                    className="accent-blue-600 w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span className="text-xs text-gray-600 leading-relaxed">
                    I agree to the <a href="/terms" target="_blank" className="text-blue-600 underline font-semibold">Terms & Conditions</a>, <a href="/privacy" target="_blank" className="text-blue-600 underline font-semibold">Privacy Policy</a> and <a href="/refund-policy" target="_blank" className="text-blue-600 underline font-semibold">Refund Policy</a>
                  </span>
                </label>
                <ErrorMsg msg={errors.termsAccepted} />

                <label className="flex items-start gap-3 cursor-pointer p-3 rounded-2xl hover:bg-gray-50 transition">
                  <input type="checkbox" checked={donor.declarationAccepted}
                    onChange={(e) => setDonor({ ...donor, declarationAccepted: e.target.checked })}
                    className="accent-blue-600 w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span className="text-xs text-gray-600 leading-relaxed">
                    I declare that the above information is correct and true to the best of my knowledge
                  </span>
                </label>
                <ErrorMsg msg={errors.declarationAccepted} />

                <label className="flex items-start gap-3 cursor-pointer p-3 rounded-2xl border border-blue-100 bg-blue-50/50 transition">
                  <input type="checkbox" checked={donor.dpdpConsent}
                    onChange={(e) => setDonor({ ...donor, dpdpConsent: e.target.checked })}
                    className="accent-blue-600 w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span className="text-xs text-gray-600 leading-relaxed">
                    I consent to collection and processing of my personal data for donation and tax receipt purposes under the <strong>Digital Personal Data Protection Act, 2023</strong>
                  </span>
                </label>
                <ErrorMsg msg={errors.dpdpConsent} />
              </div>

              {error && <p className="text-red-500 text-sm text-center">{error}</p>}

              <div className="pt-2 border-t border-slate-100">
                <button onClick={handlePayment} disabled={loading}
                  className="w-full bg-blue-600 text-white py-4 sm:py-5 rounded-2xl font-bold text-base sm:text-lg hover:bg-blue-700 transition shadow-lg flex items-center justify-center gap-3 disabled:opacity-60">
                  {loading
                    ? <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    : `🔒 Complete ₹${finalAmount} Donation`}
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