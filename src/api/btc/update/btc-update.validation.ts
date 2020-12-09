import { ValidationHandler, Validator } from '../../validation';
import { BtcUpdateRequestData } from './btc-update.types';
import { CurrenciesService } from '../currencies.service';

class BtcCurrencyValidationHandler extends ValidationHandler<BtcUpdateRequestData> {
  constructor(
    data: BtcUpdateRequestData,
    private currenciesService = new CurrenciesService()
  ) {
    super(data);
  }
  public async handle() {
    const currencies = await this.currenciesService.getCurrencies();
    return currencies.some((c) => c === this.data.currency);
  }
}

class BtcValueValidationHandler extends ValidationHandler<BtcUpdateRequestData> {
  public async handle() {
    const { value } = this.data;
    return value && value > 0 && Number.isInteger(value);
  }
}

export class BtcUpdateValidator extends Validator<BtcUpdateRequestData> {
  constructor(data: BtcUpdateRequestData) {
    super(data, [BtcCurrencyValidationHandler, BtcValueValidationHandler]);
  }
}
