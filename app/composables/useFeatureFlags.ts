const STORAGE_KEY = "featureFlags";

export const AVAILABLE_FLAGS = [
  { key: "airbnb", label: "Airbnb Booking" },
] as const;

export const useFeatureFlags = () => {
  const flags = useState<string[]>("featureFlags", () => []);

  if (import.meta.client && !flags.value.length) {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      flags.value = JSON.parse(stored);
    }
  }

  const route = useRoute();

  watch(
    () => route.query.features,
    (features) => {
      if (!import.meta.client || !features) return;
      const value = String(features);

      if (value === "reset") {
        flags.value = [];
        localStorage.removeItem(STORAGE_KEY);
      } else {
        const newFlags = new Set([...flags.value, ...value.split(",")]);
        flags.value = [...newFlags];
        localStorage.setItem(STORAGE_KEY, JSON.stringify(flags.value));
      }
    },
    { immediate: true },
  );

  const isEnabled = (flag: string) => flags.value.includes(flag);

  const toggle = (flag: string) => {
    if (isEnabled(flag)) {
      flags.value = flags.value.filter((f) => f !== flag);
    } else {
      flags.value = [...flags.value, flag];
    }
    if (flags.value.length) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(flags.value));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  return { flags, isEnabled, toggle };
};
