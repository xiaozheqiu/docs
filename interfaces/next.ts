type Product = ['Platform', 'Business Dashboard', 'Qios', 'CLI', 'Omnichat'];

export interface MarkdownContent {
  frontMatter: FrontMatter;
  content: string;
  hash: string;
  filepath: string;
  mdx: {
    compiledSource: string;
    renderedOutput: string;
  };
  relationships: any;
  slug: string;
  url: string;
}

export interface FrontMatter {
  title: string;
  description: string;
  id: string;
  layout: string;
  imgSpot: string;
  content: string;
  product: Product;
  next?: string;
  prev?: string;
  date: string;
  section: string;
}

export interface BreadcrumbContent {
  url?: string;
  urlDisplay: string;
}
