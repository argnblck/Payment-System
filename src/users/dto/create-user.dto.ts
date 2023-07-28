import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty({ example: 'username@gmail.com', description: 'Почтовыый адрес' })
    readonly email: string;
    @ApiProperty({ example: 'password12345', description: 'Пароль' })
    readonly password: string;
    @ApiProperty({ example: 'Иван', description: 'Имя пользователя' })
    readonly firstName: string;
    @ApiProperty({ example: 'Иванов', description: 'Фамилия пользователя' })
    readonly lastName: string;
}