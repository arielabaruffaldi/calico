import { useRouter } from "next/router";
import { useState } from "react";

function LanguageSwitcher() {
  const { locale, locales, asPath } = useRouter();
  const [toggle, setToggle] = useState(false);

  const changeLanguage = (newLocale) => {
    // Cambia el idioma de la ruta actual sin recargar la página
    // El idioma se maneja a través de la URL
    window.location.href = `/${newLocale}${asPath.substring(3)}`;
  };

  /* return (
    <select
      value={locale}
      onChange={(e) => changeLanguage(e.target.value)}
      className='pointer-all bg-transparent text-gray-200 cursor-pointer language-switcher'
    >
      {locales.map((lng) => (
        <option key={lng} value={lng}>
          {lng === 'en' ? 'English' : 'Español'}
        </option>
      ))}
    </select>
  ); */
  return (
    <div className="relative">
      <button
        className="pointer-all bg-transparent text-gray-200 cursor-pointer language-switcher capitalize"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {locale === "en" ? "English" : "Español"}
      </button>
      {toggle && (
        <div className="absolute top-8 right-0 bg-gray-800 rounded-md p-2 translate-x-1">
          {locales.map((lng) => (
            <button
              key={lng}
              className="pointer-all text-gray-200 cursor-pointer capitalize"
              onClick={() => changeLanguage(lng)}
            >
              {lng === "en" ? "English" : "Español"}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default LanguageSwitcher;
