import Link from 'next/link';
import LanguageDropdown from './LanguageDropdown'
import { useTranslation } from 'next-i18next';

type Props = {
  place: string;
}

const Header: React.FC<Props> = ({ 
  place,
}) => {
  const { t } = useTranslation();

  

  return (
    <header  className='flex justify-between items-center bg-white my-5 mb-10'>
      <Link href="/" className='m-4 ml-9'><img src="./logo.png" width={200} height={200} /></Link>

      <nav className='mr-4 justify-self-center'>
        <ul className="flex align-items space-x-4 relative pt-4 pb-3"><li>
                <button className={` p-1 mt-1 mr-3`}><img 
        src="./instagram.png" 
        alt="Language"   
        width={20} 
        height={20}
      /></button> <button className={` p-1 mt-1 mr-3`}><img 
    src="./pinterest-logo.png" 
    alt="Language" 
    width={20} 
    height={20}
  /></button>
  <button className={` p-1 mt-1 mr-3`}><img 
    src="./linkedin.png" 
    alt="Language" 
    width={20} 
    height={20}
  /></button></li>
              <li>
          <LanguageDropdown nl={t('language.nl')} fr={t('language.fr')} en={t('language.en')} />
        </li>    
        </ul>
      </nav>
    </header>
  );
};

export default Header;