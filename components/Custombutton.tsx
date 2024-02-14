
import React, { useEffect } from 'react';

const CalendlyPopupButton = () => {
    useEffect(() => {
        // Dynamically load the Calendly script
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        document.body.appendChild(script);
    }, []);

    const openCalendlyPopup = () => {
        // Assuming you have your Calendly URL
        const calendlyUrl = 'https://calendly.com/nayeem-j94';
        
        // Open Calendly popup
        Calendly.initPopupWidget({ url: calendlyUrl });
        return false; // Prevent default action
    };

    return (
        <div>
            <button onClick={openCalendlyPopup}>Schedule a Meeting</button>
        </div>
    );
};

export default CalendlyPopupButton;
