import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type EventWhereInput = {
  id?: StringFilter;
  description?: StringNullableFilter;
  date?: DateTimeNullableFilter;
  name?: StringNullableFilter;
  time?: DateTimeNullableFilter;
  location?: StringNullableFilter;
};
