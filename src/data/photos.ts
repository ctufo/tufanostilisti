export type Photo = {
  src: string;
  caption: string;
  alt: string;
};

export const galleryPhotos: Photo[] = [
  {
    src: "/images/g-balayage.jpg",
    caption: "Balayage",
    alt: "Balayage castano e caramello da Tufano Stilisti",
  },
  {
    src: "/images/g-shatush.jpg",
    caption: "Shatush",
    alt: "Shatush su capelli lunghi da Tufano Stilisti",
  },
  {
    src: "/images/g-sole.jpg",
    caption: "Colpi di sole",
    alt: "Colpi di sole da Tufano Stilisti a Milano",
  },
  {
    src: "/images/g-rossi.jpg",
    caption: "Rosso",
    alt: "Capelli rossi da Tufano Stilisti",
  },
  {
    src: "/images/g-extension.jpg",
    caption: "Extension",
    alt: "Extension capelli da Tufano Stilisti",
  },
];

const freshPhotos: Photo[] = [
  { src: "/images/p-ritratto.jpg", caption: "Onde", alt: "Onde caramello da Tufano Stilisti" },
  { src: "/images/p-profilo.jpg", caption: "Balayage", alt: "Balayage biondo in salone da Tufano Stilisti" },
  { src: "/images/p-rame.jpg", caption: "Rame", alt: "Capelli rame da Tufano Stilisti" },
  { src: "/images/p-castano.jpg", caption: "Castano", alt: "Castano lungo da Tufano Stilisti" },
  { src: "/images/p-lisci.jpg", caption: "Schiariture", alt: "Capelli lisci con schiariture da Tufano Stilisti" },
  { src: "/images/p-biondo.jpg", caption: "Biondo", alt: "Onde bionde da Tufano Stilisti" },
  { src: "/images/p-bob.jpg", caption: "Bob", alt: "Taglio bob biondo da Tufano Stilisti" },
  { src: "/images/p-strada.jpg", caption: "Lungo", alt: "Balayage lungo a Milano" },
  { src: "/images/p-onde-specchi.jpg", caption: "Salone", alt: "Onde bionde nel salone Tufano" },
  { src: "/images/p-onde-salone.jpg", caption: "Caramello", alt: "Colore caramello da Tufano Stilisti" },
  { src: "/images/p-biondo-strada.jpg", caption: "Medio", alt: "Biondo medio da Tufano Stilisti" },
  { src: "/images/p-onde-bordeaux.jpg", caption: "Onde", alt: "Onde bionde su maglia bordeaux" },
  { src: "/images/p-onde-specchio.jpg", caption: "Colore", alt: "Colore caramello davanti allo specchio" },
  { src: "/images/p-onde-giallo.jpg", caption: "Ricci", alt: "Ricci biondi da Tufano Stilisti" },
  { src: "/images/p-profilo-biondo.jpg", caption: "Profilo", alt: "Profilo biondo da Tufano Stilisti" },
  { src: "/images/p-caschetto.jpg", caption: "Caschetto", alt: "Caschetto da Tufano Stilisti" },
  { src: "/images/p-primo-piano.jpg", caption: "Primo piano", alt: "Primo piano con schiariture da Tufano Stilisti" },
];

export const salonPhotos: Photo[] = [
  ...freshPhotos,
  ...galleryPhotos,
  {
    src: "/images/g-sposa.jpg",
    caption: "Sposa",
    alt: "Acconciatura sposa da Tufano Stilisti",
  },
  {
    src: "/images/g-uomo.jpg",
    caption: "Taglio uomo",
    alt: "Taglio uomo da Tufano Stilisti",
  },
  {
    src: "/images/g-uomo-2.jpg",
    caption: "Hairstyling uomo",
    alt: "Hairstyling uomo da Tufano Stilisti a Milano",
  },
];
