import * as countries from '../constants/iso-3166.json';

export interface Country {
  country: string;
  alpha2: string;
  alpha3: string;
  numeric: string;
}

function getByIsoCode(code: string) {
  return (
    countries.find((item) => [item.alpha2, item.alpha2].includes(code)) ?? null
  );
}

export default {
  getByIsoCode,
};
