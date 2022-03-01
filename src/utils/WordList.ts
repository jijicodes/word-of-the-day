export interface WordDefinition {
  starred: boolean;
  id: number;
  phrase: string;
  pronunciation: string;
  sentence: string;
  definition: string;
  audioUrl: string;
}

export const wordListUrl =
  "https://gist.githubusercontent.com/jijicodes/d077ebaeddf0b273a6e3ed79e9383a32/raw/10c744c6b45e6b0496baa6fceacccd373b73e11d/koreanWord.json";
