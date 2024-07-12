import { Speaker } from "../speaker/Speaker";

export type Sermon = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  description: string | null;
  date: Date | null;
  videoUrl: string | null;
  speaker?: Speaker | null;
};
