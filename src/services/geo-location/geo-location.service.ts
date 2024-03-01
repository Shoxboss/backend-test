// geo-location.service.ts

import { Injectable } from '@nestjs/common';
import * as geoip from 'geoip-lite';
import { LocationResponseDto } from 'src/modules/geo-location/dto/location-response.dto';
import countries from 'src/lib/countries';

@Injectable()
export class GeoLocationService {
  async getLocationInfo(ip: string): Promise<LocationResponseDto | null> {
    const geo = geoip.lookup(ip);
    if (!geo) {
      return null;
    }

    const [lat, lng] = geo.ll;
    const { city } = geo;
    const { country } = countries.getByIsoCode(geo.country) ?? geo;

    return { lat: lat.toString(), lng: lng.toString(), country, city };
  }
}
