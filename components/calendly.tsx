import React from "react";
import { InlineWidget } from "react-calendly";

const calendly = () => {
  return (
    <div className="App">
      <InlineWidget url="https://calendly.com/nayeem-j94" />
    </div>
  );
};

export default calendly;