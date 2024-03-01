import { IsIP } from 'class-validator';

// DTO для запроса информации о местоположении по IP адресу
export class LocationQueryDto {
  // Декоратор IsIP проверяет, что значение является валидным IP адресом
  @IsIP()
  ip: string; // IP адрес, для которого запрашивается информация о местоположении
}
