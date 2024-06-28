import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://contaandersonsilva:1GvGhJUAGPq3hN7P@cluster0.tdy1bv6.mongodb.net',
    ),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
