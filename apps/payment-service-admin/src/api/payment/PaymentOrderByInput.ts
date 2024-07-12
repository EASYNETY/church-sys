import { SortOrder } from "../../util/SortOrder";

export type PaymentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  currency?: SortOrder;
  status?: SortOrder;
  amount?: SortOrder;
  user?: SortOrder;
};
