import { SortOrder } from "../../util/SortOrder";

export type DirectoryLinkOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  url?: SortOrder;
};
