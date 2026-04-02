import { useEffect, useRef, useCallback } from "react";

const SCRIPT_ID = "glf-script";

export const useFoodbizOrder = () => {
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!document.getElementById(SCRIPT_ID)) {
      const script = document.createElement("script");
      script.src = "https://www.fbgcdn.com/embedder/js/ewm2.js";
      script.async = true;
      script.defer = true;
      script.id = SCRIPT_ID;
      document.body.appendChild(script);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const openOrderMenu = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    // Poll for the button every 200ms
    intervalRef.current = setInterval(() => {
      const btn = document.querySelector<HTMLButtonElement>(".glf-button");
      if (btn) {
        btn.click();
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }, 200);
  }, []);

  return { openOrderMenu };
};