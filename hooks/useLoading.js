import React, { createContext, useCallback, useContext, useState } from 'react';
import Loading from '../components/Loader';

/**
 * @typedef {Object} loadingHook
 * @property {boolean} pending - Loading status
 * @property {boolean} blind - true if no opacity, false with opacity
 * @property {function} setLoading
 */

export const INITIAL_STATE = {
  pending: false,
  blind: true,
};

const loadingContext = createContext();

export function LoadingProvider({ children }) {
  const loadingData = useLoadingProvider();
  return (
    <loadingContext.Provider value={loadingData}>
      <Loading loading={loadingData.pending} blind={loadingData.blind} />
      {children}
    </loadingContext.Provider>
  );
}

/**
 * @returns {loadingHook}
 */
export const useLoading = () => {
  return useContext(loadingContext);
};

function useLoadingProvider() {
  const [state, dispatch] = useState(INITIAL_STATE);

  const setLoading = useCallback((pending, blind = true) => dispatch({ pending, blind }), []);

  return {
    ...state,
    setLoading,
  };
}
