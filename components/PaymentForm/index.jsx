import React, { useState } from "react";
import { PayPalButton } from "react-paypal-button-v2";
import { generateClasses } from "../../utils/generateClassName";
import { Popup } from "../common/Popup";
import styles from "./PaymentForm.module.scss";

export default function PaymentForm({ open, onClose }) {
  const [checkout, setCheckOut] = useState(10);

  return (
    <Popup open={open} onClose={onClose} fullHeight noPadding>
      <div className={styles.header}>
        <h2>ДОПОМОГТИ ЗАРАЗ</h2>
      </div>
      <div className={styles.body}>
        <div className={styles.input}>
          <span className={styles.label}>Сума пожертви (USD)</span>
          <span className={styles.inputBase}>
            <span className={generateClasses(styles.adornment, "no-select")}>
              $
            </span>
            <input
              className={styles.field}
              placeholder="100.00"
              type="number"
              value={checkout}
              onChange={(e) => setCheckOut(e.target.value)}
              style={{ marginBottom: "0.5rem" }}
            />
          </span>
        </div>

        <PayPalButton
          options={{
            clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
            currency: "USD",
          }}
          amount={checkout}
          shippingPreference={"NO_SHIPPING"}
          onSuccess={(details, data) => {
            alert("Transiction completed");

            console.log({ details, data });
          }}
        />
      </div>
    </Popup>
  );
}
