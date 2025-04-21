import React, { useContext } from "react";
import { TicketContext } from "../../../data/dashbord/TicketContext";

const TicketStats = () => {
  const { tickets } = useContext(TicketContext);
  const total = tickets.length;
  const open = tickets.filter(t => t.status === "باز").length;
  const closed = tickets.filter(t => t.status === "بسته").length;

  return (
    <div className="row mb-4">
      <div className="col">
        <div className="p-3 rounded-3 text-center bg-white">
          <h5>تیکت های باز</h5>
          <p className="text-success">{open} تیکت</p>
        </div>
      </div>
      <div className="col">
        <div className="p-3 rounded-3 text-center bg-white">
          <h5>همه تیکت ها</h5>
          <p>{total} تیکت</p>
        </div>
      </div>
      <div className="col">
        <div className="p-3 rounded-3 text-center bg-white">
          <h5>تیکت های بسته شده</h5>
          <p className="text-danger">{closed} تیکت</p>
        </div>
      </div>
    </div>
  );
};

export default TicketStats;