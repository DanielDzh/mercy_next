import React, { useCallback, useState } from "react";
import { PayPalButton } from "react-paypal-button-v2";
import { useTrans } from "../../../../hooks/useTrans";
import { generateClasses } from "../../../../utils/generateClassName";
import { CheckBox } from "../../../Checkbox";
import ProductsList from "../../../ProductsList";
import styles from "../../PaymentForm.module.scss";
import CryptoButton from "../CryptoButton";
import StripeButton from "../StripeButton";
import Details from "../Details";
import { Api } from "../../../../services/api";

export const STRIPE_GATEWAY = "STRIPE";
export const EEXWALLET_GATEWAY = "EEXWALLET";

const PRODUCTS = [
  { value: "price_1KgvmbK7eCTfTup7k2OGXgWR", label: "$25" },
  { value: "price_1KgvmbK7eCTfTup7Qkt20RBI", label: "$50" },
  { value: "price_1KgvmbK7eCTfTup7n7CttSzC", label: "$100" },
  { value: "price_1KgvmbK7eCTfTup7S1IFPzkT", label: "$250" },
];

export default function Form({ onSuccess }) {
  const [ongoing, setOngoing] = useState(false);
  const [product, setProduct] = useState({});
  const [disabled, setDisabled] = useState(false);
  const { trans } = useTrans();

  const handlePayStripe = useCallback(() => {
    setDisabled(true);
    return Api.post("/generate-link", {
      type: product.type,
      value: product.value,
      ongoing: false,
      gateway: STRIPE_GATEWAY,
    })
      .then((res) => {
        console.log("RES", res);
        return window.location.replace(res.url);
      })
      .finally(() => setDisabled(false));
  }, [product.type, product.value]);
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
      <CryptoButton disabled={disabled || !product.value} />
      <Details />
    </>
  );
}
