export const salon = {
  name: "Tufano Stilisti",
  url: "https://www.tufanostilisti.com",
  email: "tufanostilisti@hotmail.it",
  phoneDisplay: "02 730948",
  phoneTel: "+3902730948",
  whatsapp: "393279915124",
  whatsappDisplay: "+39 327 991 5124",
  street: "Via Giovanni da Milano 1",
  postalCode: "20133",
  city: "Milano",
  region: "MI",
  facebook: "https://www.facebook.com/tufanostilisti",
  instagram: "https://www.instagram.com/tufanostilisti/",
  latitude: 45.46922,
  longitude: 9.224657,
  mapQuery: "Via Giovanni da Milano 1, 20133 Milano",
  gaId: "G-C5JN7653F7",
};

export const whatsappHref = `https://wa.me/${salon.whatsapp}?text=${encodeURIComponent(
  "Ciao! Vorrei prenotare un appuntamento da Tufano Stilisti.",
)}`;
