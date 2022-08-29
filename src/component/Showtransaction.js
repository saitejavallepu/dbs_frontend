import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function Showtransaction() {
    const [t, setTransaction] = useState(null);
        const params = useParams();
      
        useEffect(() => {
          axios.get("http://localhost:8080/transaction/" + params.id)
            .then((res) => setTransaction(res.data))
            .catch((err) => console.log("error occured"));
        }, []);
  
        function getSenderdetails() {
            return (
                <div className="senderdetails">
                  <h3>Sender Details</h3>
                  <p> ID : {t.customer.customerid}</p>
                  <p> Name : {t.customer.acountholdername}</p>
                  <p> Account : {t.customer.customertype}</p>
                  <p> Balance : {t.customer.clearbalance}</p>
                  <p> Overdraft : {t.customer.overdraftflag}</p>
                  <p> Address : {t.customer.customeraddress}</p>
                  <p> city : {t.customer.customercity}</p>
                </div>
            );
          }
        
          function getReceiverdetails(){
            return(
              <div className="receiverdetails">
                <h3>Receiver Details</h3>
                  <p> Name : {t.receiveraccountholdername}</p>
                  <p> Account Number : {t.receiveraccountholdernumber}</p>
                  <p>BIC : {t.receiverbicBank.bic}</p>
              </div>
            )
          }
        
          function getdetails(){
            return (
              <div>
                <p><b>Amount Transfered</b>: {t.amount}.00 /-</p>
                <p> <b> MessageCode </b>: {t.message.messagecode} = {t.message.instruction}</p>
                <p><b> TransferTypes </b>: {t.transfertypes.transfertypecode} = {t.transfertypes.transfertypedescription}</p>
              </div>
            )
          }

    return (
        <div className="Cdetails">
      
      {t && getSenderdetails()} 
      {t && getReceiverdetails()}
      {t && getdetails()}
    </div>
    )
}

export default Showtransaction
