import { SortOrder } from "../../util/SortOrder";

export type ParticipantOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  lastName?: SortOrder;
  email?: SortOrder;
  phone?: SortOrder;
  firstName?: SortOrder;
};
