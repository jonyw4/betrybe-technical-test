import got from 'got';

interface BPI {
  code: string;
  rate: string;
  description: string;
  rate_float: number;
}

interface GetCurrentPriceBTCResponse {
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
  constructor(
    private client = got.extend({ prefixUrl: ENDPOINT, responseType: 'json' })
  ) {}

  async getCurrentPriceBTC(): Promise<GetCurrentPriceBTCResponse> {
    return await this.client('bpi/currentprice/BTC.json', {
      method: 'GET'
    }).json<GetCurrentPriceBTCResponse>();
  }
}
