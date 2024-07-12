import { Sermon } from "../sermon/Sermon";

export type Speaker = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  sermons?: Array<Sermon>;
  bio: string | null;
  imageUrl: string | null;
  name: string | null;
};
