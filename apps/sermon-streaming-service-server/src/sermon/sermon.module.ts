import { Module } from "@nestjs/common";
import { SermonModuleBase } from "./base/sermon.module.base";
import { SermonService } from "./sermon.service";
import { SermonController } from "./sermon.controller";
import { SermonResolver } from "./sermon.resolver";

@Module({
  imports: [SermonModuleBase],
  controllers: [SermonController],
  providers: [SermonService, SermonResolver],
  exports: [SermonService],
})
export class SermonModule {}
