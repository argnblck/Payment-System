import { Module } from '@nestjs/common';
import { TransactionsController } from './transactions.controller';
import { TransactionsService } from './transactions.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Transaction } from './transactions.model';
import { Account } from 'src/accounts/accounts.model';
import { AccountsModule } from 'src/accounts/accounts.module';

@Module({
  controllers: [TransactionsController],
  providers: [TransactionsService],
  imports: [
    SequelizeModule.forFeature([Transaction, Account]),
    AccountsModule
  ]
})
export class TransactionsModule { }
