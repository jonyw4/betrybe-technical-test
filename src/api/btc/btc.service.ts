import { CoindeskService, GetCurrentPriceBTCResponse, BPI } from '../utils';
import currenciesExchanges from './currencies.json';

type Currencies = keyof typeof currenciesExchanges;

type LocalBPI = { [key in Currencies]: BPI };
type AllBPI = GetCurrentPriceBTCResponse['bpi'] & LocalBPI;

interface BtcServiceGetCurrentPriceResponse extends GetCurrentPriceBTCResponse {
  bpi: AllBPI;
}

const currenciesName: { [key in Currencies]: string } = {
  BRL: 'Brazilian Real',
  EUR: 'Euro',
  CAD: 'Canadian Dollar'
};

export class BtcService {
  constructor(private coindeskService = new CoindeskService()) {}
  private getBTCRateForCurrency(
    BTCInDolar: number,
    dollarExchange: number
  ): number {
    return BTCInDolar * dollarExchange;
  }
  private createLocalBpi(currency: string, rate: number): BPI {
    return {
      code: currency,
      rate_float: rate,
      description: currenciesName[currency],
      rate: rate.toLocaleString('en')
    };
  }
  private getLocalBPIs(BTCInDollar: number) {
    return Object.keys(currenciesExchanges).reduce(
      (previousValue, currency) => {
        const currencyExchange = Number(currenciesExchanges[currency]);
        const rate = this.getBTCRateForCurrency(BTCInDollar, currencyExchange);

        return {
          ...previousValue,
          [currency]: this.createLocalBpi(currency, rate)
        };
      },
      {} as AllBPI
    );
  }
  public async getCurrentPriceBTC(): Promise<BtcServiceGetCurrentPriceResponse> {
    const currentPrices = await this.coindeskService.getCurrentPriceBTC();
    return {
      ...currentPrices,
      bpi: {
        ...currentPrices.bpi,
        ...this.getLocalBPIs(currentPrices.bpi.USD.rate_float)
      }
    };
  }
}
