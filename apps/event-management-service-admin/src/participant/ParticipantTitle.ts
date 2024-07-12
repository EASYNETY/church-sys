import { Participant as TParticipant } from "../api/participant/Participant";

export const PARTICIPANT_TITLE_FIELD = "lastName";

export const ParticipantTitle = (record: TParticipant): string => {
  return record.lastName?.toString() || String(record.id);
};
