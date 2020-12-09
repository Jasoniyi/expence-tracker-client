import React from "react";

const dasboardMostExpenses = () => {
  return (
    <div className="container dashboard-most-expense">
      <div className="most-expense-title">
        <h2>Other Options</h2>
      </div>
      <div>
        <ul className="most-expense-row">
          <li className="most-expense-box">
            <div className="most-expense-list-title">Savings</div>
            <div className="most-expense-list-icon" />
          </li>
          <li className="most-expense-box">
            <div className="most-expense-list-title">Refer a friend</div>
            <div className="refer" />
          </li>
          <li className="most-expense-box">
            <div className="most-expense-list-title">
              Tell us about yourself
            </div>
            <div className="about-yourself" />
          </li>
          <li className="most-expense-box">
            <div className="most-expense-list-title">
              Enable Authentification
            </div>
            <div className="authentification" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default dasboardMostExpenses;
