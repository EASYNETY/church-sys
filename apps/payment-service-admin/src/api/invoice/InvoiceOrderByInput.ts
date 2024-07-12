import { SortOrder } from "../../util/SortOrder";

export type InvoiceOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  totalAmount?: SortOrder;
  dueDate?: SortOrder;
  status?: SortOrder;
  invoiceNumber?: SortOrder;
  user?: SortOrder;
};
