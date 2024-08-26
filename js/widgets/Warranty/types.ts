export type TitleData = {
  content: string;
  priority: number;
};

export type ImageData = {
  source: string;
  description: string;
};

export type WarrantyData = {
  title: TitleData;
  texts: string[];
  image: ImageData;
};
