import { SermonCreateNestedManyWithoutSpeakersInput } from "./SermonCreateNestedManyWithoutSpeakersInput";

export type SpeakerCreateInput = {
  sermons?: SermonCreateNestedManyWithoutSpeakersInput;
  bio?: string | null;
  imageUrl?: string | null;
  name?: string | null;
};
