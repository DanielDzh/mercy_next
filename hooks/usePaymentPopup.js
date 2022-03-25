import {
  ONE_TIME_MODE,
  PAYMENT_POPUP,
  ONGOING_MODE,
} from "../components/PaymentForm";
import { useQuery } from "./useQuery";

export const checkQueryValue = (query, param, value) => query[param] === value;

export const usePaymentPopup = () => {
  const { query, setQuery, delQuery } = useQuery();

  const openedOneTimePayment = checkQueryValue(
    query,
    PAYMENT_POPUP,
    ONE_TIME_MODE
  );
  const openedOngoingPayment = checkQueryValue(
    query,
    PAYMENT_POPUP,
    ONGOING_MODE
  );
  const onOpenOneTimePayment = () =>
    setQuery({ [PAYMENT_POPUP]: ONE_TIME_MODE }, true);
  const onOpenOngoingPayment = () =>
    setQuery({ [PAYMENT_POPUP]: ONGOING_MODE }, true);
  const onClosePayment = () => delQuery(true);

  return {
    openedOneTimePayment,
    openedOngoingPayment,
    onOpenOneTimePayment,
    onOpenOngoingPayment,
    onClosePayment,
  };
};
