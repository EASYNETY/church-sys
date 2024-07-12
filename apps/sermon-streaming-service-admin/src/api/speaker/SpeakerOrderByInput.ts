import { SortOrder } from "../../util/SortOrder";

export type SpeakerOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  bio?: SortOrder;
  imageUrl?: SortOrder;
  name?: SortOrder;
};
