/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, DirectoryLink as PrismaDirectoryLink } from "@prisma/client";

export class DirectoryLinkServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.DirectoryLinkCountArgs, "select">
  ): Promise<number> {
    return this.prisma.directoryLink.count(args);
  }

  async directoryLinks(
    args: Prisma.DirectoryLinkFindManyArgs
  ): Promise<PrismaDirectoryLink[]> {
    return this.prisma.directoryLink.findMany(args);
  }
  async directoryLink(
    args: Prisma.DirectoryLinkFindUniqueArgs
  ): Promise<PrismaDirectoryLink | null> {
    return this.prisma.directoryLink.findUnique(args);
  }
  async createDirectoryLink(
    args: Prisma.DirectoryLinkCreateArgs
  ): Promise<PrismaDirectoryLink> {
    return this.prisma.directoryLink.create(args);
  }
  async updateDirectoryLink(
    args: Prisma.DirectoryLinkUpdateArgs
  ): Promise<PrismaDirectoryLink> {
    return this.prisma.directoryLink.update(args);
  }
  async deleteDirectoryLink(
    args: Prisma.DirectoryLinkDeleteArgs
  ): Promise<PrismaDirectoryLink> {
    return this.prisma.directoryLink.delete(args);
  }
}