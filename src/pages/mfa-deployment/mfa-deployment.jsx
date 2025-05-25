import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

const MFADeployment = () => {
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
      // Track login attempt by sending the email and simulation ID
      await axios.get(`https://api.cybershorts.ai/track/login?email=${encodeURIComponent(email)}&simId=${encodeURIComponent(simId)}`);

      // Redirect to the "You Got Phished" page after login attempt
      navigate("/you-got-phished");
    } catch (error) {
      console.error("Error during login attempt:", error);
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-purple-50 text-center px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full border border-purple-300">
        <h1 className="text-3xl font-bold text-purple-600 mb-4">MFA Deployment</h1>
        <p className="text-gray-700 mb-6">
          Multi-Factor Authentication (MFA) is now required for all 365 users. 
        </p>

        {/* Instead of QR code, now there is a simple login button */}
        <div className="bg-purple-100 text-purple-800 p-3 rounded-lg text-sm mb-4">
          Please log in to complete your MFA setup.
        </div>

        {/* Login Button */}
        <button 
          onClick={handleLogin} 
          className="bg-purple-600 text-white px-6 py-2 rounded-lg mt-4 cursor-pointer"
        >
          Complete Setup
        </button>
      </div>
    </div>
  );
};

export default MFADeployment;
