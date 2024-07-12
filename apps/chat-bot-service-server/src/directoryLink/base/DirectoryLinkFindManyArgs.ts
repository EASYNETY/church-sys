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
import { DirectoryLinkWhereInput } from "./DirectoryLinkWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { DirectoryLinkOrderByInput } from "./DirectoryLinkOrderByInput";

@ArgsType()
class DirectoryLinkFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => DirectoryLinkWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => DirectoryLinkWhereInput, { nullable: true })
  @Type(() => DirectoryLinkWhereInput)
  where?: DirectoryLinkWhereInput;

  @ApiProperty({
    required: false,
    type: [DirectoryLinkOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [DirectoryLinkOrderByInput], { nullable: true })
  @Type(() => DirectoryLinkOrderByInput)
  orderBy?: Array<DirectoryLinkOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { DirectoryLinkFindManyArgs as DirectoryLinkFindManyArgs };
