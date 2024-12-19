import 
{ 
    IsEmail, 
    IsNotEmpty, 
    Length, 
    MaxLength, 
    IsNumber, 
    Min 
} from "class-validator";

export class CreateRhDto {
    @IsNotEmpty()
    first_name: string;

    @IsNotEmpty()
    last_name: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    @Length(10, 10, { message: "Phone number must be exactly 10 digits long." })
    phone_number: string; 

    @IsNotEmpty()
    date: string;

    @IsNotEmpty()
    @IsNumber()
    @Min(0, { message: "Salary must be a positive number." })
    salary: number;

    @IsNotEmpty()
    position: string
    @IsNotEmpty()
    department: string;


}
