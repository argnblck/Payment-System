import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
import { AccountsService } from 'src/accounts/accounts.service';
import { Transaction } from './transactions.model';
import { CreateTransactionDTO } from './dto/create-transaction.dto';

@Injectable()
export class TransactionsService {

    constructor(private accountsService: AccountsService,
        private sequelize: Sequelize,
        @InjectModel(Transaction) private transactionRepository: typeof Transaction) { }

    async createTransaction(dto: CreateTransactionDTO) {
        try {
            return await this.sequelize.transaction(async t => {
                const transactionHost = { transaction: t };

                const sender = await this.accountsService.getAccountById(dto.sender_account_id);
                const recipient = await this.accountsService.getAccountById(dto.recipient_account_id);
                const senderNewBalance = sender.balance - dto.amount;
                const recipientNewBalance = recipient.balance + dto.amount;

                if (senderNewBalance < 0) {
                    throw new Error('Не достаточно средств на счете отправителя')
                }

                const newTransaction = await this.transactionRepository.create(dto, transactionHost);
                await sender.update({ balance: senderNewBalance }, transactionHost);
                await recipient.update({ balance: recipientNewBalance }, transactionHost)

                return newTransaction;
            })
        } catch (err) {
            throw new HttpException(`${err.message}`, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    async getAllTransaction() {
        const transactions = await this.transactionRepository.findAll();
        return transactions;
    }

    async getTransactionById(id: number) {
        const transaction = await this.transactionRepository.findByPk(id);
        return transaction;
    }
}
