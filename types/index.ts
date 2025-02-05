export enum Position {
  PG = "PG",
  SG = "SG",
  SF = "SF",
  PF = "PF",
  C = "C",
}

export enum Rarity {
  BRONZE = "Bronze",
  SILVER = "Silver",
  GOLD = "Gold",
  HOF = "Hall Of Fame",
  LEGEND = "Legend",
}

export enum Coach {
  JACK = "Jack",
  MAX = "Max",
  DREW = "Drew",
  NOAH = "Noah",
  COLIN = "Colin",
  NUNZI = "Nunzi",
  LUNDE = "Lunde",
  IAN = "Ian",
}
export type Player = {
  id: number;
  name: string;
  positions: Position[];
  rarity: Rarity;
  archetype: string;
  img: string;
  height: string;
  coach: Coach;
};
