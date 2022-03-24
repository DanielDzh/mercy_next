import React, { useState } from "react";
import { generateClasses } from "../../utils/generateClassName";
import styles from "./ProductsList.module.scss";
import { useTrans } from "../../hooks/useTrans";

export const CUSTOM_VALUE = "CUSTOM_VALUE";
export const PRODUCT = "PRODUCT";

export default function ProductsList({
  list,
  onSelect = () => {},
  title,
  withCustomValue,
  customValueTitle,
  selected = {},
}) {
  const { trans } = useTrans();
  const handleCustomValue = (e) =>
    onSelect({ type: CUSTOM_VALUE, value: e.target.value });

  const handleProduct = (item) => onSelect({ ...item, type: PRODUCT });

  return (
    <div className={styles.wrapper}>
      <h4>{title}</h4>
      <div className={styles.products}>
        {list.map((item) => (
          <div
            key={item.value}
            className={generateClasses(
              styles.item,
              item.value === selected.value ? styles.active : null,
              "no-select"
            )}
            onClick={() => handleProduct(item)}
          >
            {item.label}
          </div>
        ))}
      </div>
      {withCustomValue && (
        <>
          <hr />
          <div className={styles.customValue}>
            <div className={generateClasses(styles.adorment, "no-select")}>
              {trans("custom-price")}
            </div>
            <input
              className={styles.customInput}
              value={selected?.type === CUSTOM_VALUE ? selected?.value : ""}
              onChange={handleCustomValue}
              placeholder="125.00"
            />
          </div>
        </>
      )}
    </div>
  );
}
