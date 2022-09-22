export type BuildType =
  | "HOUSE"
  | "MALL"
  | "FACTORY"
  | "HOSPITAL"
  | "FARM"
  | "MINE"
  | "PARK"
  | "STADIUM"
  | "SCHOOL";

export type Build = {
  buildType: BuildType;
  lvl: string;
  moneyPerSecond: string;
  resourcesPerSecond: string;
  happinessPerSecond: string;
} | null;
