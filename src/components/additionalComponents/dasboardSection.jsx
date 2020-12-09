import React from "react";
import SectionImg from "../../images/expenseTrackImg.jpg";

const DasboardSection = () => {
  return (
    <div className="dashboard-section">
      <h2>Transactions</h2>
      <div className="dashboard-section-wrapper">
        <div className="dashboard-section-image">
          <img src={SectionImg} alt="section" />
        </div>
      </div>
    </div>
  );
};

export default DasboardSection;
