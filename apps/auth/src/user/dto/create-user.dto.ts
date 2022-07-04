import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, NotEquals, MinLength} from "class-validator";

export class CreateUserDto {
    @ApiProperty() @IsNotEmpty() @IsString() @NotEquals("string") @MinLength(4)
    login: string;
    @ApiProperty() @IsNotEmpty() @IsString() @NotEquals("string") @MinLength(6)
    password: string;
}
