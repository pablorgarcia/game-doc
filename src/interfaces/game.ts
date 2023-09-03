export interface Game {
  name: string;
  consoleId: string;
  regionId: string;
  countryId: string;
  genderId: string;
  companyId: string;
  description: string;
  image: string;
  amount: number;
  isFavorite: boolean;
  isHack: boolean;
  isPhysical: boolean;
  twoPlayers: boolean;
}