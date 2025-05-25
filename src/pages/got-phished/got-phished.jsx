// src/components/YouGotPhished.jsx
import { useEffect } from "react";
import axios from "axios";

const YouGotPhished = () => {
//   useEffect(() => {
//     const email = new URLSearchParams(window.location.search).get("email");

//     axios.post("https://your-backend-domain.com/api/track", {
//       event: "phished_page_opened",
//       email,
//       userAgent: navigator.userAgent,
//       timestamp: new Date().toISOString(),
//     }).catch((err) => {
//       console.error("Tracking error:", err);
//     });
//   }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-red-50 text-center px-4">
    <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full border border-red-300">
      <h1 className="text-3xl font-bold text-red-600 mb-4">Oops! You Got Phished 🎣</h1>
      <p className="text-gray-700 mb-6">
        This was a simulated phishing attempt for awareness training.
        Never click suspicious links or enter your credentials on unfamiliar pages.
      </p>
      <div className="bg-red-100 text-red-800 p-3 rounded-lg text-sm mb-4">
        Your interaction was logged for training purposes.
      </div>
      <p className="text-xs text-gray-500">Stay safe online!</p>
    </div>
  </div>
  );
};

export default YouGotPhished;
