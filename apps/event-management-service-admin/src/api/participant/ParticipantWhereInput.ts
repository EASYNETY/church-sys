import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ParticipantWhereInput = {
  id?: StringFilter;
  lastName?: StringNullableFilter;
  email?: StringNullableFilter;
  phone?: StringNullableFilter;
  firstName?: StringNullableFilter;
};
