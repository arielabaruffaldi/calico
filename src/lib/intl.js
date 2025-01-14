import { createIntl, createIntlCache } from 'react-intl';

const cache = createIntlCache();

export function createIntlInstance(locale) {
  return createIntl(
    {
      locale,
    },
    cache
  );
}