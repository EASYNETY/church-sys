import { DirectoryLinkWhereInput } from "./DirectoryLinkWhereInput";
import { DirectoryLinkOrderByInput } from "./DirectoryLinkOrderByInput";

export type DirectoryLinkFindManyArgs = {
  where?: DirectoryLinkWhereInput;
  orderBy?: Array<DirectoryLinkOrderByInput>;
  skip?: number;
  take?: number;
};
