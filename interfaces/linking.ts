export interface MDXLinking {
  previous: Linking | null;
  next: Linking | null;
}

export interface Linking {
  url: string;
  title: string;
  id: string;
}
