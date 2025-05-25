import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const SecurityUpdate = () => {
  const navigate = useNavigate();
  const location = useLocation();  // Used to fetch query parameters
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
      navigate("/");
    } catch (error) {
      console.error("Error during login attempt:", error);
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-blue-50 text-center px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full border border-blue-300">
        {/* Microsoft Logo */}
        <div className="flex justify-center mb-4">
          <img
            src="https://uhf.microsoft.com/images/microsoft/RE1Mu3b.png"
            alt="Microsoft Logo"
            className="w-32 h-auto"
          />
        </div>

        <h1 className="text-3xl font-bold text-blue-600 mb-4">Microsoft Security Update</h1>
        <p className="text-gray-700 mb-6">
          Your account has been flagged for a required security update.
          Please click "Log In Now" to apply the patch.
        </p>

        {/* Log In Now Button */}
        <button
          onClick={handleLogin}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg w-full cursor-pointer"
        >
          Log In Now
        </button>
        
        <p className="text-xs text-gray-500 mt-4">If you did not request this, please contact support.</p>
      </div>
    </div>
  );
};

export default SecurityUpdate;
