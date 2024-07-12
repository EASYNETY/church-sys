import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type QueryWhereInput = {
  id?: StringFilter;
  userMessage?: StringNullableFilter;
  responseMessage?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
};
