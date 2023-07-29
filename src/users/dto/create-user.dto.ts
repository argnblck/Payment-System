import { ApiProperty, PickType } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
    @ApiProperty({ example: 'username@gmail.com', description: 'Почтовыый адрес' })
    @IsString({ message: 'Должно быть строкой' })
    @IsEmail({}, { message: 'Некорректный email' })
    readonly email: string;
    @ApiProperty({ example: 'password12345', description: 'Пароль' })
    @IsString({ message: 'Должно быть строкой' })
    @Length(6, 32, { message: 'Минимальная длина 6, максимальня 32' })
    readonly password: string;
    @ApiProperty({ example: 'Иван', description: 'Имя пользователя' })
    @IsString({ message: 'Должно быть строкой' })
    readonly firstName: string;
    @ApiProperty({ example: 'Иванов', description: 'Фамилия пользователя' })
    @IsString({ message: 'Должно быть строкой' })
    readonly lastName: string;
}

export class LoginUserDto extends PickType(CreateUserDto, ['email', 'password'] as const) { }