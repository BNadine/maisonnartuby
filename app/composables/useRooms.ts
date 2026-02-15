export interface Room {
  slug: string;
  nameKey: string;
  descriptionKey: string;
  capacity: number;
  amenitiesKeys: string[];
  images: string[];
  bookingUrl: string;
}

const sharedAmenities = [
  "rooms.amenities.wifi",
  "rooms.amenities.linens",
  "rooms.amenities.bodycare",
];

const rooms: Room[] = [
  {
    slug: "champagne",
    nameKey: "rooms.champagne.name",
    descriptionKey: "rooms.champagne.description",
    capacity: 2,
    amenitiesKeys: [...sharedAmenities, "rooms.amenities.sharedBathroom"],
    images: Array.from({ length: 5 }, (_, i) => `/rooms/champagne/${i + 1}.jpg`),
    bookingUrl: "https://airbnb.de/h/maisonnartuby-1",
  },
  {
    slug: "nid",
    nameKey: "rooms.nid.name",
    descriptionKey: "rooms.nid.description",
    capacity: 1,
    amenitiesKeys: [...sharedAmenities, "rooms.amenities.sharedBathroom"],
    images: Array.from({ length: 5 }, (_, i) => `/rooms/nid/${i + 1}.jpg`),
    bookingUrl: "https://airbnb.de/h/maisonnartuby-2",
  },
  {
    slug: "creatif",
    nameKey: "rooms.creatif.name",
    descriptionKey: "rooms.creatif.description",
    capacity: 2,
    amenitiesKeys: [...sharedAmenities, "rooms.amenities.sharedBathroom"],
    images: Array.from({ length: 10 }, (_, i) => `/rooms/creatif/${i + 1}.jpg`),
    bookingUrl: "https://airbnb.de/h/maisonnartuby-3",
  },
  {
    slug: "nartuby",
    nameKey: "rooms.nartuby.name",
    descriptionKey: "rooms.nartuby.description",
    capacity: 2,
    amenitiesKeys: [...sharedAmenities, "rooms.amenities.privateBathroom"],
    images: Array.from({ length: 7 }, (_, i) => `/rooms/nartuby/${i + 1}.jpg`),
    bookingUrl: "https://airbnb.de/h/maisonnartuby-4",
  },
  {
    slug: "lavande",
    nameKey: "rooms.lavande.name",
    descriptionKey: "rooms.lavande.description",
    capacity: 2,
    amenitiesKeys: [...sharedAmenities, "rooms.amenities.privateBathroom"],
    images: Array.from({ length: 5 }, (_, i) => `/rooms/lavande/${i + 1}.jpg`),
    bookingUrl: "https://airbnb.de/h/maisonnartuby-5",
  },
];

export function useRooms() {
  const getRoom = (slug: string) => rooms.find((r) => r.slug === slug);
  const getAllRooms = () => rooms;

  return { getRoom, getAllRooms };
}
