import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
//import { TypeOrmConfigService } from 'apps/crud/src/type-orm-config-service/type-orm-config-service.service';
import { AuthService } from './auth.service';
import { UserModule } from './user/user.module';
import { LoginService } from './login/login.service';
import { LocalStrategy } from './local-strategy';
import { AuthConfigTypeOrm } from '@app/lib-base/auth-config-type-orm';
import { UserService } from './user/user.service';

@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: AuthConfigTypeOrm,
    }),

  ],
  controllers: [],
  providers: [AuthService, AuthConfigTypeOrm],
})
export class AuthModule {}
