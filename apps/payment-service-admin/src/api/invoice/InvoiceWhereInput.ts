import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type InvoiceWhereInput = {
  id?: StringFilter;
  totalAmount?: FloatNullableFilter;
  dueDate?: DateTimeNullableFilter;
  status?: "Option1";
  invoiceNumber?: StringNullableFilter;
  user?: StringNullableFilter;
};
