import { SermonUpdateManyWithoutSpeakersInput } from "./SermonUpdateManyWithoutSpeakersInput";

export type SpeakerUpdateInput = {
  sermons?: SermonUpdateManyWithoutSpeakersInput;
  bio?: string | null;
  imageUrl?: string | null;
  name?: string | null;
};
