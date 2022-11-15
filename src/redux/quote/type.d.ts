export interface QuoteIntialState {
  categories: Category[];
  selectedCategory: CategoryDescription | null;
  error: {
    message: string;
  };
  loading: boolean;
}

export interface Category {
  name: string;
}

export interface CategoryDescription {
  quoteString: string;
  length: string;
  author: string;
  category: string;
  language: string;
  date: string;
  permalink: string;
  id: string;
  background: string;
  title: string;
  tags: [
    {
      name: string;
    }
  ];
}

export interface ActionType {
  type: string;
  payload: any;
}
