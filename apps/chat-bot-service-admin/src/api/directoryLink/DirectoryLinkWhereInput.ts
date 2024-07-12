import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type DirectoryLinkWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  url?: StringNullableFilter;
};
