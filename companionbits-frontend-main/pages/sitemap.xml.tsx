import { GetServerSideProps } from "next";

const serviceAreas = [
  "kortenberg",
  "bertem",
  "zaventem",
  "steenokkerzeel",
  "perk",
  "leefdaal",
  "herent",
  "leuven",
  "kessel-lo",
  "oud-heverlee",
  "heverlee",
  "wilsele",
  "erps-kwerps",
  "everberg",
  "meerbeek",
  "veltem-beisem",
  "winksele",
  "holsbeek",
  "lubbeek",
  "tervuren",
];

const BASE_URL = "https://www.thuisverplegingjohanliebens.be";

function generateSitemap() {
  const staticPages = [
    { url: `${BASE_URL}/nl`, priority: "1.0", changefreq: "monthly" },
    { url: `${BASE_URL}/fr`, priority: "0.8", changefreq: "monthly" },
    { url: `${BASE_URL}/en`, priority: "0.8", changefreq: "monthly" },
  ];

  const stadPages = serviceAreas.flatMap((slug) => [
    {
      url: `${BASE_URL}/nl/thuisverpleging/${slug}`,
      priority: "0.9",
      changefreq: "monthly",
    },
    {
      url: `${BASE_URL}/fr/thuisverpleging/${slug}`,
      priority: "0.7",
      changefreq: "monthly",
    },
    {
      url: `${BASE_URL}/en/thuisverpleging/${slug}`,
      priority: "0.7",
      changefreq: "monthly",
    },
  ]);

  const allPages = [...staticPages, ...stadPages];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`;
}

function Sitemap() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const sitemap = generateSitemap();

  res.setHeader("Content-Type", "text/xml");
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=86400, stale-while-revalidate",
  );
  res.write(sitemap);
  res.end();

  return { props: {} };
};

export default Sitemap;
