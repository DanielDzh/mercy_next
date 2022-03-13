import * as IntlLib from 'react-intl';

export default function useTrans() {
  const { useIntl } = IntlLib;
  const { formatMessage, ...rest } = useIntl();
  return {
    trans: (key, params) => formatMessage({ id: key }, params),
    ...rest,
  };
}
