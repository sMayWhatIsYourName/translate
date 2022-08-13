interface ITranslationItem {
  to: {
    text: string;
    lang: string;
  },
  from: {
    text: string;
    lang: string;
  },
  id: number;
  isFavorite: boolean;
}

type TypeTranslationCurrent = Omit<ITranslationItem, 'id' | 'isFavorite'>;

export interface ITranslation {
  current: TypeTranslationCurrent;
  history: ITranslationItem[];
  languages: {
    [key: string]: number;
  };
  isLoading: boolean;
}