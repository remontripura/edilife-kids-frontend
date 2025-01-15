export interface IHeroItem {
  id: number;
  title: string;
  description: string;
  image: string;
  image2: string;
  created_at: string | null;
  updated_at: string | null;
}

export interface IHeroItems {
  success: boolean;
  data: IHeroItem[];
}
