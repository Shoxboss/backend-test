import { Module } from '@nestjs/common';
import { GeoLocationModule } from './modules/geo-location/geo-location.module';
import { ConfigAppModule } from './config/config.module';
@Module({
  imports: [GeoLocationModule, ConfigAppModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
