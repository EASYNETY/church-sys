import * as graphql from "@nestjs/graphql";
import { SermonResolverBase } from "./base/sermon.resolver.base";
import { Sermon } from "./base/Sermon";
import { SermonService } from "./sermon.service";

@graphql.Resolver(() => Sermon)
export class SermonResolver extends SermonResolverBase {
  constructor(protected readonly service: SermonService) {
    super(service);
  }
}
