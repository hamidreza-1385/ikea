import React from "react";
import { Button } from "react-bootstrap";

const AddTicket = ({ openModal }) => (
  <div className=" col-4 rounded-3 py-4 bg-white text-center justify-content-center align-items-center mb-4">
    <div><h3>تیکت ها</h3></div>
    <div>
        <Button variant="lavender" onClick={openModal} style={{ backgroundColor: '#e0d4fc' }}>
          ارسال تیکت جدید
        </Button>
    </div>
  </div>
);

export default AddTicket;