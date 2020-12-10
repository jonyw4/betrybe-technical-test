import axios from 'axios';

export interface BPI {
  code: string;
  rate: string;
  description: string;
  rate_float: number;
}

export interface GetCurrentPriceBTCResponse {
  time: {
    updated: string;
    updatedISO: string;
    updateduk: string;
  };
  disclaimer: string;
  bpi: {
    USD: BPI;
    BTC: BPI;
  };
}
const ENDPOINT = 'https://api.coindesk.com/v1/';

export class CoindeskService {
  constructor(private client = axios.create({ baseURL: ENDPOINT })) {}

  async getCurrentPriceBTC(): Promise<GetCurrentPriceBTCResponse> {
    return (
      await this.client.get<GetCurrentPriceBTCResponse>(
        'bpi/currentprice/BTC.json',
        {
          method: 'GET'
        }
      )
    ).data;
  }
}
