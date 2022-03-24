import { useCallback, useMemo } from "react";
import { useRouter } from "next/router";

export function useQuery() {
  const router = useRouter();
  const { query } = router;

  const setQuery = useCallback(
    (params, withHistory = true) => {
      router.push({
        pathname: router.pathname,
        query: { ...(withHistory ? router.query : {}), ...params },
      });
    },
    [router]
  );
  const delQuery = useCallback(() => {
    router.push({ pathname: router.pathname, query: {} });
  }, [router]);

  const checkQueryValue = useCallback(
    (param, value) => query[param] === value,
    [query]
  );

  return {
    setQuery,
    delQuery,
    checkQueryValue,
    query,
  };
}
