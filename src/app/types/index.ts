export interface Story {
  id: string;
  title: string;
  author: string;
  description: string;
  progress: number;
  cover: string;
  lastPlayed: string;
}

export interface TranscriptEntry {
  id: number;
  type: "story" | "player";
  text: string;
}

export interface MorrowMessage {
  id: number;
  role: "morrow" | "user";
  text: string;
}