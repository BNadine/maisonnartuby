export interface Room {
  slug: string;
  nameKey: string;
  descriptionKey: string;
  bedKey: string;
  capacity: number;
  roomAmenitiesKeys: string[];
  houseAmenitiesKeys: string[];
  images: string[];
  bookingUrl: string;
}

const roomAmenities = [
  "rooms.amenities.wifi",
  "rooms.amenities.linens",
  "rooms.amenities.bodycare",
  "rooms.amenities.premiumBedding",
  "rooms.amenities.downDuvets",
  "rooms.amenities.coffeeMachine",
];

const houseAmenities = [
  "rooms.amenities.naturalCooling",
  "rooms.amenities.keyBox",
  "rooms.amenities.freeParking",
  "rooms.amenities.evCharging",
  "rooms.amenities.busStop",
];

const rooms: Room[] = [
  {
    slug: "champagne",
    nameKey: "rooms.champagne.name",
    descriptionKey: "rooms.champagne.description",
    bedKey: "rooms.champagne.bed",
    capacity: 2,
    roomAmenitiesKeys: [...roomAmenities, "rooms.amenities.sharedBathroom"],
    houseAmenitiesKeys: houseAmenities,
    images: Array.from({ length: 5 }, (_, i) => `/rooms/champagne/${i + 1}.jpg`),
    bookingUrl: "https://airbnb.de/h/maisonnartuby-1",
  },
  {
    slug: "nid",
    nameKey: "rooms.nid.name",
    descriptionKey: "rooms.nid.description",
    bedKey: "rooms.nid.bed",
    capacity: 1,
    roomAmenitiesKeys: [...roomAmenities, "rooms.amenities.sharedBathroom"],
    houseAmenitiesKeys: houseAmenities,
    images: Array.from({ length: 5 }, (_, i) => `/rooms/nid/${i + 1}.jpg`),
    bookingUrl: "https://airbnb.de/h/maisonnartuby-2",
  },
  {
    slug: "creatif",
    nameKey: "rooms.creatif.name",
    descriptionKey: "rooms.creatif.description",
    bedKey: "rooms.creatif.bed",
    capacity: 2,
    roomAmenitiesKeys: [...roomAmenities, "rooms.amenities.sharedBathroom"],
    houseAmenitiesKeys: houseAmenities,
    images: Array.from({ length: 10 }, (_, i) => `/rooms/creatif/${i + 1}.jpg`),
    bookingUrl: "https://airbnb.de/h/maisonnartuby-3",
  },
  {
    slug: "nartuby",
    nameKey: "rooms.nartuby.name",
    descriptionKey: "rooms.nartuby.description",
    bedKey: "rooms.nartuby.bed",
    capacity: 2,
    roomAmenitiesKeys: [...roomAmenities, "rooms.amenities.privateBathroom"],
    houseAmenitiesKeys: houseAmenities,
    images: Array.from({ length: 7 }, (_, i) => `/rooms/nartuby/${i + 1}.jpg`),
    bookingUrl: "https://airbnb.de/h/maisonnartuby-4",
  },
  {
    slug: "lavande",
    nameKey: "rooms.lavande.name",
    descriptionKey: "rooms.lavande.description",
    bedKey: "rooms.lavande.bed",
    capacity: 2,
    roomAmenitiesKeys: [...roomAmenities, "rooms.amenities.privateBathroom"],
    houseAmenitiesKeys: houseAmenities,
    images: Array.from({ length: 5 }, (_, i) => `/rooms/lavande/${i + 1}.jpg`),
    bookingUrl: "https://airbnb.de/h/maisonnartuby-5",
  },
];

export function useRooms() {
  const getRoom = (slug: string) => rooms.find((r) => r.slug === slug);
  const getAllRooms = () => rooms;

  return { getRoom, getAllRooms };
}
