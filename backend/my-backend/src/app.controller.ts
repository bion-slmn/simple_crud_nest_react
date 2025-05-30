import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Sequelize } from 'sequelize-typescript';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly sequelize: Sequelize) { }


  @Get()
  async testConnection(): Promise<string> {
    try {
      await this.sequelize.authenticate();
      return 'Database connection has been established successfully.';
    } catch (error) {
      console.error('Unable to connect to the database:', error);
      return 'Database connection failed';
    }
  }
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}


