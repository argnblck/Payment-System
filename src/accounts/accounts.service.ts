import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Account } from './accounts.model';
import { CreateAccountDto, UpdateAccountDto } from './dto/account.dto';

@Injectable()
export class AccountsService {
    constructor(@InjectModel(Account) private accountRepository: typeof Account) { }

    async createAccount(dto: CreateAccountDto) {
        const account = await this.accountRepository.create(dto);
        if (!account) {
            throw new InternalServerErrorException('Счет не создан')
        }
        return account;
    }

    async getAllAccounts() {
        const accounts = await this.accountRepository.findAll();
        return accounts;
    }

    async getAccountById(id: number) {
        const account = await this.accountRepository.findByPk(id);
        if (!account) {
            throw new NotFoundException('Счет не найден')
        }
        return account;
    }

    async updateAccountById(id: number, dto: UpdateAccountDto) {
        const updatedAccount = await this.accountRepository.findByPk(id);
        if (!updatedAccount) {
            throw new NotFoundException('Счет не найден')
        }
        updatedAccount.update(dto);
        return updatedAccount;
    }

    async deleteAccountById(id: number) {
        const account = await this.accountRepository.findByPk(id);
        if (!account) {
            throw new NotFoundException('Счет не найден')
        }
        await account.destroy();
    }
}
