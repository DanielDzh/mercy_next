import React from "react";
import { useForm } from "../../hooks/useForm";
import { generateClasses } from "../../utils/generateClassName";
import { Validator } from "../../utils/validate";
import ButtonBlue from "../ButtonBlue";
import { ErrorBase } from "../common/Error";
import styles from "./ContactUs.module.scss";
import { useTrans } from "../../hooks/useTrans";

const INITIAL_VALUE = {
  name: "",
  phone: "",
  email: "",
  text: "",
};

const validate = (form, trans) => {
  const validator = new Validator(form, trans);
  Object.keys(INITIAL_VALUE).map((k) => validator.requiredField(k));
  validator.checkEmail("email");
  return validator.errors;
};

export default function ContactForm({ onSubmit }) {
  const { trans } = useTrans();
  const { form, handleField, handleSubmit, formState, errors } = useForm({
    initialValues: INITIAL_VALUE,
    submit: onSubmit,
    validate,
  });
  return (
    <div className={styles["form_wrapper"]}>
      <form onSubmit={handleSubmit}>
        <div className={styles["data_user"]}>
          <div className={generateClasses(styles.field, styles.user_name)}>
            <input
              value={form.name}
              onChange={handleField}
              name="name"
              type="text"
              placeholder={trans("contacts_name")}
            />
            <ErrorBase value={errors.name} />
          </div>
          <div className={generateClasses(styles.field, styles["user_phone"])}>
            <input
              type="text"
              value={form.phone}
              onChange={handleField}
              name="phone"
              placeholder={trans("contacts_phone")}
            />
            <ErrorBase value={errors.phone} />
          </div>
        </div>
        <div className={styles["quetion_user"]}>
          <div className={generateClasses(styles.field, styles["user_mail"])}>
            <input
              value={form.email}
              onChange={handleField}
              name="email"
              type="text"
              placeholder={trans("contacts_mail")}
            />
            <ErrorBase value={errors.email} />
          </div>
          <div className={styles.field}>
            <textarea
              rows="4"
              type=""
              value={form.text}
              onChange={handleField}
              name="text"
              placeholder={trans("contacts_message")}
            />
            <ErrorBase value={errors.phone} />
          </div>
        </div>
        <button>
          <ButtonBlue
            title={trans("button_send")}
            type="submit"
            loading={formState.loading}
          />
        </button>
        <ErrorBase value={formState.errorMessage} />
      </form>
    </div>
  );
}
