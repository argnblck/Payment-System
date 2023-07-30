import { ApiProperty } from '@nestjs/swagger';
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Account } from 'src/accounts/accounts.model';

interface ICreateTransactionAttrs {
    amount: number;
    sender_account_id: number;
    recipient_account_id: number;
}

@Table({ tableName: 'transactions' })
export class Transaction extends Model<Transaction, ICreateTransactionAttrs> {

    @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({ example: '1250', description: 'Сумма перевода' })
    @Column({ type: DataType.INTEGER, allowNull: false })
    amount: number;

    @ApiProperty({ example: '3', description: 'Отправитель перевода' })
    @ForeignKey(() => Account)
    @Column({ type: DataType.INTEGER, allowNull: false })
    sender_account_id: number;

    @BelongsTo(() => Account, 'sender_account_id')
    senderAccountId: Account

    @ApiProperty({ example: '2', description: 'Получатель перевода' })
    @ForeignKey(() => Account)
    @Column({ type: DataType.INTEGER, allowNull: false })
    recipient_account_id: number;

    @BelongsTo(() => Account, 'recipient_account_id')
    recipientAccountId: Account
}