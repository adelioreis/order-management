import { User } from "apps/auth/src/user/entities/user.entity";
import { DataSource, DataSourceOptions } from "typeorm";

export const DataSourceConfig =  {
  type: 'postgres',
  host: process.env.DATA_BASE_HOST,
  port: +process.env.DATA_BASE_PORT,
  username: process.env.DATA_BASE_USER,
  password: process.env.DATA_BASE_PASSWORD,
  database: process.env.DATA_BASE_DB,
  logging: true,
  entities: [User,'apps/auth/src/entities/*.ts'],
  migrations: ['apps/auth/src/migrations/*.ts'],
}

const AppDataSource = new DataSource(DataSourceConfig as DataSourceOptions);
export default AppDataSource;

  
