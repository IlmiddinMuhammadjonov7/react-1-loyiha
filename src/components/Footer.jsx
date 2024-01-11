import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="main_yetti">
        <img src="/Bitmap.svg" alt="" />
        <div>
          <span className="main_sakkiz">01</span>
          <span className="main_toqqiz">Reviving Retro PCs</span>
          <span className="main_on">
            What happens when old PCs are given modern upgrades?
          </span>
        </div>
      </div>
      <div className="main_yetti">
        <img src="/Bitmap (1).svg" alt="" />
        <div>
          <span className="main_sakkiz">02</span>
          <span className="main_toqqiz">Top 10 Laptops of 2022</span>
          <span className="main_on">
          Our best picks for various needs and budgets.
          </span>
        </div>
      </div>
      <div className="main_yetti">
        <img src="/Bitmap (2).svg" alt="" />
        <div>
          <span className="main_sakkiz">03</span>
          <span className="main_toqqiz">The Growth of Gaming</span>
          <span className="main_on">
          How the pandemic has sparked fresh opportunities.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
