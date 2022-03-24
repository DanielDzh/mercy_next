import React from "react";
import PopupWithTitle from "../common/PopupWithTitle";

export default function SubscriptionForm() {
  const { query, setQuery, delQuery } = useQuery();

  return (
    <PopupWithTitle
      title={title}
      onClose={onClose}
      open={open}
    ></PopupWithTitle>
  );
}
