import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Payment() {
  const [loading, setLoading] = useState(false);
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const handlePayment = () => {
    if (!cardName || !cardNumber || !expiry || !cvv) {
      alert("Please fill all payment details!");
      return;
    }

    if (cardNumber.length < 16) {
      alert("Card Number must be 16 digits!");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      alert("Payment Successful! 🎉 Redirecting to download...");
      setLoading(false);

      setTimeout(() => {
        window.location.href = "/download";
      }, 1200);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-pink-100 to-pink-200 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="shadow-2xl rounded-3xl p-6 border border-gray-200 bg-white/90 backdrop-blur space-y-5">

          <h2 className="text-3xl font-bold text-center text-pink-700">
            Secure Checkout
          </h2>

          <p className="text-center text-gray-600">
            Pay securely to access the <b> Premium Book</b>.
          </p>

          {/* Book Details */}
          <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl shadow-sm border">
            {/* <p className="text-xl font-semibold">Operating Systems Book</p> */}
            <p className="text-gray-700">
              Price: <span className="font-bold text-purple-700">₹99</span>
            </p>
          </div>

          {/* Inputs */}
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Card Holder Name"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
              className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-pink-400"
            />

            <input
              type="text"
              placeholder="Card Number (16 digits)"
              maxLength={16}
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, ""))}
              className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-pink-400"
            />

            <div className="flex gap-3">
              <input
                type="text"
                placeholder="MM/YY"
                maxLength={5}
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                className="w-1/2 p-3 border rounded-xl focus:ring-2 focus:ring-pink-400"
              />

              <input
                type="password"
                placeholder="CVV"
                maxLength={3}
                value={cvv}
                onChange={(e) => setCvv(e.target.value.replace(/\D/g, ""))}
                className="w-1/2 p-3 border rounded-xl focus:ring-2 focus:ring-pink-400"
              />
            </div>
          </div>

          {/* Pay Button */}
          <button
            onClick={handlePayment}
            className="w-full text-white font-semibold rounded-xl p-4 bg-pink-600 hover:bg-pink-700 transition"
            disabled={loading}
          >
            {loading ? "Processing Payment..." : "Pay ₹99"}
          </button>

          {loading && (
            <p className="text-center text-sm text-gray-500 animate-pulse">
              Please wait while we verify your payment...
            </p>
          )}
        </div>
      </motion.div>
    </div>
  );
}
