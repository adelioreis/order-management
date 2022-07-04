import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { ProductModule } from './product/product.module';
import { CustomerModule } from './customer/customer.module';

@Module({
  imports: [ProductModule, CustomerModule],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
