import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Table } from "react-bootstrap"
import { Link } from "react-router-dom";
import Navigationbar from "./Navigationbar";

function Listtransaction() {
  const [Transaction, setTransaction] = useState([]);

  useEffect(() => {
    console.log("running...")
    axios
      .get("http://localhost:8080/transaction/")
      .then((res) => setTransaction(res.data))
      .catch((err) => console.log("error occured"));
  }, []);

  function getRowTags() {
    const rowTags = Transaction.map((t) => (
      <tr key={t.transactionid}>
        <td>{t.transactionid}</td>
        <td>{t.customer.customerid}</td>
        <td>{t.senderbicBank.bic}</td>
        <td>{t.receiveraccountholdername}</td>
        <td>{t.receiveraccountholdernumber}</td>
        <td>{t.receiverbicBank.bic}</td>
        <td>{t.amount}</td>
        <td>{t.transferdate}</td>
        <td>{t.message.messagecode}</td>
        <td>{t.transfertypes.transfertypecode}</td>
        <td key={t.customer.customerid}>
          <div className="actions">
            <Link to={"/transaction/" + `${t.transactionid}`}>Show</Link>
          </div>
        </td>
      </tr>
    ));
    return rowTags;
  }

  return (
    <div>
      <Navigationbar/>
      <br/><br/><br/>
      <Card className={"border border-white bg-white text-black"}>
        <Card.Header><h5> Transaction list</h5></Card.Header>
        <Card.Body>
          <Table bordered hover striped variant="white">
            <thead>
              <tr>
                <th>Transaction ID</th>
                <th>SenderID</th>
                <th>senderBIC</th>

                <th>ReceiverNumber</th>
                <th>ReceiverName</th>
                <th>ReceiverBIC</th>
                <th>Amount Transfered</th>

                <th>TransferDate</th>
                <th>Message</th>
                <th>TransferType</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {getRowTags()}
            </tbody>
            </Table>
          </Card.Body>
        </Card>
        </div>
      );
}

export default Listtransaction;