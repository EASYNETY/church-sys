import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SermonServiceBase } from "./base/sermon.service.base";

@Injectable()
export class SermonService extends SermonServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
