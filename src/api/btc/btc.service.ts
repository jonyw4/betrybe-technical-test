import { CoindeskService, GetCurrentPriceBTCResponse, BPI } from '../utils';
import { Currencies } from './types';
import { CurrenciesService } from './currencies.service';

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
  constructor(
    private coindeskService = new CoindeskService(),
    private currenciesService = new CurrenciesService()
  ) {}
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
  private async getLocalBPIs(BTCInDollar: number) {
    const currenciesExchanges = await this.currenciesService.getCurrenciesExchanges();

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
    const localBPIs = await this.getLocalBPIs(currentPrices.bpi.USD.rate_float);
    return {
      ...currentPrices,
      bpi: {
        ...currentPrices.bpi,
        ...localBPIs
      }
    };
  }
  public async updateCurrency(currency: Currencies, value: number) {
    return await this.currenciesService.updateCurrencyExchange(currency, value);
  }
}
