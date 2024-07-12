import { SpeakerWhereUniqueInput } from "../speaker/SpeakerWhereUniqueInput";

export type SermonCreateInput = {
  title?: string | null;
  description?: string | null;
  date?: Date | null;
  videoUrl?: string | null;
  speaker?: SpeakerWhereUniqueInput | null;
};
