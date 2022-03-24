import React, { useLayoutEffect, useState } from "react";
import generateId from "../../utils/generateId";
import { generateClasses } from "../../utils/generateClassName";
import styles from "./Checkbox.module.scss";

export const CheckBox = (props) => {
  const { onChange, value, className, label } = props;
  const [id, setId] = useState(null);

  useLayoutEffect(() => {
    setId(generateId());
  }, []);

  return (
    <div
      className={generateClasses(styles.checkbox, className)}
      data-testid="div"
    >
      <span>
        <input
          type="checkbox"
          checked={value}
          onChange={onChange}
          id={`checkbox${id}`}
          data-testid="checkbox"
        />
        <label htmlFor={`checkbox${id}`}>{label}</label>
      </span>
    </div>
  );
};
