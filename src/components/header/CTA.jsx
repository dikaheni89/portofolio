import React from "react";
import CV from "../../assets/cvkulengkap.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#about" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
