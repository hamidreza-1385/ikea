
import React, { useState } from "react";
import { TicketProvider } from "../../data/dashbord/TicketContext";
import TicketStats from "../dashboard/Ticket/TicketState";
import TicketTable from "../dashboard/Ticket/TicketTable";
import AddTicketModal from "../dashboard/Ticket/TicketModal";
import "bootstrap/dist/css/bootstrap.min.css";
import AddTicket from "../dashboard/Ticket/AddTicket";

const TicketDashboard = () => {
  const [show, setShow] = useState(false);

  return (
    <TicketProvider>
      <div className="container mt-5">
        <TicketStats />
        <div className="d-flex justify-content-center"><AddTicket openModal={() => setShow(true)} /></div>
        <TicketTable />
        <AddTicketModal show={show} handleClose={() => setShow(false)} />
      </div>
    </TicketProvider>
  );
};

export default TicketDashboard;