import { describe, it, expect } from "vitest";
import { useRooms } from "../../app/composables/useRooms";

describe("useRooms", () => {
  const { getAllRooms, getRoom } = useRooms();

  it("returns all 5 rooms", () => {
    const rooms = getAllRooms();
    expect(rooms).toHaveLength(5);
  });

  it("each room has required fields", () => {
    const rooms = getAllRooms();
    for (const room of rooms) {
      expect(room.slug).toBeTruthy();
      expect(room.nameKey).toBeTruthy();
      expect(room.descriptionKey).toBeTruthy();
      expect(room.capacity).toBeGreaterThan(0);
      expect(room.amenitiesKeys.length).toBeGreaterThan(0);
      expect(room.images.length).toBeGreaterThan(0);
      expect(room.bookingUrl).toMatch(/^https:\/\/airbnb\.de\/h\/maisonnartuby-\d$/);
    }
  });

  it("returns correct room by slug", () => {
    const room = getRoom("champagne");
    expect(room).toBeDefined();
    expect(room!.slug).toBe("champagne");
    expect(room!.nameKey).toBe("rooms.champagne.name");
  });

  it("returns undefined for unknown slug", () => {
    const room = getRoom("nonexistent");
    expect(room).toBeUndefined();
  });

  it("has correct room slugs", () => {
    const rooms = getAllRooms();
    const slugs = rooms.map((r) => r.slug);
    expect(slugs).toEqual(["champagne", "nid", "creatif", "nartuby", "lavande"]);
  });

  it("nid room has capacity 1", () => {
    const room = getRoom("nid");
    expect(room!.capacity).toBe(1);
  });

  it("nartuby and lavande have private bathroom", () => {
    const nartuby = getRoom("nartuby");
    const lavande = getRoom("lavande");
    expect(nartuby!.amenitiesKeys).toContain("rooms.amenities.privateBathroom");
    expect(lavande!.amenitiesKeys).toContain("rooms.amenities.privateBathroom");
  });

  it("champagne, nid, and creatif have shared bathroom", () => {
    for (const slug of ["champagne", "nid", "creatif"]) {
      const room = getRoom(slug);
      expect(room!.amenitiesKeys).toContain("rooms.amenities.sharedBathroom");
    }
  });

  it("all rooms have shared amenities (wifi, linens, bodycare)", () => {
    const rooms = getAllRooms();
    for (const room of rooms) {
      expect(room.amenitiesKeys).toContain("rooms.amenities.wifi");
      expect(room.amenitiesKeys).toContain("rooms.amenities.linens");
      expect(room.amenitiesKeys).toContain("rooms.amenities.bodycare");
    }
  });

  it("image paths follow expected pattern", () => {
    const rooms = getAllRooms();
    for (const room of rooms) {
      for (let i = 0; i < room.images.length; i++) {
        expect(room.images[i]).toBe(`/rooms/${room.slug}/${i + 1}.jpg`);
      }
    }
  });
});
