import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, ValidationPipe } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AccountsService } from './accounts.service';
import { Account } from './accounts.model';
import { CreateAccountDto, UpdateAccountDto } from './dto/account.dto';

@ApiTags('Счета')
@Controller('account')
export class AccountsController {

    constructor(private accountsServices: AccountsService) { }

    @ApiOperation({ summary: 'Создание счета' })
    @ApiResponse({ status: 200, type: Account })
    @Post()
    create(@Body(new ValidationPipe()) accountDto: CreateAccountDto) {
        return this.accountsServices.createAccount(accountDto);
    }

    @ApiOperation({ summary: 'Получить все счета' })
    @ApiResponse({ status: 200, type: [Account] })
    @Get()
    getAll() {
        return this.accountsServices.getAllAccounts();
    }

    @ApiOperation({ summary: 'Получить счет по id' })
    @ApiResponse({ status: 200, type: Account })
    @Get('/:id')
    getAccountById(@Param('id', ParseIntPipe) id: number) {
        return this.accountsServices.getAccountById(id);
    }

    @ApiOperation({ summary: 'Обновить счет по id' })
    @ApiResponse({ status: 200, type: Account })
    @Patch('/:id')
    updateAccountById(@Param('id', ParseIntPipe) id: number, @Body(new ValidationPipe()) accountDto: UpdateAccountDto) {
        return this.accountsServices.updateAccountById(id, accountDto);
    }

    @Delete('/:id')
    deleteAccountById(@Param('id', ParseIntPipe) id: number) {
        return this.accountsServices.deleteAccountById(id);
    }
}
