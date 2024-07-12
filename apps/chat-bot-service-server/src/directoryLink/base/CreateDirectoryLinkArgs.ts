/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DirectoryLinkCreateInput } from "./DirectoryLinkCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateDirectoryLinkArgs {
  @ApiProperty({
    required: true,
    type: () => DirectoryLinkCreateInput,
  })
  @ValidateNested()
  @Type(() => DirectoryLinkCreateInput)
  @Field(() => DirectoryLinkCreateInput, { nullable: false })
  data!: DirectoryLinkCreateInput;
}

export { CreateDirectoryLinkArgs as CreateDirectoryLinkArgs };