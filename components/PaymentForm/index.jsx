import React, { useState } from "react";
import PopupWithTitle from "../common/PopupWithTitle";
import Form from "./components/Form";
import PaymentSuccess from "./components/PaymentSuccess";

export default function PaymentForm({ open, onClose }) {
  const [success, setSuccess] = useState(false);

  const title = success ? "ОПЛАТА УСПІШНА" : "ДОПОМОЖИ ЗАРАЗ";

  return (
    <PopupWithTitle title={title} onClose={onClose} open={open}>
      {success ? (
        <PaymentSuccess onClose={onClose} />
      ) : (
        <Form onSuccess={() => setSuccess(true)} />
      )}
    </PopupWithTitle>
  );
}
