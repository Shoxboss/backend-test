import { Module } from '@nestjs/common';
import { GeoLocationController } from 'src/controllers/geo-location/geo-location.controller';
import { GeoLocationService } from 'src/services/geo-location/geo-location.service';

@Module({
  controllers: [GeoLocationController],
  providers: [GeoLocationService],
})
export class GeoLocationModule {}
