import React, { useEffect } from 'react';

// Extend the Window interface to include Calendly
declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: ({ url }: { url: string }) => void;
    };
  }
}

const CalendlyPopupButton = () => {
    useEffect(() => {
        // Dynamically load the Calendly script
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        script.onload = () => console.log('Calendly script loaded');
        document.body.appendChild(script);
    }, []);

    const openCalendlyPopup = () => {
        const calendlyUrl = 'https://calendly.com/nayeem-j94';
        
        // Check if Calendly is loaded
        if (window.Calendly) {
            window.Calendly.initPopupWidget({ url: calendlyUrl });
        } else {
            console.error('Calendly has not been loaded yet.');
        }
        return false; // Prevent default action
    };

    return (
        <div>
            <button onClick={openCalendlyPopup}>Schedule a Meeting</button>
        </div>
    );
};

export default CalendlyPopupButton;
