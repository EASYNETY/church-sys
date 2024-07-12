/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SermonWhereInput } from "./SermonWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SermonListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => SermonWhereInput,
  })
  @ValidateNested()
  @Type(() => SermonWhereInput)
  @IsOptional()
  @Field(() => SermonWhereInput, {
    nullable: true,
  })
  every?: SermonWhereInput;

  @ApiProperty({
    required: false,
    type: () => SermonWhereInput,
  })
  @ValidateNested()
  @Type(() => SermonWhereInput)
  @IsOptional()
  @Field(() => SermonWhereInput, {
    nullable: true,
  })
  some?: SermonWhereInput;

  @ApiProperty({
    required: false,
    type: () => SermonWhereInput,
  })
  @ValidateNested()
  @Type(() => SermonWhereInput)
  @IsOptional()
  @Field(() => SermonWhereInput, {
    nullable: true,
  })
  none?: SermonWhereInput;
}
export { SermonListRelationFilter as SermonListRelationFilter };