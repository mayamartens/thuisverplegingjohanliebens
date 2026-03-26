import { GetStaticPaths, GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const serviceAreas = [
  { naam: "Kortenberg", slug: "kortenberg" },
  { naam: "Bertem", slug: "bertem" },
  { naam: "Zaventem", slug: "zaventem" },
  { naam: "Steenokkerzeel", slug: "steenokkerzeel" },
  { naam: "Perk", slug: "perk" },
  { naam: "Leefdaal", slug: "leefdaal" },
  { naam: "Herent", slug: "herent" },
  { naam: "Leuven", slug: "leuven" },
  { naam: "Kessel-Lo", slug: "kessel-lo" },
  { naam: "Oud-Heverlee", slug: "oud-heverlee" },
  { naam: "Heverlee", slug: "heverlee" },
  { naam: "Wilsele", slug: "wilsele" },
  { naam: "Erps-Kwerps", slug: "erps-kwerps" },
  { naam: "Everberg", slug: "everberg" },
  { naam: "Meerbeek", slug: "meerbeek" },
  { naam: "Veltem-Beisem", slug: "veltem-beisem" },
  { naam: "Winksele", slug: "winksele" },
  { naam: "Holsbeek", slug: "holsbeek" },
  { naam: "Lubbeek", slug: "lubbeek" },
  { naam: "Tervuren", slug: "tervuren" },
];

type Props = {
  stad: string;
  slug: string;
};

const StadPage = ({ stad, slug }: Props) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Thuisverpleging Johan Liebens",
    telephone: "+32471920581",
    email: "liebens.johan@telenet.be",
    url: `https://www.thuisverplegingjohanliebens.be/nl/thuisverpleging-${slug}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: stad,
      addressRegion: "Vlaams-Brabant",
      addressCountry: "BE",
    },
    openingHours: "Mo-Su 00:00-23:59",
  };

  return (
    <>
      <Head>
        <title>{`Thuisverpleging ${stad} | Johan Liebens – 24/7 bereikbaar`}</title>
        <meta
          name="description"
          content={`Professionele thuisverpleging in ${stad}. Johan Liebens biedt wondzorg, palliatieve zorg, hygiënische zorgen en meer. 24/7 bereikbaar. 15 jaar ervaring. Bel 0471 92 05 81.`}
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href={`https://www.thuisverplegingjohanliebens.be/nl/thuisverpleging-${slug}`}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <div className="bg-white">
        <Header />
        <main>
          {/* Hero */}
          <section className="bg-pinkcustom min-h-[60vh] flex items-center">
            <div className="w-full max-w-5xl mx-auto px-6 py-16">
              <div className="bg-white p-10 md:p-16 rounded-3xl shadow-2xl text-center">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-pinkcustom mb-6">
                  Thuisverpleging {stad}
                </h1>
                <p className="text-xl text-black mb-8">
                  Professionele zorg aan huis in {stad} en omgeving. Al 15 jaar
                  uw vertrouwde thuisverpleegkundige in Vlaams-Brabant.
                </p>
                <p className="text-3xl font-bold text-pinkcustom mb-8">
                  0471 92 05 81
                </p>
                <a
                  href="tel:+32471920581"
                  className="inline-block bg-pinkcustom hover:bg-red-950 text-white font-bold rounded-full px-10 py-5 text-xl shadow-lg"
                >
                  Bel ons nu
                </a>
              </div>
            </div>
          </section>

          {/* USP */}
          <section className="bg-orange-300 py-12">
            <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-center gap-8 text-center text-black">
              <div className="flex-1">
                <p className="text-xl font-bold">24/7 Bereikbaar</p>
              </div>
              <div className="flex-1">
                <p className="text-xl font-bold">15 Jaar Ervaring</p>
              </div>
              <div className="flex-1">
                <p className="text-xl font-bold">Zorg met Liefde</p>
              </div>
            </div>
          </section>

          {/* Lokale tekst */}
          <section className="bg-white py-20">
            <div className="max-w-4xl mx-auto px-6">
              <h2 className="text-3xl font-bold text-pinkcustom mb-8">
                Thuisverpleging aan huis in {stad}
              </h2>
              <p className="text-lg text-black leading-relaxed mb-6">
                Bent u op zoek naar een betrouwbare thuisverpleegkundige in{" "}
                {stad}? Thuisverpleging Johan Liebens staat voor u klaar. Wij
                bieden kwalitatieve zorg aan huis in {stad} en de ruimere regio
                Vlaams-Brabant.
              </p>
              <p className="text-lg text-black leading-relaxed mb-6">
                Met meer dan 15 jaar ervaring combineert ons team professionele
                deskundigheid met een persoonlijke en menselijke aanpak. Of het
                nu gaat om wondzorg, palliatieve zorg, hygiënische zorgen of
                gespecialiseerde verpleegkundige handelingen — wij komen naar u
                toe in {stad}.
              </p>
              <p className="text-lg text-black leading-relaxed">
                Wij zijn{" "}
                <strong className="font-bold text-pinkcustom">
                  24/7 bereikbaar
                </strong>
                , ook in het weekend en op feestdagen. Een voorschrift van uw
                arts volstaat voor terugbetaling via het ziekenfonds.
              </p>
            </div>
          </section>

          {/* Diensten */}
          <section className="bg-orange-300 py-20">
            <div className="max-w-4xl mx-auto px-6">
              <h2 className="text-3xl font-bold text-pinkcustom mb-10 text-center">
                Onze diensten in {stad}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: "🏠", titel: "Algemene thuisverzorging" },
                  { icon: "🩹", titel: "Wondzorg op maat" },
                  { icon: "🤝", titel: "Palliatieve zorgen" },
                  { icon: "🛁", titel: "Hygiënische zorgen" },
                  { icon: "💉", titel: "Verpleegkundige handelingen" },
                  { icon: "⚕️", titel: "Gespecialiseerde stomazorgen" },
                ].map((dienst, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-2xl p-6 shadow-lg flex items-center gap-4"
                  >
                    <span className="text-3xl">{dienst.icon}</span>
                    <p className="font-bold text-pinkcustom text-lg">
                      {dienst.titel}
                    </p>
                  </div>
                ))}
              </div>
              <div className="text-center mt-10">
                <Link
                  href="/nl"
                  className="inline-block bg-pinkcustom text-white font-bold rounded-full px-10 py-4 text-xl shadow-lg hover:bg-red-950 transition-colors"
                >
                  Bekijk alle diensten
                </Link>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section className="bg-pinkcustom py-20">
            <div className="max-w-2xl mx-auto px-6 text-center">
              <h2 className="text-3xl font-bold text-white mb-8">
                Thuisverpleging nodig in {stad}?
              </h2>
              <p className="text-white text-xl mb-10">
                Neem vandaag nog contact op. Wij helpen u snel verder.
              </p>
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
                24/7 bereikbaar - ook in het weekend
              </p>
            </div>
          </section>

          {/* Andere steden */}
          <section className="bg-white py-16">
            <div className="max-w-5xl mx-auto px-6 text-center">
              <h2 className="text-2xl font-bold text-pinkcustom mb-8">
                Ook actief in andere gemeenten
              </h2>
              <div className="flex flex-wrap justify-center gap-3">
                {serviceAreas
                  .filter((s) => s.slug !== slug)
                  .map((s) => (
                    <Link
                      key={s.slug}
                      href={`/nl/thuisverpleging-${s.slug}`}
                      className="bg-orange-300 text-black px-5 py-2 rounded-full font-medium hover:bg-pinkcustom hover:text-white transition-colors"
                    >
                      {s.naam}
                    </Link>
                  ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const locales = ["nl", "fr", "en"];
  const paths = serviceAreas.flatMap((s) =>
    locales.map((locale) => ({
      params: { stad: s.slug },
      locale,
    })),
  );

  return { paths, fallback: false };
};
export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const stadSlug = (params?.stad as string).replace("thuisverpleging-", "");
  const gevonden = serviceAreas.find((s) => s.slug === stadSlug);

  if (!gevonden) return { notFound: true };

  return {
    props: {
      stad: gevonden.naam,
      slug: gevonden.slug,
      ...(await serverSideTranslations(locale ?? "nl", ["common"])),
    },
  };
};

export default StadPage;
