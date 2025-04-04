import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";

function LanguageSwitcher() {
  const { locale, locales, asPath } = useRouter();
  const [toggle, setToggle] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setToggle(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const changeLanguage = (newLocale) => {
    // Si la ruta comienza con /es/ o /en/, quitamos esa parte
    const pathWithoutLocale = asPath.replace(/^\/[a-z]{2}\//, '/');

    console.log({pathWithoutLocale});
    
    // Construimos la nueva URL con el nuevo idioma
    window.location.href = `/${newLocale}${pathWithoutLocale}`;
    setToggle(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="pointer-all bg-transparent cursor-pointer language-switcher capitalize"
        onClick={() => setToggle(!toggle)}
      >
        {locale === "en" ? "English" : "Español"}
      </button>
      {toggle && (
        <div className="absolute top-8 right-0 bg-gray-800 rounded-md">
          {locales.map((lng) => (
            <button
              key={lng}
              className="pointer-all text-gray-200 cursor-pointer capitalize w-full text-left"
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
