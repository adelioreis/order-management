import { Injectable } from "@nestjs/common";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { DataSourceConfig } from "./auth.data-source";

@Injectable()
export class AuthConfigTypeOrm implements TypeOrmOptionsFactory {
    createTypeOrmOptions(): TypeOrmModuleOptions {
      return {...DataSourceConfig, autoLoadEntities: true} as TypeOrmModuleOptions
    }
  }
