import { SortOrder } from "../../util/SortOrder";

export type SermonOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  description?: SortOrder;
  date?: SortOrder;
  videoUrl?: SortOrder;
  speakerId?: SortOrder;
};
