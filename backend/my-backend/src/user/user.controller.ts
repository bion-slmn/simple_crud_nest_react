import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.models'; // Adjust the import path as necessary


@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Get()
    async findAll() {
        return this.usersService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.usersService.findOne(id);
    }

    @Delete("id")
    async remove(@Param('id') id: string) {
        return this.usersService.remove(id);
    }

    @Post()
    async create(@Body() userData: Partial<User>) {
        console.log(userData, 11111111111111)
        return this.usersService.create(userData);
    }
}
