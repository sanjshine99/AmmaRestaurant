import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function GDPRConsent() {
  const [visible, setVisible] = useState(false);
  const [accepted, setAccepted] = useState(null);
  const [showIcon, setShowIcon] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("gdprConsent");
    if (consent === "true" || consent === "false") {
      setAccepted(consent === "true");
      setShowIcon(true);
    } else {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("gdprConsent", "true");
    setAccepted(true);
    setVisible(false);
    setShowIcon(true);
  };

  const handleReject = () => {
    localStorage.setItem("gdprConsent", "false");
    setAccepted(false);
    setVisible(false);
    setShowIcon(true);
  };

  const handleIconClick = () => {
    setVisible(true);
    setShowIcon(false);
  };

  return (
    <>
      {/* Cookie Banner */}
      {visible && (
        <div className="fixed bottom-4 left-4 right-4 md:bottom-6 text-center md:right-6 md:left-auto max-w-full md:max-w-xs p-5 rounded-lg 
                        bg-gray-900 shadow-2xl z-50 border border-gray-700">
          
          <p className="text-sm mb-2 text-white">
            We use cookies to improve your experience.
          </p>
          
          {/* FIXED PRIVACY LINK COLOR */}
          <p className="mb-4">
            <Link
              to="/privacy-policy"
              className="text-[#86D276] font-medium underline decoration-[#86D276] hover:text-white transition-colors"
            >
              See our Privacy Policy
            </Link>
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <button
              onClick={handleReject}
              className="bg-gray-700 text-white px-4 py-2 rounded text-sm hover:bg-gray-600 transition"
            >
              Reject
            </button>
            
            {/* FIXED ACCEPT BUTTON COLOR */}
            <button
              onClick={handleAccept}
              className="bg-[#86D276] text-gray-900 font-bold px-4 py-2 rounded text-sm hover:brightness-110 transition"
            >
              Accept
            </button>
          </div>
        </div>
      )}

      {/* Floating Icon FIXED COLOR */}
      {showIcon && !visible && (
        <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40">
          <button
            onClick={handleIconClick}
            className="w-12 h-12 rounded-full bg-[#86D276] shadow-lg border-2 border-white 
                       flex items-center justify-center hover:scale-110 transition active:scale-95 cursor-pointer"
            title="Cookie Preferences"
          >
            <img
              src="/revisit.svg" 
              alt="Cookie Icon"
               loading="lazy"
              className="w-6 h-6 object-contain"
            />
          </button>
        </div>
      )}
    </>
  );
}