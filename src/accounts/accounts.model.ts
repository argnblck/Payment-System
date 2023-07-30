import { ApiProperty } from '@nestjs/swagger';
import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { Transaction } from 'src/transactions/transactions.model';
import { User } from 'src/users/users.model';

interface IAccountCreationAttrs {
    title: string;
    balance: number;
}

@Table({ tableName: 'accounts' })
export class Account extends Model<Account, IAccountCreationAttrs> {
    @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({ example: 'Личный счет', description: 'Название счета' })
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    title: string;

    @ApiProperty({ example: '1250', description: 'баланс счета' })
    @Column({ type: DataType.INTEGER, allowNull: false })
    balance: number;

    @ApiProperty({ example: '2', description: 'id владельца счета' })
    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER, allowNull: false })
    user_id: number

    @HasMany(() => Transaction, 'sender_account_id')
    senders: Transaction[];

    @HasMany(() => Transaction, 'recipient_account_id')
    recipients: Transaction[];

    @BelongsTo(() => User, 'user_id')
    userId: User
}