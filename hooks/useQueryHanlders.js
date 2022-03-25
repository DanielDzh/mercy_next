import { checkQueryValue } from "./usePaymentPopup";
import { useQuery } from "./useQuery";

export const useQueryHandlers = (key, value) => {
  const { query, setQuery, delQuery } = useQuery();

  const isOpened = checkQueryValue(query, key, value);
  const onOpen = () => setQuery({ [key]: value }, true);
  const onClose = () => delQuery(true);
  return {
    isOpened,
    onOpen,
    onClose,
  };
};
