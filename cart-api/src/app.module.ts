import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { CartModule } from './api/cart/cart.module';
import { AuthModule } from './api/auth/auth.module';
import { OrderModule } from './api/order/order.module';
import { getDatabaseConfig } from './configs/database.config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({ useFactory: getDatabaseConfig }),
    AuthModule,
    CartModule,
    OrderModule,
  ],
  controllers: [
    AppController,
  ],
  providers: [],
})
export class AppModule { }