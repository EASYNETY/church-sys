/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Sermon } from "./Sermon";
import { SermonCountArgs } from "./SermonCountArgs";
import { SermonFindManyArgs } from "./SermonFindManyArgs";
import { SermonFindUniqueArgs } from "./SermonFindUniqueArgs";
import { CreateSermonArgs } from "./CreateSermonArgs";
import { UpdateSermonArgs } from "./UpdateSermonArgs";
import { DeleteSermonArgs } from "./DeleteSermonArgs";
import { Speaker } from "../../speaker/base/Speaker";
import { SermonService } from "../sermon.service";
@graphql.Resolver(() => Sermon)
export class SermonResolverBase {
  constructor(protected readonly service: SermonService) {}

  async _sermonsMeta(
    @graphql.Args() args: SermonCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Sermon])
  async sermons(@graphql.Args() args: SermonFindManyArgs): Promise<Sermon[]> {
    return this.service.sermons(args);
  }

  @graphql.Query(() => Sermon, { nullable: true })
  async sermon(
    @graphql.Args() args: SermonFindUniqueArgs
  ): Promise<Sermon | null> {
    const result = await this.service.sermon(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Sermon)
  async createSermon(@graphql.Args() args: CreateSermonArgs): Promise<Sermon> {
    return await this.service.createSermon({
      ...args,
      data: {
        ...args.data,

        speaker: args.data.speaker
          ? {
              connect: args.data.speaker,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Sermon)
  async updateSermon(
    @graphql.Args() args: UpdateSermonArgs
  ): Promise<Sermon | null> {
    try {
      return await this.service.updateSermon({
        ...args,
        data: {
          ...args.data,

          speaker: args.data.speaker
            ? {
                connect: args.data.speaker,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Sermon)
  async deleteSermon(
    @graphql.Args() args: DeleteSermonArgs
  ): Promise<Sermon | null> {
    try {
      return await this.service.deleteSermon(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Speaker, {
    nullable: true,
    name: "speaker",
  })
  async getSpeaker(@graphql.Parent() parent: Sermon): Promise<Speaker | null> {
    const result = await this.service.getSpeaker(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
