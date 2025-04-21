import React, { createContext, useState } from "react";

export const TicketContext = createContext();

const ticketsInitial = [
  { id: "1234681", title: "fjd", priority: "کم", status: "جدید", date: "1403/12/27 - 17:00" },
  { id: "0850752", title: "تست این بخش", priority: "کم", status: "باز", date: "1403/09/10 - 22:29" },
  { id: "0818722", title: "test", priority: "زیاد", status: "جدید", date: "1403/09/10 - 04:37" },
];

export const TicketProvider = ({ children }) => {
  const [tickets, setTickets] = useState(ticketsInitial);

  const addTicket = (ticket) => setTickets([...tickets, ticket]);

  return (
    <TicketContext.Provider value={{ tickets, addTicket }}>
      {children}
    </TicketContext.Provider>
  );
};
