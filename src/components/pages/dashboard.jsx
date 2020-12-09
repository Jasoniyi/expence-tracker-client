import React, { useState, useContext } from "react";
import moment from "moment";

import RecentTransasctions from "../additionalComponents/dashboardTransactions";
import Section from "../additionalComponents/dasboardSection";
import MostExpenses from "../additionalComponents/dasboardMostExpenses";
import Balance from "../additionalComponents/balance";
import Expence from "../additionalComponents/expence";
import Income from "../additionalComponents/income";

import { faBell, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Button, Modal, Form } from "react-bootstrap";

import { GlobalContext } from "../../context/GlobalContext";

const Home = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState();

  const [show, setShow] = useState(false);

  const { addTransaction } = useContext(GlobalContext);

  const handleClose = () => setShow(false);

  const handleModal = () => {
    setShow(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      date: moment().format("L"),
      text,
      amount: +amount,
    };

    console.log(newTransaction);
    addTransaction(newTransaction);
    setText("");
    setAmount();
    setShow(false);
  };

  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-header">
        <div className="dashboard-header-left">
          <input placeholder="Search for expence" type="text" />
        </div>
        <div className="dashboard-header-right">
          <button onClick={() => handleModal()}>Add expense</button>

          <div className="icons">
            <FontAwesomeIcon icon={faBell} className="icon-left" />
            <FontAwesomeIcon icon={faUserCircle} className="icon-right" />
          </div>
        </div>
      </div>

      {/* MOdal */}
      {show ? (
        <>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add Transactions</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label htmlFor="item">Item</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Input item"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label htmlFor="amount">Amount</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="input Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                  <Form.Text className="text-muted">
                    Please input negative sign, if it's an expense.
                  </Form.Text>
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" type="submit" onClick={handleSubmit}>
                Add Transaction
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      ) : null}
      {/* End Modal */}

      <div className="dashboard-transactions">
        <div className="balance">
          <Balance />
        </div>
        <div className="expense">
          <Expence />
        </div>
        <div className="income">
          <Income />
        </div>
      </div>
      <div className="recent-trans">
        <div className="trans-left">
          <RecentTransasctions />
        </div>
        <div className="trans-right">
          <Section />
        </div>
      </div>

      {/* most transaction */}
      <div className="most-expenses">
        <MostExpenses />
      </div>
    </div>
  );
};

export default Home;
