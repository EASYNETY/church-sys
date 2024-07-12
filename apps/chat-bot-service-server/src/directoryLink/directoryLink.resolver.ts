import * as graphql from "@nestjs/graphql";
import { DirectoryLinkResolverBase } from "./base/directoryLink.resolver.base";
import { DirectoryLink } from "./base/DirectoryLink";
import { DirectoryLinkService } from "./directoryLink.service";

@graphql.Resolver(() => DirectoryLink)
export class DirectoryLinkResolver extends DirectoryLinkResolverBase {
  constructor(protected readonly service: DirectoryLinkService) {
    super(service);
  }
}
