import React, { useContext, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { TicketContext } from "../../../data/dashbord/TicketContext";

const AddTicketModal = ({ show, handleClose }) => {
  const { addTicket } = useContext(TicketContext);
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("کم");

  const handleSubmit = () => {
    const newTicket = {
      id: Math.floor(Math.random() * 10000000).toString(),
      title,
      priority,
      status: "جدید",
      date: new Date().toLocaleString("fa-IR-u-nu-latn"),
    };
    addTicket(newTicket);
    handleClose();
    setTitle("");
    setPriority("کم");
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>ارسال تیکت جدید</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>عنوان تیکت</Form.Label>
            <Form.Control
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="عنوان را وارد کنید"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>اولویت</Form.Label>
            <Form.Select value={priority} onChange={(e) => setPriority(e.target.value)}>
              <option value="کم">کم</option>
              <option value="زیاد">زیاد</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          بستن
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          ارسال
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddTicketModal;