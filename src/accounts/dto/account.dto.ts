import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateAccountDto {
    @ApiProperty({ example: 'Личный счет', description: 'Название счета' })
    @IsString({ message: 'должно быть строкой' })
    readonly title: string;
    @ApiProperty({ example: '1250', description: 'баланс счета' })
    @IsNumber()
    readonly balance: number;
}

export class UpdateAccountDto extends PartialType(CreateAccountDto) { }