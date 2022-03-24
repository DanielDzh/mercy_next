import React, { useState } from "react";
import { PayPalButton } from "react-paypal-button-v2";
import { useTrans } from "../../../../hooks/useTrans";
import { generateClasses } from "../../../../utils/generateClassName";
import { CheckBox } from "../../../Checkbox";
import ProductsList from "../../../ProductsList";
import styles from "../../PaymentForm.module.scss";
import CryptoButton from "../CryptoButton";
import StripeButton from "../StripeButton";
import Details from "../Details";


const PRODUCTS = [
  { value: "item_25", label: "$25" },
  { value: "item_50", label: "$50" },
  { value: "item_100", label: "$100" },
  { value: "item_250", label: "$250" },
];

export default function Form({ onSuccess }) {
  const [ongoing, setOngoing] = useState(false);
  const [product, setProduct] = useState({});
  const { trans } = useTrans();

  return (
    <>
      <ProductsList
        list={PRODUCTS}
        title={trans("select-donate-price")}
        onSelect={setProduct}
        selected={product}
        withCustomValue
      />
      <StripeButton />
      <CryptoButton />
      <Details />
    </>
  );
}
