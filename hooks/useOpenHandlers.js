import { useCallback, useState } from 'react';

export const useOpenHandlers = (defaultValue = false) => {
  const [open, setOpen] = useState(defaultValue);

  const onOpen = useCallback(() => setOpen(true), []);
  const onClose = useCallback(() => setOpen(false), []);

  return {
    open,
    onOpen,
    onClose,
  };
};
