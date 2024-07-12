import { SpeakerWhereUniqueInput } from "../speaker/SpeakerWhereUniqueInput";

export type SermonUpdateInput = {
  title?: string | null;
  description?: string | null;
  date?: Date | null;
  videoUrl?: string | null;
  speaker?: SpeakerWhereUniqueInput | null;
};
