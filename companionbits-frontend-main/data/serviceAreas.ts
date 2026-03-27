export type ServiceArea = {
  naam: string;
  slug: string;
  postcode: string;
  deelgemeenten: string;
  intro: string;
  lokaleContext: string;
};

export const serviceAreas: ServiceArea[] = [
  {
    naam: "Kortenberg",
    slug: "kortenberg",
    postcode: "3070",
    deelgemeenten: "Erps-Kwerps, Meerbeek en Everberg",
    intro:
      "Kortenberg (3070) is een levendige gemeente tussen Leuven en Brussel, met de deelgemeenten Erps-Kwerps, Meerbeek en Everberg. Thuisverpleging Johan Liebens is hier al jaren actief en kent de regio door en door.",
    lokaleContext:
      "Dankzij onze centrale ligging bereiken wij elke hoek van Kortenberg snel — ook bij dringende zorgsituaties. Wij werken nauw samen met de huisartsen en specialisten in de regio.",
  },
  {
    naam: "Bertem",
    slug: "bertem",
    postcode: "3060",
    deelgemeenten: "Leefdaal, Korbeek-Lo en Bertem-centrum",
    intro:
      "Bertem (3060) is een rustige gemeente in het zuidoosten van Vlaams-Brabant, grenzend aan Leuven en Kortenberg. De gemeente omvat de deelgemeenten Leefdaal en Korbeek-Lo.",
    lokaleContext:
      "Onze verpleegkundigen zijn vertrouwd met de wegen en gehuchten van Bertem en omgeving. Wij komen snel bij u thuis, of u nu in het centrum of in een van de deelgemeenten woont.",
  },
  {
    naam: "Zaventem",
    slug: "zaventem",
    postcode: "1930",
    deelgemeenten: "Sint-Stevens-Woluwe, Sterrebeek en Nossegem",
    intro:
      "Zaventem (1930) ligt vlak bij de luchthaven en omvat de deelgemeenten Sint-Stevens-Woluwe, Sterrebeek en Nossegem. Een dynamische gemeente aan de rand van Brussel.",
    lokaleContext:
      "Thuisverpleging Johan Liebens is actief in heel Zaventem en de aangrenzende deelgemeenten. Wij bieden dezelfde kwaliteit van zorg, ongeacht waar u precies woont.",
  },
  {
    naam: "Steenokkerzeel",
    slug: "steenokkerzeel",
    postcode: "1820",
    deelgemeenten: "Humelgem en Perk",
    intro:
      "Steenokkerzeel (1820) is een groene gemeente ten noordoosten van Brussel, met de deelgemeenten Humelgem en Perk. De gemeente combineert een landelijk karakter met een goede bereikbaarheid.",
    lokaleContext:
      "Wij kennen de wegen en gehuchten van Steenokkerzeel en zijn snel ter plaatse. Zowel in het centrum als in Humelgem en Perk staat ons team voor u klaar.",
  },
  {
    naam: "Perk",
    slug: "perk",
    postcode: "1820",
    deelgemeenten: "Perk-centrum en omgeving Steenokkerzeel",
    intro:
      "Perk (1820) is een rustige deelgemeente van Steenokkerzeel, gelegen tussen het groen van Vlaams-Brabant. Een aangename woonomgeving met een hechte gemeenschap.",
    lokaleContext:
      "Thuisverpleging Johan Liebens komt regelmatig bij patiënten in Perk over de vloer. Korte rijafstanden en een vertrouwd gezicht — dat is onze aanpak in kleine kernen zoals deze.",
  },
  {
    naam: "Leefdaal",
    slug: "leefdaal",
    postcode: "3061",
    deelgemeenten: "Leefdaal-centrum en Korbeek-Lo",
    intro:
      "Leefdaal (3061) is een landelijke deelgemeente van Bertem, genesteld in het glooiende landschap van Vlaams-Brabant. Een rustige woonomgeving op een boogscheut van Leuven.",
    lokaleContext:
      "Wij zijn goed bekend in Leefdaal en de omliggende buurtschappen. Kwaliteitsvolle thuisverpleging hoeft niet alleen in de stad te zijn — ook in Leefdaal staat ons team voor u klaar.",
  },
  {
    naam: "Herent",
    slug: "herent",
    postcode: "3020",
    deelgemeenten: "Veltem-Beisem, Winksele en Herent-centrum",
    intro:
      "Herent (3020) ligt direct ten noorden van Leuven en omvat de deelgemeenten Veltem-Beisem en Winksele. Een populaire woongemeente voor gezinnen die de stad mijden maar toch nabijheid zoeken.",
    lokaleContext:
      "Vanuit onze vertrouwde aanwezigheid in de regio Leuven bereiken wij Herent en alle deelgemeenten vlot. Uw verpleegkundige kent de buurt en is snel bij u.",
  },
  {
    naam: "Leuven",
    slug: "leuven",
    postcode: "3000",
    deelgemeenten: "Heverlee, Kessel-Lo, Wijgmaal en Wilsele",
    intro:
      "Leuven (3000) is de hoofdstad van Vlaams-Brabant, een bruisende universiteitsstad met een breed zorgaanbod. Wij zijn actief in de stad zelf en in alle deelgemeenten.",
    lokaleContext:
      "In een stad als Leuven is persoonlijke thuiszorg een welgekomen alternatief voor de drukke ziekenhuisomgeving. Johan Liebens biedt die warme, menselijke zorg aan huis — ook midden in de stad.",
  },
  {
    naam: "Kessel-Lo",
    slug: "kessel-lo",
    postcode: "3010",
    deelgemeenten: "Kessel-Lo-centrum en aangrenzende Leuvense wijken",
    intro:
      "Kessel-Lo (3010) is de grootste deelgemeente van Leuven, met een eigen karakter en uitgestrekte woonwijken. Het is een van onze meest actieve verzorgingszones.",
    lokaleContext:
      "Thuisverpleging Johan Liebens heeft een sterke aanwezigheid in Kessel-Lo. Wij kennen de straten, de artsen en de patiënten in deze buurt — en dat merkt u in onze zorg.",
  },
  {
    naam: "Oud-Heverlee",
    slug: "oud-heverlee",
    postcode: "3050",
    deelgemeenten: "Blanden, Haasrode, Vaalbeek en Sint-Joris-Weert",
    intro:
      "Oud-Heverlee (3050) is een groene gemeente ten zuiden van Leuven, bekend om haar natuurgebieden en rustige deelgemeenten zoals Blanden, Haasrode en Vaalbeek.",
    lokaleContext:
      "Ook in de meer afgelegen hoeken van Oud-Heverlee komen wij bij u thuis. Afstand is voor ons geen drempel — kwaliteitsvolle zorg hoort overal beschikbaar te zijn.",
  },
  {
    naam: "Heverlee",
    slug: "heverlee",
    postcode: "3001",
    deelgemeenten: "Heverlee-centrum en universiteitscampus omgeving",
    intro:
      "Heverlee (3001) is een groene deelgemeente van Leuven, gelegen ten zuiden van het stadscentrum. Bekend om de abdij van Park en de universiteitscampus.",
    lokaleContext:
      "Wij zijn regelmatig actief in Heverlee en omgeving. Of u nu in een rustige woonwijk of vlakbij de campus woont — onze verpleegkundigen vinden u snel.",
  },
  {
    naam: "Wilsele",
    slug: "wilsele",
    postcode: "3012",
    deelgemeenten: "Wilsele-centrum en Wijgmaal",
    intro:
      "Wilsele (3012) is een noordelijke deelgemeente van Leuven, grenzend aan Herent en Wijgmaal. Een rustige, residentiële buurt met een sterke gemeenschapszin.",
    lokaleContext:
      "In Wilsele is onze dienst goed bekend. Wij bieden hier dezelfde persoonlijke en professionele thuisverpleging als overal elders in onze regio.",
  },
  {
    naam: "Erps-Kwerps",
    slug: "erps-kwerps",
    postcode: "3071",
    deelgemeenten: "Erps en Kwerps",
    intro:
      "Erps-Kwerps (3071) is een deelgemeente van Kortenberg, bestaande uit de twee gehuchten Erps en Kwerps. Een landelijke omgeving met een eigen dorpskarakter.",
    lokaleContext:
      "Wij komen geregeld bij patiënten in Erps-Kwerps langs. De korte afstand tot Kortenberg maakt een snelle interventie mogelijk wanneer dat nodig is.",
  },
  {
    naam: "Everberg",
    slug: "everberg",
    postcode: "3078",
    deelgemeenten: "Everberg-centrum en omgeving Kortenberg",
    intro:
      "Everberg (3078) is een kleine, rustige deelgemeente van Kortenberg op de grens met het Brussels Hoofdstedelijk Gewest. Groen, landelijk en goed bereikbaar.",
    lokaleContext:
      "Ondanks zijn bescheiden omvang laten wij Everberg niet links liggen. Ons team is ook hier aanwezig om u de zorg te bieden die u nodig heeft.",
  },
  {
    naam: "Meerbeek",
    slug: "meerbeek",
    postcode: "3078",
    deelgemeenten: "Meerbeek-centrum en omgeving Kortenberg",
    intro:
      "Meerbeek (3078) is een landelijke deelgemeente van Kortenberg, gekend om zijn open landschap en rustige woonsfeer. Een van de kleinere kernen in onze regio.",
    lokaleContext:
      "Ook in Meerbeek is thuisverpleging Johan Liebens actief. Kleine kern, grote zorg — dat is onze filosofie voor iedere gemeente die we bedienen.",
  },
  {
    naam: "Veltem-Beisem",
    slug: "veltem-beisem",
    postcode: "3020",
    deelgemeenten: "Veltem en Beisem",
    intro:
      "Veltem-Beisem (3020) is een deelgemeente van Herent, bestaande uit de twee gehuchten Veltem en Beisem. Een landelijke gemeente ten noorden van Leuven.",
    lokaleContext:
      "Wij zijn vertrouwd in Veltem-Beisem en zorgen er voor dat ook inwoners van kleinere deelgemeenten toegang hebben tot professionele thuisverpleging aan huis.",
  },
  {
    naam: "Winksele",
    slug: "winksele",
    postcode: "3020",
    deelgemeenten: "Winksele-centrum en omgeving Herent",
    intro:
      "Winksele (3020) is een rustige deelgemeente van Herent, gelegen tussen Leuven en Mechelen. Een groene woonomgeving met vlotte verbindingen naar de stad.",
    lokaleContext:
      "Ons team komt regelmatig langs in Winksele. De nabijheid van Leuven en Herent maakt een snelle en betrouwbare zorgverlening hier goed mogelijk.",
  },
  {
    naam: "Holsbeek",
    slug: "holsbeek",
    postcode: "3220",
    deelgemeenten: "Holsbeek, Nieuwrode, Kortrijk-Dutsel en Sint-Pieters-Rode",
    intro:
      "Holsbeek (3220) is een gemeente ten noordoosten van Leuven, met de deelgemeenten Nieuwrode, Kortrijk-Dutsel en Sint-Pieters-Rode. Een landelijke streek met verspreide bewoning.",
    lokaleContext:
      "In gemeenten met verspreide bewoning zoals Holsbeek is thuisverpleging aan huis extra waardevol. Wij nemen de tijd voor de rit — uw zorg staat centraal.",
  },
  {
    naam: "Lubbeek",
    slug: "lubbeek",
    postcode: "3210",
    deelgemeenten: "Binkom, Linden, Pellenberg en Lubbeek-centrum",
    intro:
      "Lubbeek (3210) is een gemeente ten oosten van Leuven met de deelgemeenten Binkom, Linden en Pellenberg. Bekend om het groene heuvellandschap van Hageland.",
    lokaleContext:
      "Wij zijn actief in heel Lubbeek, ook in de afgelegen deelgemeenten. Een vertrouwd gezicht aan uw deur — dat is wat thuisverpleging Johan Liebens biedt.",
  },
  {
    naam: "Tervuren",
    slug: "tervuren",
    postcode: "3080",
    deelgemeenten: "Duisburg, Moorsel, Vossem en Tervuren-centrum",
    intro:
      "Tervuren (3080) is een gemeente ten oosten van Brussel, bekend om het Afrikamuseum en het uitgestrekte Tervurenpark. Met deelgemeenten Duisburg, Moorsel en Vossem.",
    lokaleContext:
      "Tervuren behoort tot onze zuidelijke zone en is goed bereikbaar vanuit Kortenberg. Wij bieden hier dezelfde kwaliteitsvolle zorg als in de rest van onze regio.",
  },
];