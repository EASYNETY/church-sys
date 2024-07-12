import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DirectoryLinkService } from "./directoryLink.service";
import { DirectoryLinkControllerBase } from "./base/directoryLink.controller.base";

@swagger.ApiTags("directoryLinks")
@common.Controller("directoryLinks")
export class DirectoryLinkController extends DirectoryLinkControllerBase {
  constructor(protected readonly service: DirectoryLinkService) {
    super(service);
  }
}
