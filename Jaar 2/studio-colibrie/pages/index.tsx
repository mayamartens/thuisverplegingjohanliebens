
import Footer from '@/components/Footer';
import Header from '../components/Header';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import { useRouter } from 'next/router';

const Home = () =>  {
  const { t } = useTranslation();
  const router = useRouter();

     const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  
    const validateEmail = (email: string) => {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      let newErrors: typeof errors = {};
  
      if (!formData.name) newErrors.name = "Naam is verplicht";
      if (!formData.email) newErrors.email = "E-mail is verplicht";
      else if (!validateEmail(formData.email)) newErrors.email = "Ongeldig e-mailadres";
      if (!formData.message) newErrors.message = "Bericht is verplicht";
  
      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
      } else {
        alert("Formulier succesvol verzonden!");
        setFormData({ name: "", email: "", message: "" });
        setErrors({});
      }
    };
  return (
    <div>
      <Header 
        place='HOME'      
        />
      <main className='w-full'>
        <div className='bg-black h-80 w-[80%] mx-[10%]'>
          
        </div>
        <div className='mx-[10%] pt-20'>
          <h1 className='text-6xl font-bold'>SERVICES</h1>
          <div className='flex justify-between'>
          <div 
              className='cursor-pointer' 
              onClick={() => router.push('/infeltratiebekken')}
            >
              <div className='bg-black h-80 w-80 mt-20'></div>
              <h3 className='text-2xl font-bold mt-10 w-80'>Infiltratiebekken Calculator</h3>
              <h2 className='text-3xl font-bold mt-4'>€3 /maand</h2>
              <p className='text-xl mt-4 w-80'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices quam at luctus tristique. 
                Phasellus pulvinar et sapien nec porttitor. Morbi felis diam, tempus a porta ullamcorper, 
                mollis vitae quam. Sed dapibus, enim a ullamcorper vestibulum, velit arcu semper libero.
              </p>
            </div>
            
            <div>
              <div className='bg-black h-80 w-80 mt-20'></div>
              <h3 className='text-2xl font-bold mt-10'>Splitser</h3>
              <h2 className='text-3xl font-bold mt-4'>€3 /maand</h2>
              <p className='text-xl mt-4 w-80'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices quam at luctus tristique. Phasellus pulvinar et sapien nec porttitor. Morbi felis diam, tempus a porta ullamcorper, mollis vitae quam. Sed dapibus, enim a ullamcorper vestibulum, velit arcu semper libero, .</p>
            </div>

            <div>
              <div className='bg-black h-80 w-80 mt-20'></div>
              <h3 className='text-2xl font-bold mt-10'>Splitser</h3>
              <h2 className='text-3xl font-bold mt-4'>€3 /maand</h2>
              <p className='text-xl mt-4 w-80'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices quam at luctus tristique. Phasellus pulvinar et sapien nec porttitor. Morbi felis diam, tempus a porta ullamcorper, mollis vitae quam. Sed dapibus, enim a ullamcorper vestibulum, velit arcu semper libero, .</p>
            </div>
            
            <div>
              <div className='bg-black h-80 w-80 mt-20'></div>
              <h3 className='text-2xl font-bold mt-10'>Splitser</h3>
              <h2 className='text-3xl font-bold mt-4'>€3 /maand</h2>
              <p className='text-xl mt-4 w-80'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices quam at luctus tristique. Phasellus pulvinar et sapien nec porttitor. Morbi felis diam, tempus a porta ullamcorper, mollis vitae quam. Sed dapibus, enim a ullamcorper vestibulum, velit arcu semper libero, .</p>
            </div>
          </div>
          <div className='mt-40 mb-24 flex'>
            <div className='bg-black h-[1100px] w-[700px] '></div>
            <div>
              <h2 suppressHydrationWarning className='text-7xl mt-20 font-bold ml-24'>{t('about.title')}</h2>
              <p suppressHydrationWarning className='ml-24 mt-24 w-[1000px]'>{t('about.description')}</p>
              <h3 suppressHydrationWarning  className='ml-24  text-7xl mt-20 font-bold'>{t('contact.contact_title')}</h3>
              <div className='ml-24 mt-24'>
                <form onSubmit={handleSubmit} className="">
                  <div className="mb-4">
                    <label className="block ">Naam</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-2 border rounded-md"
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                  </div>
                  <div className="mb-4">
                    <label className="block ">E-mail</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-2 border rounded-md"
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                  </div>
                  <div className="mb-4">
                    <label className="block">Bericht</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full p-2 border rounded-md"
                    />
                    {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                  </div>
                  <button type="submit" className="w-full bg-black text-white p-2 rounded-md hover:bg-gray-700">
                    Verzenden
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default Home;
