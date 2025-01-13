import { useRouter } from 'next/router';

function LanguageSwitcher() {
  const { locale, locales, asPath } = useRouter();

  const changeLanguage = (newLocale) => {
    // Cambia el idioma de la ruta actual sin recargar la página
    // El idioma se maneja a través de la URL
    window.location.href = `/${newLocale}${asPath.substring(3)}`;
  };

  return (
    <select
      value={locale}
      onChange={(e) => changeLanguage(e.target.value)}
    >
      {locales.map((lng) => (
        <option key={lng} value={lng}>
          {lng === 'en' ? 'English' : 'Español'}
        </option>
      ))}
    </select>
  );
}

export default LanguageSwitcher;