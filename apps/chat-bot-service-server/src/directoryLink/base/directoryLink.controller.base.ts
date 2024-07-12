/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { DirectoryLinkService } from "../directoryLink.service";
import { DirectoryLinkCreateInput } from "./DirectoryLinkCreateInput";
import { DirectoryLink } from "./DirectoryLink";
import { DirectoryLinkFindManyArgs } from "./DirectoryLinkFindManyArgs";
import { DirectoryLinkWhereUniqueInput } from "./DirectoryLinkWhereUniqueInput";
import { DirectoryLinkUpdateInput } from "./DirectoryLinkUpdateInput";

export class DirectoryLinkControllerBase {
  constructor(protected readonly service: DirectoryLinkService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: DirectoryLink })
  async createDirectoryLink(
    @common.Body() data: DirectoryLinkCreateInput
  ): Promise<DirectoryLink> {
    return await this.service.createDirectoryLink({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        url: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [DirectoryLink] })
  @ApiNestedQuery(DirectoryLinkFindManyArgs)
  async directoryLinks(
    @common.Req() request: Request
  ): Promise<DirectoryLink[]> {
    const args = plainToClass(DirectoryLinkFindManyArgs, request.query);
    return this.service.directoryLinks({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        url: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: DirectoryLink })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async directoryLink(
    @common.Param() params: DirectoryLinkWhereUniqueInput
  ): Promise<DirectoryLink | null> {
    const result = await this.service.directoryLink({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        url: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: DirectoryLink })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateDirectoryLink(
    @common.Param() params: DirectoryLinkWhereUniqueInput,
    @common.Body() data: DirectoryLinkUpdateInput
  ): Promise<DirectoryLink | null> {
    try {
      return await this.service.updateDirectoryLink({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
          url: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: DirectoryLink })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteDirectoryLink(
    @common.Param() params: DirectoryLinkWhereUniqueInput
  ): Promise<DirectoryLink | null> {
    try {
      return await this.service.deleteDirectoryLink({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
          url: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}