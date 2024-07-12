import { SermonWhereInput } from "./SermonWhereInput";
import { SermonOrderByInput } from "./SermonOrderByInput";

export type SermonFindManyArgs = {
  where?: SermonWhereInput;
  orderBy?: Array<SermonOrderByInput>;
  skip?: number;
  take?: number;
};
