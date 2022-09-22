import { Build } from "_types/build";

export type Cell = {
  id: string;
  isEmpty: boolean;
  build: Build;
};
