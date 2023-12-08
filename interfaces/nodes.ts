export interface HeaderMenuItem {
  id: string;
  label: string;
  href: string;
  exact?: boolean;
  new?: boolean;
  external: boolean;
}

export interface MenuNode {
  id?: string;
  title: string;
  url?: string;
  items?: MenuNode[];
  useAccordion?: boolean;
}

export interface Edge<T> {
  items: T[];
}
