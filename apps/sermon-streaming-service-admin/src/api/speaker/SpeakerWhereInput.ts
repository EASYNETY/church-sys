import { StringFilter } from "../../util/StringFilter";
import { SermonListRelationFilter } from "../sermon/SermonListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SpeakerWhereInput = {
  id?: StringFilter;
  sermons?: SermonListRelationFilter;
  bio?: StringNullableFilter;
  imageUrl?: StringNullableFilter;
  name?: StringNullableFilter;
};
