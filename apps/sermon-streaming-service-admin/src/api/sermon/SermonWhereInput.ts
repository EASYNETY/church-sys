import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { SpeakerWhereUniqueInput } from "../speaker/SpeakerWhereUniqueInput";

export type SermonWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  description?: StringNullableFilter;
  date?: DateTimeNullableFilter;
  videoUrl?: StringNullableFilter;
  speaker?: SpeakerWhereUniqueInput;
};
