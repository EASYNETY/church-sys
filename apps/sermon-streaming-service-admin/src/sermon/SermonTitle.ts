import { Sermon as TSermon } from "../api/sermon/Sermon";

export const SERMON_TITLE_FIELD = "title";

export const SermonTitle = (record: TSermon): string => {
  return record.title?.toString() || String(record.id);
};
