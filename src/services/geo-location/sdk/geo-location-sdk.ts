import axios, { AxiosError } from 'axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

interface GeoLocationResponse {
  lat: string;
  lng: string;
  country: string;
  city: string;
}

@Injectable()
export class GeoLocationSDK {
  private readonly baseUrl: string;

  constructor(private configService: ConfigService) {
    this.baseUrl = this.configService.get<string>('BASIC_URL', '');
    if (!this.baseUrl) {
      throw new Error('Base URL is not provided');
    }
  }

  async getLocationInfo(ip: string): Promise<GeoLocationResponse> {
    try {
      const response = await axios.get<GeoLocationResponse>(
        `${this.baseUrl}/?ip=${ip}`,
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        if (axiosError.response?.status === 404) {
          throw new Error('No data found for this IP');
        } else if (axiosError.response?.status === 400) {
          throw new Error('Invalid IP address format');
        } else {
          throw new Error('Server error');
        }
      } else {
        throw new Error('Failed to fetch location information');
      }
    }
  }
}
