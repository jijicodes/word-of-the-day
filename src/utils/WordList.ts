export interface WordDefinition {
  starred: boolean;
  id: number;
  phrase: string;
  pronunciation: string;
  sentence: string;
  definition: string;
  audioUrl?: string;
}

export const wordListUrl =
  "https://gist.githubusercontent.com/jijicodes/d077ebaeddf0b273a6e3ed79e9383a32/raw/a8d2172cddf2d27e88964e5d8dd197290edde849/koreanWord.json";
