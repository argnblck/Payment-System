import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNumber } from 'class-validator';

export class CreateTransactionDTO {
    @ApiProperty({ example: '1250', description: 'Сумма перевода' })
    @IsNumber()
    readonly amount: number;
    @ApiProperty({ example: '3', description: 'Отправитель перевода' })
    @IsInt({ message: 'должно быть числом' })
    readonly sender_account_id: number;
    @ApiProperty({ example: '2', description: 'Получатель перевода' })
    @IsInt({ message: 'должно быть числом' })
    readonly recipient_account_id: number;
}