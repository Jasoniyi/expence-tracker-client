import React, { useContext } from "react";

import { faWallet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { GlobalContext } from "../../context/GlobalContext";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions
    .map((transaction) => transaction.amount)
    .reduce((acc, item) => (acc += item), 0);

  // calculate percentage
  const incomeAmount = transactions.map((transaction) => transaction.amount);

  const income = incomeAmount
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const balancePercent = ((amounts / income) * 100).toFixed(2);

  return (
    <>
      <div className="trans-text">balance</div>
      <div className="trans-amount">
        <div className="trans-icon">
          <FontAwesomeIcon icon={faWallet} />
        </div>
        <div className="amounts">
          <div className="amount">${amounts}</div>
          <div className="trans-percent">
            {balancePercent === "NaN" ? 0 : balancePercent}%
          </div>
        </div>
      </div>
    </>
  );
};

export default Balance;
