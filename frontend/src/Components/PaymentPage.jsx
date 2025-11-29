import React, { useState } from 'react';
import axios from 'axios';

// NOTE: Replace this with your actual Stripe Publishable Key.
const STRIPE_PK = "pk_test_TYooMQauvdEDq54niTtrW1zh"; 

// Function to safely initialize Stripe from the global object
const getStripePromise = () => {
  // Check if Stripe is available globally (assumes CDN is loaded)
  if (window.Stripe) {
    return window.Stripe(STRIPE_PK);
  }
  console.error("Stripe SDK not loaded. Ensure the CDN script is included.");
  return null;
};

// MOCK DATA: In a real application, fetch this from your API based on the route (e.g., /checkout/:courseId)
const mockCourseData = {
  courseId: "course_xyz_123", // Must match an ID in your MongoDB
  title: "The Advanced JavaScript & React Bootcamp",
  price: 99.00, // Display price (the secure price is fetched from the backend)
  description: "A comprehensive course covering modern React hooks, state management, and full-stack architecture."
};

const PaymentPage = () => {
  const [course] = useState(mockCourseData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCheckout = async () => {
    setLoading(true);
    setError(null);

    try {
      const stripe = getStripePromise();
      
      if (!stripe) {
        setError("Stripe initialization failed.");
        setLoading(false);
        return;
      }

      // 1. Call your backend to create a Checkout Session. 
      // We only send the ID, letting the backend fetch the secure price from MongoDB.
      const backendUrl = "http://localhost:4001/api/create-checkout-session"; 
      
      const response = await axios.post(backendUrl, {
        items: [{ id: course.courseId }], // Pass only the secure ID
        successUrl: 'http://localhost:5173/payment-success',
        cancelUrl: 'http://localhost:5173/payment-cancelled',
      });

      const sessionId = response.data.sessionId;

      // 2. Redirect the user to the secure Stripe Checkout page
      const result = await stripe.redirectToCheckout({
        sessionId: sessionId,
      });

      if (result.error) {
        setError(result.error.message);
        setLoading(false);
      }
    } catch (err) {
      console.error("Checkout Error:", err);
      // Display the error message returned from the backend if available
      const backendError = err.response?.data?.error || "Payment processing failed. Ensure the backend server is running on port 4001.";
      setError(backendError);
      setLoading(false);
    }
  };
  
  // UI component for the order summary
  const OrderSummary = () => (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
      <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">Order Summary</h3>
      <div className="space-y-3">
        <div className="pt-4 flex justify-between text-2xl font-extrabold text-blue-600 border-t border-dashed">
          <span>Total:</span>
          <span>${course.price.toFixed(2)} USD</span>
        </div>
      </div>
    </div>
  );


  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 font-inter">
      <div className="w-full max-w-xl space-y-8">
        <h1 className="text-4xl font-extrabold text-center text-gray-900">Secure Checkout</h1>
        
        <OrderSummary />

        <div className="bg-white p-6 rounded-xl shadow-lg space-y-4">
          
          {error && (
            <div className="p-3 bg-red-100 text-red-700 border border-red-400 rounded-md">
              **Error:** {error}
            </div>
          )}

          <button
            onClick={handleCheckout}
            disabled={loading}
            className={`w-full py-4 text-xl font-bold rounded-xl transition-all duration-200 
                       ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-300'}`}
          >
            {loading ? 'Redirecting to Stripe...' : `Pay $${course.price.toFixed(2)}`}
          </button>
          
          <p className="text-sm text-gray-500 text-center flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-green-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            100% Secure Payment powered by Stripe.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
