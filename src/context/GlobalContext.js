import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

// initial State
const initialState = {
  transactions: [],
  error: null,
  loading: true,
};

//create context
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //create Actions
  async function getTransactions() {
    try {
      const res = await axios.get(
        "https://expence-tracking.herokuapp.com/api/v1/transactions"
      );

      dispatch({
        type: "GET_TRANSACTIONS",
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: err.res.data.error,
      });
    }
  }

  const addTransaction = async (transaction) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };
    try {
      const res = await axios.post(
        `https://expence-tracking.herokuapp.com/api/v1/transactions`,
        transaction,
        config
      );
      dispatch({
        type: "ADD_TRANSACTION",
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: err.res.data.error,
      });
    }
  };

  const deleteTransaction = async (id) => {
    try {
      await axios.delete(
        `https://expence-tracking.herokuapp.com/api/v1/transactions/${id}`
      );

      dispatch({
        type: "DELETE_TRANSACTION",
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: err.res.data.error,
      });
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        error: state.error,
        loading: state.loading,
        getTransactions,
        addTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
