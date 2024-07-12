import { SortOrder } from "../../util/SortOrder";

export type EventOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  description?: SortOrder;
  date?: SortOrder;
  name?: SortOrder;
  time?: SortOrder;
  location?: SortOrder;
};
