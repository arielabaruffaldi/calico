import { createIntl, createIntlCache } from 'react-intl';

const cache = createIntlCache();

export function createIntlInstance(locale) {
  return createIntl(
    {
      locale,
      // messages: require(`../locales/${locale}.json`), 
    },
    cache
  );
}