
export enum Language {
  HINDI = 'Hindi',
  ENGLISH = 'English'
}

export enum Difficulty {
  BEGINNER = 'Beginner',
  ADVANCED = 'Advanced'
}

export interface Course {
  id: string;
  title: string;
  youtubeId: string;
  description: string;
  duration: string;
  language: Language;
  difficulty: Difficulty;
  order: number;
  thumbnail: string;
}

export type LayoutMode = 'side-by-side' | 'stacked';
export type ThemeMode = 'dark' | 'light';
