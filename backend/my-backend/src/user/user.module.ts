
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user.models'; // Adjust the import path as necessary
import { UsersController } from './user.controller';
import { UsersService } from './users.service';

@Module({
    imports: [SequelizeModule.forFeature([User])],
    providers: [UsersService],
    controllers: [UsersController],
})
export class UsersModule { }
