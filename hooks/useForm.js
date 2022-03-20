import { useCallback, useState } from "react";
import { useTrans } from "./useTrans";

const emptyObjectForErrors = (obj) =>
  Object.keys(obj).reduce((acc, k) => ({ ...acc, [k]: "" }), []);

export const useForm = ({
  initialValues = {},
  submit,
  validate = () => { },
}) => {
  const { trans } = useTrans();
  const [form, setForm] = useState(initialValues);
  const [errors, setErrors] = useState(emptyObjectForErrors(initialValues));
  const [state, setState] = useState({
    error: false,
    dirty: false,
    loading: false,
  });

  const handleState = useCallback(
    (obj = {}) => setState({ ...state, obj }),
    [state]
  );

  const handleField = useCallback(
    (e) => {
      const { value, name } = e.target;
      setForm({ ...form, [name]: value });
      handleState({ error: false, dirty: false, loading: false });
      setErrors(emptyObjectForErrors(initialValues));
    },
    [form, handleState, initialValues]
  );

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      const errors = validate(form, trans);
      if (errors.length) {
        setErrors(
          errors.reduce(
            (acc, curr) => ({ ...acc, [curr.field]: curr.message }),
            {}
          )
        );
        handleState({ error: true });
        return;
      }
      if (submit) {
        handleState({ loading: true });
        await submit(form).catch((e) =>
          handleState({ errorMessage: e.message })
        );
        handleState({ loading: false });
      }
    },
    [form, handleState, submit, trans, validate]
  );

  return {
    form,
    errors,
    formState: state,
    handleField,
    handleSubmit,
  };
};
