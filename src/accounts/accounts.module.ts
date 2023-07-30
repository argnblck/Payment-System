import { Module } from '@nestjs/common';
import { AccountsController } from './accounts.controller';
import { AccountsService } from './accounts.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Account } from './accounts.model';
import { Transaction } from 'src/transactions/transactions.model';
import { User } from 'src/users/users.model';

@Module({
  controllers: [AccountsController],
  providers: [AccountsService],
  imports: [
    SequelizeModule.forFeature([Account, Transaction, User])
  ],
  exports: [AccountsService]
})
export class AccountsModule { }
