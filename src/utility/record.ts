export {};

// Record<K, T>

type Prefectures = "Tokyo" | "Chiba" | "Tottori" | "Shiga";

type Covit19InfectionInfo = {
  kanji_name: string;
  confirmed_cases: number;
};

// const covitJapan: {
//   Tokyo: Covit19InfectionInfo;
//   Chiba: Covit19InfectionInfo;
//   Tottori: Covit19InfectionInfo;
//   Shiga: Covit19InfectionInfo;
// } = {
//   Tokyo: { kanji_name: "東京", confirmed_cases: 1940 },
//   Chiba: { kanji_name: "千葉", confirmed_cases: 1940 },
//   Tottori: { kanji_name: "鳥取", confirmed_cases: 1940 },
//   Shiga: { kanji_name: "滋賀", confirmed_cases: true },
// };

const covitJapan: Record<Prefectures, Covit19InfectionInfo> = {
  Tokyo: { kanji_name: "東京", confirmed_cases: 1940 },
  Chiba: { kanji_name: "千葉", confirmed_cases: 1940 },
  Tottori: { kanji_name: "鳥取", confirmed_cases: 1940 },
  Shiga: { kanji_name: "滋賀", confirmed_cases: 13 },
};
