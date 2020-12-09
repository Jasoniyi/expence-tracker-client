import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalContext";

import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DashboardTransactions = () => {
  const { transactions, deleteTransaction, getTransactions } = useContext(
    GlobalContext
  );

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <div className="dashboard-transaction-wrapper">
      <div className="recent-text"> Recent transactions</div>
      <div className="recent-list">
        <ul>
          {transactions.map((transaction) => (
            <li className="list" key={transaction.id}>
              <div className="list-text">
                <span>
                  <FontAwesomeIcon icon={faCartArrowDown} />
                </span>{" "}
                {transaction.text}
              </div>
              {/* <div className="list-date">{transaction.date}</div> */}
              <div className="list-price">
                <div
                  className={
                    transaction.amount < 0 ? "price-expense" : "price-income"
                  }
                />
                ${transaction.amount}
              </div>
              <div className="list-action">
                <button onClick={() => deleteTransaction(transaction._id)}>
                  {" "}
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DashboardTransactions;
