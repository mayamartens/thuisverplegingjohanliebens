import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import "../i18n";

type Props = {
  nl: string;
  fr: string;
  en: string;
}

const LanguageDropdown: React.FC<Props> = ({ nl, fr, en }) => {
  const { i18n } = useTranslation();
  const router = useRouter();
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const changeL = async (lang: string) => {
    try {
      await i18n.changeLanguage(lang);
      router.push(router.pathname, router.asPath, { locale: lang });
    } catch (error) {
      console.error('Error changing language:', error);
    }
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const toggleDropdownLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <div 
      className="relative" 
      suppressHydrationWarning={true} 
      onMouseEnter={toggleDropdown} 
      onMouseLeave={toggleDropdownLeave}
    >
      <button className={` p-1 mt-1 mr-3`}><img 
        src="./world.png" 
        alt="Language" 
        width={20} 
        height={20}
      /></button>
      
      <ul className={`absolute right-0 w-40 top-full  bg-white mt-2 pr-4 p-2 py-2 z-10 rounded-md transition-all duration-300 ${dropdownVisible ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <li className="text-black w-full border-black border-[1px] p-1 m-1 rounded-md text-center hover:py-3">
          <button suppressHydrationWarning={true} onClick={() => changeL("nl")}>{nl}</button>
        </li>
        <li className="text-black w-full border-black border-[1px] p-1 m-1 rounded-md text-center hover:py-3">
          <button suppressHydrationWarning={true} onClick={() => changeL("fr")}>{fr}</button>
        </li>
        <li className="text-black w-full border-black border-[1px] p-1 m-1 rounded-md text-center hover:py-3">
          <button suppressHydrationWarning={true} onClick={() => changeL("en")}>{en}</button>
        </li>
      </ul>
    </div>
  );
};

export default LanguageDropdown;
