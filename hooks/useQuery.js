import { useCallback, useMemo } from "react";
import { useRouter } from "next/router";

export function useQuery() {
  const router = useRouter();
  const { query } = router;

  const setQuery = useCallback(
    (params, shallow, withHistory = true) => {
      router.push(
        {
          pathname: router.pathname,
          query: { ...(withHistory ? router.query : {}), ...params },
        },
        undefined,
        { shallow }
      );
    },
    [router]
  );
  const delQuery = useCallback(
    (shallow) => {
      router.push({ pathname: router.pathname, query: {} }, undefined, {
        shallow,
      });
    },
    [router]
  );

  return {
    setQuery,
    delQuery,
    query,
  };
}
