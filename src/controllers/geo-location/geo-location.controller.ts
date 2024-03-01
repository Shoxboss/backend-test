import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { GeoLocationService } from 'src/services/geo-location/geo-location.service';
import { LocationQueryDto } from 'src/modules/geo-location/dto/location-query.dto';
import { LocationResponseDto } from 'src/modules/geo-location/dto/location-response.dto';

@Controller('')
export class GeoLocationController {
  constructor(private geoLocationService: GeoLocationService) {}

  @Get()
  async getLocation(
    @Query() query: LocationQueryDto,
  ): Promise<LocationResponseDto> {
    const { ip } = query;

    if (!ip) {
      throw new HttpException('IP address is required', HttpStatus.BAD_REQUEST);
    }

    const locationInfo = await this.geoLocationService.getLocationInfo(ip);

    if (!locationInfo) {
      throw new HttpException(
        'No data found for this IP',
        HttpStatus.NOT_FOUND,
      );
    }

    return locationInfo;
  }
}
