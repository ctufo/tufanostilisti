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
    src: "/images/g-biondi.jpg",
    caption: "Biondo",
    alt: "Tinta bionda da Tufano Stilisti",
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

export const salonPhotos: Photo[] = [
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
