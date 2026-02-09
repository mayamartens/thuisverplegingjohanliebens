import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const ICON_SIZE = 24;
const DROPDOWN_DELAY = 150;

const Header = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const [desktopLanguageOpen, setDesktopLanguageOpen] =
    useState<boolean>(false);
  const languageDropdownTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleLanguageDropdownEnter = () => {
    if (languageDropdownTimeout.current) {
      clearTimeout(languageDropdownTimeout.current);
    }
    setDesktopLanguageOpen(true);
  };

  const handleLanguageDropdownLeave = () => {
    languageDropdownTimeout.current = setTimeout(() => {
      setDesktopLanguageOpen(false);
    }, DROPDOWN_DELAY);
  };

  const changeLanguage = (lang: string) => {
    router.push(router.pathname, router.asPath, { locale: lang });
    setDesktopLanguageOpen(false);
  };

  // Desktop language dropdown
  const DesktopLanguageDropdown = () => (
    <div
      className="relative flex-shrink-0"
      style={{ width: ICON_SIZE, height: ICON_SIZE, minWidth: ICON_SIZE }}
      onMouseEnter={handleLanguageDropdownEnter}
      onMouseLeave={handleLanguageDropdownLeave}
    >
      <button
        className="flex items-center justify-center p-0"
        style={{ width: ICON_SIZE, height: ICON_SIZE }}
      >
        <img
          src="/globe.png"
          alt="Language"
          style={{ width: ICON_SIZE, height: ICON_SIZE, objectFit: "contain" }}
        />
      </button>

      {/* Invisible bridge to connect button to dropdown */}
      <div
        className={`absolute left-1/2 -translate-x-1/2 w-16 h-4 ${
          desktopLanguageOpen ? "block" : "hidden"
        }`}
        style={{ top: ICON_SIZE }}
      />

      <ul
        className={`
          absolute right-0 w-40 bg-pinkcustom 
          rounded-xl border-2 border-white p-2 z-50 transition-all duration-200
          ${desktopLanguageOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}
        `}
        style={{ top: ICON_SIZE + 8 }}
      >
        <li
          className={`text-black ${
            router.locale === "nl" ? "bg-gray-200" : "bg-white hover:scale-105"
          } p-2 my-1 rounded-lg text-center transition-transform cursor-pointer`}
        >
          <button onClick={() => changeLanguage("nl")} className="w-full">
            {t("language.nl")}
          </button>
        </li>
        <li
          className={`text-black ${
            router.locale === "fr" ? "bg-gray-200" : "bg-white hover:scale-105"
          } p-2 my-1 rounded-lg text-center transition-transform cursor-pointer`}
        >
          <button onClick={() => changeLanguage("fr")} className="w-full">
            {t("language.fr")}
          </button>
        </li>

        <li
          className={`text-black ${
            router.locale === "en" ? "bg-gray-200" : "bg-white hover:scale-105"
          } p-2 my-1 rounded-lg text-center transition-transform cursor-pointer`}
        >
          <button onClick={() => changeLanguage("en")} className="w-full">
            {t("language.en")}
          </button>
        </li>
      </ul>
    </div>
  );

  return (
    <>
      <header className="w-full z-50 bg-orange-300 text-black py-4">
        <div className="">
          {/* Main header bar */}
          <div className="flex items-center justify-end w-[95%] mx-auto">
            <>
              {/* Logo */}

              <div className="flex items-center">
                <DesktopLanguageDropdown />
              </div>
            </>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
