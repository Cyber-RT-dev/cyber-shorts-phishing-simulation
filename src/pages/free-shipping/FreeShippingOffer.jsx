import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const FreeShippingOffer = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Used to fetch query parameters
  const [email, setEmail] = useState(null);
  const [simId, setSimId] = useState(null);

  useEffect(() => {
    // Extract the email and simId from the URL query parameters
    const params = new URLSearchParams(location.search);
    const emailParam = params.get("email");
    const simIdParam = params.get("simId");

    if (emailParam && simIdParam) {
      setEmail(emailParam);
      setSimId(simIdParam);
    } else {
      console.error("Email or simulation ID missing from URL");
    }
  }, [location]);

  const handleLogin = async () => {
    if (!email || !simId) {
      console.error("Email or simulation ID not available");
      return;
    }

    try {
      // Track login attempt by sending the email and simulation ID to the backend
      await axios.get(`https://api.cybershorts.ai/track/login?email=${encodeURIComponent(email)}&simId=${encodeURIComponent(simId)}`);

      // Redirect to the "You Got Phished" page after login attempt
      navigate("/you-got-phished");
    } catch (error) {
      console.error("Error during login attempt:", error);
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-yellow-50 text-center px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full border border-yellow-300">
        
        {/* Amazon Logo */}
        <div className="flex justify-center mb-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
            alt="Amazon Logo"
            className="w-32 h-auto"
          />
        </div>

        <h1 className="text-3xl font-bold text-yellow-600 mb-4">Claim Your FREE Shipping 🚚</h1>
        <p className="text-gray-700 mb-6">
          Congratulations! You qualify for free shipping on your next Amazon order. 
          Please log in to your Amazon account to claim your offer.
        </p>
        <div className="bg-yellow-100 text-yellow-800 p-3 rounded-lg text-sm mb-4">
          Don't miss out on this limited-time offer!
        </div>
        <button 
          onClick={handleLogin} 
          className="bg-yellow-600 text-white px-6 py-2 rounded-lg mt-4 cursor-pointer"
        >
          Go to Amazon to Claim Offer
        </button>
      </div>
    </div>
  );
};

export default FreeShippingOffer;
