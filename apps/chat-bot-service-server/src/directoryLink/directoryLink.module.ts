import { Module } from "@nestjs/common";
import { DirectoryLinkModuleBase } from "./base/directoryLink.module.base";
import { DirectoryLinkService } from "./directoryLink.service";
import { DirectoryLinkController } from "./directoryLink.controller";
import { DirectoryLinkResolver } from "./directoryLink.resolver";

@Module({
  imports: [DirectoryLinkModuleBase],
  controllers: [DirectoryLinkController],
  providers: [DirectoryLinkService, DirectoryLinkResolver],
  exports: [DirectoryLinkService],
})
export class DirectoryLinkModule {}
