import React, { useState } from "react";
import { useQuery } from "../../hooks/useQuery";
import { useTrans } from "../../hooks/useTrans";
import PopupWithTitle from "../common/PopupWithTitle";
import Form from "./components/Form";
import PaymentSuccess from "./components/PaymentSuccess";

export const PAYMENT_POPUP = "p";
export const PAYMENT_RESULT = "r";
export const ONE_TIME_MODE = "one-time";
export const ONGOING_MODE = "ongoing";
export const RESULT_FLAG = "r";
export const SUCESSFUL_PAYMENT = "success";

export default function PaymentForm({ open, onClose }) {
  const { query, setQuery, delQuery, checkQueryValue } = useQuery();
  const { trans } = useTrans();

  const success =
    checkQueryValue(PAYMENT_POPUP, ONE_TIME_MODE) &&
    checkQueryValue(PAYMENT_RESULT, SUCESSFUL_PAYMENT);
  const title = success ? trans("payment-success") : trans("help-now");

  return (
    <PopupWithTitle title={title} onClose={onClose} open={open}>
      {success ? (
        <PaymentSuccess onClose={onClose} />
      ) : (
        <Form onSuccess={false} />
      )}
    </PopupWithTitle>
  );
}
