export type SentenceRearrangement = {
  id: number;
  lesson: string;
  part: string;
  title?: string | null;
  seq: number;
  sentence: string;
  trans?: string | null;
};
