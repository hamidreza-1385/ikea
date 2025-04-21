import React, { useContext } from "react";
import { TicketContext } from "../../../data/dashbord/TicketContext";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


const TicketTable = () => {
  const { tickets } = useContext(TicketContext);

  return (
    
        <table className="table text-center m-0 rounded-3 c-s">
        <thead style={{ backgroundColor: "#a06cd5", color: "white" }}>
          <tr>
            <th style={{ backgroundColor: "#a06cd5", color: "white" }}>شماره رهگیری</th>
            <th style={{ backgroundColor: "#a06cd5", color: "white" }}>عنوان تیکت</th>
            <th style={{ backgroundColor: "#a06cd5", color: "white" }}>اولویت تیکت</th>
            <th style={{ backgroundColor: "#a06cd5", color: "white" }}>وضعیت تیکت</th>
            <th style={{ backgroundColor: "#a06cd5", color: "white" }}>تاریخ تیکت</th>
            <th style={{ backgroundColor: "#a06cd5", color: "white" }}>عملیات</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((t, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-light" : ""}>
              <td>{t.id}</td>
              <td>{t.title}</td>
              <td>
                <span
                  className={`badge rounded-pill px-3 py-2 fw-normal ${
                    t.priority === "زیاد" ? "bg-danger" : "bg-success"
                  }`}
                >
                  {t.priority}
                </span>
              </td>
              <td>
                <span
                  className={`fw-bold ${
                    t.status === "باز"
                      ? "text-success"
                      : t.status === "جدید"
                      ? "text-warning"
                      : "text-danger"
                  }`}
                >
                  {t.status}
                </span>
              </td>
              <td>{t.date}</td>
              <td>
                <Button variant="link" className="text-decoration-none text-primary fw-semibold">
                  مشاهده
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    
  );
};

export default TicketTable;