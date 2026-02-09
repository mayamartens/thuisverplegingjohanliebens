import { useTranslation } from "next-i18next";
import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  const { t } = useTranslation("common");

  return (
    <footer className="bg-orange-300 text-black px-6 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-6">
          Thuisverpleging Johan Liebens
        </h3>

        <div className="flex flex-col md:flex-row justify-center gap-6 mb-8">
          <a
            href="tel:+32471920581"
            className="hover:text-pinkcustom transition-colors text-lg"
          >
            0471 92 05 81
          </a>
          <a
            href="mailto:liebens.johan@telenet.be"
            className="hover:text-pinkcustom transition-colors text-lg"
          >
            liebens.johan@telenet.be
          </a>
        </div>

        <a
          href="/GDPR.pdf"
          download="GDPR.pdf"
          className="text-black hover:text-pinkcustom transition-colors"
        >
          {t("random.privacy")}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
