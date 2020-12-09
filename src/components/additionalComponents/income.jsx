import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

import { faMoneyCheckAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Income = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  // calculate percentage

  return (
    <>
      <div className="trans-text">income</div>
      <div className="trans-amount">
        <div className="trans-icon">
          <FontAwesomeIcon icon={faMoneyCheckAlt} />
        </div>
        <div className="amount">${income}</div>
        {/* <div className="trans-percent">{incomeTotal}%</div> */}
      </div>
    </>
  );
};

export default Income;
