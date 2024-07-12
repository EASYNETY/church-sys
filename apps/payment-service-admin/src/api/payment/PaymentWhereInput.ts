import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type PaymentWhereInput = {
  id?: StringFilter;
  currency?: StringNullableFilter;
  status?: "Option1";
  amount?: FloatNullableFilter;
  user?: StringNullableFilter;
};
