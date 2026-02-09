import React from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowUpIcon } from "@heroicons/react/24/outline";
import Head from "next/head";

const Home = () => {
  const { t } = useTranslation("common");

  const tools = [
    {
      nameKey: "services.general.title",
      descKey: "services.general.description",
      icon: "🏠",
    },
    {
      nameKey: "services.woundCare.title",
      descKey: "services.woundCare.description",
      icon: "🩹",
    },
    {
      nameKey: "services.palliative.title",
      descKey: "services.palliative.description",
      icon: "🤝",
    },
    {
      nameKey: "services.hygiene.title",
      descKey: "services.hygiene.description",
      icon: "🛁",
    },
    {
      nameKey: "services.nursing.title",
      descKey: "services.nursing.description",
      icon: "💉",
    },
    {
      nameKey: "services.stoma.title",
      descKey: "services.stoma.description",
      icon: "⚕️",
    },
  ];

  const serviceAreas = [
    "Kortenberg",
    "Bertem",
    "Zaventem",
    "Steenokkerzeel",
    "Perk",
    "Leefdaal",
    "Herent",
    "Leuven",
    "Kessel-Lo",
    "Oud-Heverlee",
    "Heverlee",
    "Wilsele",
    "Erps-Kwerps",
    "Everberg",
    "Meerbeek",
    "Veltem-Beisem",
    "Winksele",
    "Holsbeek",
    "Lubbeek",
    "Tervuren",
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Thuisverpleging Johan Liebens",
    telephone: "+32471920581",
    email: "liebens.johan@telenet.be",
    areaServed: serviceAreas.map((city) => ({ "@type": "City", name: city })),
  };

  const renderFormattedText = (text: string) => {
    const parts = text.split(/(<strong>.*?<\/strong>)/g);
    return parts.map((part, index) => {
      if (part.startsWith("<strong>") && part.endsWith("</strong>")) {
        const content = part.replace(/<\/?strong>/g, "");
        return (
          <strong key={index} className="font-bold text-pinkcustom">
            {content}
          </strong>
        );
      }
      return part;
    });
  };

  return (
    <>
      <Head>
        <title>Thuisverpleging Johan Liebens | Kortenberg & Leuven</title>
        <meta
          name="description"
          content="Thuisverpleging in Kortenberg, Leuven en omgeving. 15 jaar ervaring, 24/7 bereikbaar. Bel 0471 92 05 81"
        />
        <meta name="robots" content="index, follow" />
        <link rel="icon" type="image/png" href="/logoB.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <div className="bg-white">
        <Header />
        <main>
          {/* Hero */}
          <section className="bg-pinkcustom min-h-[90vh] flex-col flex items-center">
            <div className="z-50 w-full max-w-5xl mx-auto px-6 py-16">
              <div className="bg-white p-10 md:p-16 rounded-3xl shadow-2xl">
                <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold text-pinkcustom">
                  {t("hero.title")}
                </h1>
                <p className="text-xl md:text-2xl text-center text-black mt-6 mb-10">
                  {t("hero.subtitle")}
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button
                    onClick={() =>
                      document
                        .getElementById("diensten")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="bg-orange-300 hover:bg-orange-400 text-black font-bold rounded-full px-10 py-5 text-xl shadow-lg"
                  >
                    {t("hero.discoverServices")}
                  </button>

                  <button
                    onClick={() =>
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="bg-pinkcustom hover:bg-red-950 text-white font-bold rounded-full px-10 py-5 text-xl shadow-lg"
                  >
                    {t("hero.contactUs")}
                  </button>
                </div>
                <p className="text-3xl mt-10 text-center font-bold text-pinkcustom">
                  0471 92 05 81
                </p>
              </div>
            </div>
          </section>

          {/* USP */}
          <section className="bg-orange-300  py-12">
            <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-center gap-8 text-center text-black">
              <div className="flex-1">
                <p className="text-xl font-bold mt-2">{t("usp.available")}</p>
              </div>
              <div className="flex-1">
                <p className="text-xl font-bold mt-2">{t("usp.experience")}</p>
              </div>
              <div className="flex-1">
                <p className="text-xl font-bold mt-2">{t("usp.care")}</p>
              </div>
            </div>
          </section>

          {/* Diensten */}
          <section id="diensten" className="bg-white py-20">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-4xl font-bold text-center text-pinkcustom mb-16">
                {t("services.title")}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {tools.map((tool, index) => (
                  <article
                    key={index}
                    className="bg-white rounded-3xl p-8 border-4 border-orange-300 shadow-lg hover:border-pinkcustom hover:shadow-xl transition-all"
                  >
                    <h3 className="text-xl font-bold text-pinkcustom mb-4">
                      {t(tool.nameKey)}
                    </h3>
                    <p className="text-black leading-relaxed whitespace-pre-line">
                      {renderFormattedText(t(tool.descKey))}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Over Ons */}
          <section className="bg-pinkcustom py-20">
            <div className="max-w-4xl mx-auto px-6">
              <h2 className="text-4xl font-bold text-center text-white mb-12">
                {t("about.title")}
              </h2>
              <div className="bg-white rounded-3xl p-10 md:p-14 shadow-2xl">
                <p className="text-lg text-black leading-loose whitespace-pre-line">
                  {renderFormattedText(t("about.description"))}
                </p>
              </div>
            </div>
          </section>

          {/* Werkgebied */}
          <section className="bg-white py-20">
            <div className="max-w-5xl mx-auto px-6 text-center">
              <h2 className="text-4xl font-bold text-pinkcustom mb-6">
                {t("area.title")}
              </h2>
              <p className="text-black text-xl mb-10">
                {t("area.description")}
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {serviceAreas.map((city, index) => (
                  <span
                    key={index}
                    className="bg-orange-300 text-black px-5 py-2 rounded-full font-medium hover:text-white hover:bg-pinkcustom transition-colors"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="bg-orange-300 py-20">
            <div className="max-w-3xl mx-auto px-6">
              <h2 className="text-4xl font-bold text-center text-black mb-12">
                {t("faq.title")}
              </h2>
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((num) => (
                  <details
                    key={num}
                    className="bg-white rounded-2xl shadow-lg group"
                  >
                    <summary className="font-bold text-pinkcustom cursor-pointer p-6 text-lg flex justify-between items-center">
                      {t(`faq.q${num}`)}
                      <span className="text-black group-open:rotate-180 transition-transform text-2xl">
                        ↓
                      </span>
                    </summary>
                    <p className="px-6 pb-6 text-black">{t(`faq.a${num}`)}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          {/* Vacature */}
          <section className="bg-white py-20">
            <div className="max-w-3xl mx-auto px-6 text-center">
              <h2 className="text-4xl font-bold text-pinkcustom mb-6">
                {t("vacancy.title")}
              </h2>
              <div className="bg-orange-300 rounded-3xl p-10 shadow-lg">
                <p className="text-2xl font-bold text-black mb-4">
                  {t("vacancy.looking")}
                </p>
                <p className="text-xl text-black mb-6">{t("vacancy.days")}</p>
                <a
                  href="tel:+32471920581"
                  className="inline-block bg-pinkcustom text-white font-bold rounded-full px-10 py-4 text-xl shadow-lg hover:bg-pink-700 transition-colors"
                >
                  {t("vacancy.contact")}
                </a>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="bg-pinkcustom py-20">
            <div className="max-w-2xl mx-auto px-6 text-center">
              <h2 className="text-4xl font-bold text-white mb-12">
                {t("contact.title")}
              </h2>
              <a
                href="tel:+32471920581"
                className="block bg-white rounded-3xl p-8 shadow-2xl mb-6 hover:scale-105 transition-transform"
              >
                <p className="text-4xl font-bold text-pinkcustom">
                  0471 92 05 81
                </p>
              </a>
              <a
                href="mailto:liebens.johan@telenet.be"
                className="block bg-white rounded-3xl p-8 shadow-2xl hover:scale-105 transition-transform"
              >
                <p className="text-2xl font-bold text-pinkcustom">
                  liebens.johan@telenet.be
                </p>
              </a>
              <p className="text-white text-xl font-bold mt-10">
                {t("contact.available")}
              </p>
            </div>
          </section>

          {/* Back to Top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 bg-white text-pinkcustom p-4 rounded-full shadow-xl border-4 border-pinkcustom"
            aria-label={t("accessibility.backToTop")}
          >
            <ArrowUpIcon className="h-6 w-6" />
          </button>
        </main>
        <Footer />
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "nl", ["common"])),
    },
  };
};

export default Home;
