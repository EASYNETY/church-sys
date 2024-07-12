import { DirectoryLink as TDirectoryLink } from "../api/directoryLink/DirectoryLink";

export const DIRECTORYLINK_TITLE_FIELD = "name";

export const DirectoryLinkTitle = (record: TDirectoryLink): string => {
  return record.name?.toString() || String(record.id);
};
