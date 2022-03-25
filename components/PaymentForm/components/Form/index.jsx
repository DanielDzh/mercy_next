import React, { useCallback, useState } from "react";
import { PayPalButton } from "react-paypal-button-v2";
import { useTrans } from "../../../../hooks/useTrans";
import { generateClasses } from "../../../../utils/generateClassName";
import { CheckBox } from "../../../Checkbox";
import ProductsList from "../../../ProductsList";
import styles from "../../PaymentForm.module.scss";
import CryptoButton from "../CryptoButton";
import StripeButton from "../StripeButton";
import { Api } from "../../../../services/api";
import { ErrorBase } from "../../../common/Error";
import Sepa from "../Sepa";
import Swift from "../Swift";
import Ach from "../Ach";


export const STRIPE_GATEWAY = "STRIPE";
export const EEXWALLET_GATEWAY = "EEXWALLET";

const PRODUCTS = [
  { value: "25", label: "$25" },
  { value: "50", label: "$50" },
  { value: "100", label: "$100" },
  { value: "250", label: "$250" },
];

export default function Form({ onSuccess, ongoing }) {
  const [product, setProduct] = useState({});
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState("");
  const { trans } = useTrans();

  const handlePayStripe = useCallback(() => {
    setDisabled(true);
    return Api.post("/generate-link", {
      value: product.value,
      ongoing,
      gateway: STRIPE_GATEWAY,
    })
      .then((res) => {
        console.log("RES", res);
        if (res.url) return window.location.replace(res.url);
        if (res.message) return setError(res.mesasge);
      })
      .finally(() => setDisabled(false));
  }, [ongoing, product.value]);

  return (
    <>
      <ProductsList
        list={PRODUCTS}
        title={trans("select-donate-price")}
        onSelect={setProduct}
        selected={product}
        withCustomValue
      />
      <StripeButton
        disabled={disabled || !product.value}
        onClick={handlePayStripe}
      />
      {!ongoing && <CryptoButton disabled={disabled || !product.value} />}
      {!ongoing && <Swift />}
      {!ongoing && <Sepa />}
      {!ongoing && <Ach />}
      <ErrorBase value={error} />
    </>
  );
}
