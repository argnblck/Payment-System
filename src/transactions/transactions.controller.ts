import { Body, Controller, Get, Param, ParseIntPipe, Post, ValidationPipe } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { TransactionsService } from './transactions.service';
import { Transaction } from './transactions.model';
import { CreateTransactionDTO } from './dto/create-transaction.dto';

@ApiTags('Транзакции')
@Controller('transactions')
export class TransactionsController {
    constructor(private transactionsService: TransactionsService) { }

    @ApiOperation({ summary: 'Создание транзакций' })
    @ApiResponse({ status: 200, type: Transaction })
    @Post()
    createTransaction(@Body(new ValidationPipe()) dto: CreateTransactionDTO) {
        return this.transactionsService.createTransaction(dto);
    }

    @ApiOperation({ summary: 'Получить все транзакции' })
    @ApiResponse({ status: 200, type: [Transaction] })
    @Get()
    getAllTransaction() {
        return this.transactionsService.getAllTransaction();
    }

    @ApiOperation({ summary: 'Получить транзакцию по id' })
    @ApiResponse({ status: 200, type: Transaction })
    @Get('/:id')
    getTransactionById(@Param('id', ParseIntPipe) id: number) {
        return this.transactionsService.getTransactionById(id);
    }
}
