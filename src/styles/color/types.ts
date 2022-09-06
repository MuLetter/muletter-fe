export type PaletteKey =
  | 50
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900;
export type Palette = {
  [key in PaletteKey]?: string;
};
