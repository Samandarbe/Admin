import { ApiProperty } from "@nestjs/swagger";

 export class createUserDto {
   @ApiProperty({
     example: "samandarbeksamiye1999@gmail.com",
     description: "Uniq email",
   })
   email: string;

   @ApiProperty({
     example: "08021119",
     description: "Uniq email",
   })
   password: string;
 }