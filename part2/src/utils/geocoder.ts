import NodeGeocoder from 'node-geocoder';

interface GeocoderOptions {
  provider: string | undefined;
  httpAdapter: string;
  apiKey: string | undefined;
  formatter: null;
}

const options: GeocoderOptions = {
  provider: process.env.GEOCODER_PROVIDER,
  httpAdapter: 'https',
  apiKey: process.env.GEOCODER_API_KEY,
  formatter: null,
};

export const geocoder = NodeGeocoder(options);
