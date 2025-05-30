import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user/user.models';
import { UsersModule } from './user/user.module';

@Module({

  controllers: [AppController],
  providers: [AppService],

  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'new_secure_password',
      database: 'test',
      models: [User],
      synchronize: true,
      autoLoadModels: true,
    }),
    UsersModule,
  ],
})
export class AppModule { }
