import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DirectoryLinkServiceBase } from "./base/directoryLink.service.base";

@Injectable()
export class DirectoryLinkService extends DirectoryLinkServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
