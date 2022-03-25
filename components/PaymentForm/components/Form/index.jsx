import React, { useCallback, useEffect, useState } from "react";
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

import { useQueryHandlers } from "../../../../hooks/useQueryHanlders";
import { UNSUBSCRIBE } from "../../../UnsubscribePopup";
import { PAYMENT_POPUP } from "../..";

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
  const { onOpen: onUnsubscribeOpen } = useQueryHandlers(
    PAYMENT_POPUP,
    UNSUBSCRIBE
  );
  const { trans } = useTrans();

  useEffect(() => {
    setError("");
  }, [product]);

  const sendApiRequest = useCallback(
    (params) =>
      Api.post("/generate-link", params)
        .then((res) => {
          if (res.url) return window.location.replace(res.url);
          if (res.message) return setError(res.message);
        })
        .finally(() => setDisabled(false)),
    []
  );

  const handleEexwallet = useCallback(async () => {
    // if (product.value < 45)
    //   return setError(trans("min-amount-is", { gateway: "BTC", amount: 45 }));
    setDisabled(true);
    const ip = await fetch("https://api.ipify.org?format=json")
      .then((res) => res.json())
      .then((res) => res.ip);

    return sendApiRequest({
      value: product.value,
      ip,
      gateway: EEXWALLET_GATEWAY,
    });
  }, [product.value, sendApiRequest]);

  const handlePayStripe = useCallback(() => {
    setDisabled(true);
    return sendApiRequest({
      value: product.value,
      ongoing,
      gateway: STRIPE_GATEWAY,
    });
  }, [ongoing, product.value, sendApiRequest]);

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
<<<<<<< HEAD
  { !ongoing && <CryptoButton disabled={disabled || !product.value} /> }
  { !ongoing && <Swift /> }
  { !ongoing && <Sepa /> }
  { !ongoing && <Ach /> }
=======
      {!ongoing && (
        <CryptoButton
          disabled={disabled || !product.value}
          onClick={handleEexwallet}
        />
      )}
      {!ongoing && <Details />}
      {ongoing && (
        <div
          className={generateClasses(styles.unsubscribe, "no-select")}
          onClick={onUnsubscribeOpen}
        >
          {trans("unsubscribe")}
        </div>
      )}
>>>>>>> master
  <ErrorBase value={error} />
    </>
  );
}
