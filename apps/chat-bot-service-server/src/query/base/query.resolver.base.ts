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
import { Query } from "./Query";
import { QueryCountArgs } from "./QueryCountArgs";
import { QueryFindManyArgs } from "./QueryFindManyArgs";
import { QueryFindUniqueArgs } from "./QueryFindUniqueArgs";
import { CreateQueryArgs } from "./CreateQueryArgs";
import { UpdateQueryArgs } from "./UpdateQueryArgs";
import { DeleteQueryArgs } from "./DeleteQueryArgs";
import { QueryService } from "../query.service";
@graphql.Resolver(() => Query)
export class QueryResolverBase {
  constructor(protected readonly service: QueryService) {}

  async _queriesMeta(
    @graphql.Args() args: QueryCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Query])
  async queries(@graphql.Args() args: QueryFindManyArgs): Promise<Query[]> {
    return this.service.queries(args);
  }

  @graphql.Query(() => Query, { nullable: true })
  async query(
    @graphql.Args() args: QueryFindUniqueArgs
  ): Promise<Query | null> {
    const result = await this.service.query(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Query)
  async createQuery(@graphql.Args() args: CreateQueryArgs): Promise<Query> {
    return await this.service.createQuery({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Query)
  async updateQuery(
    @graphql.Args() args: UpdateQueryArgs
  ): Promise<Query | null> {
    try {
      return await this.service.updateQuery({
        ...args,
        data: args.data,
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

  @graphql.Mutation(() => Query)
  async deleteQuery(
    @graphql.Args() args: DeleteQueryArgs
  ): Promise<Query | null> {
    try {
      return await this.service.deleteQuery(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
