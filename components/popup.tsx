import React, { useEffect, useState } from "react";
import { PopupWidget } from "react-calendly";

const Calan = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set isClient to true to indicate this code is now running on the client
    setIsClient(true);
  }, []);

  return (
    <div className="App">
      {isClient && (
        <PopupWidget
          url="https://calendly.com/nayeem-j94"
          rootElement={document.getElementById("__next")}
          text="Book SEO Consultation Call!​!"
          textColor="#ffffff"
          color="#00a2ff"
        />
      )}
    </div>
  );
};

export default Calan;
