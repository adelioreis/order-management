import { Module } from '@nestjs/common';
import { AuthConfigTypeOrm } from './auth-config-type-orm';
import { DataSourceConfig } from './auth.data-source';
import { LibBaseService } from './lib-base.service';

@Module({
  providers: [LibBaseService, AuthConfigTypeOrm],
  exports: [LibBaseService],
  imports: [],
})
export class LibBaseModule {}
