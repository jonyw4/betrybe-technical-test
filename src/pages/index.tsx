import * as React from 'react';
import Link from 'next/link';
import { useApiClient } from '../utils';
import { BtcRateInput, Loading } from '../components';
import { ApiGetBtcResponse } from '../api';

export default function HomePage() {
  const { data } = useApiClient<ApiGetBtcResponse>('/crypo/btc');
  const [btcRate, setBtcRate] = React.useState(1);

  function getBpiValue(currencyRate: number): number {
    return Number(currencyRate * btcRate);
  }

  if (!data) {
    return <Loading />;
  }
  const bpi = data.data.bpi;
  return (
    <div>
      <div className="flex jc-center mb-2">
        <Link href="/update">
          <a className="btn">Atualizar valor monetário</a>
        </Link>
      </div>
      <div>
        <BtcRateInput
          title={bpi.BTC.code}
          rate={btcRate}
          onChange={(e) => setBtcRate(Number(e.target.value))}
        />
      </div>
      <div className="flex">
        <BtcRateInput
          title={bpi.BRL.code}
          rate={getBpiValue(bpi.BRL.rate_float)}
          disabled
        />
        <BtcRateInput
          title={bpi.CAD.code}
          rate={getBpiValue(bpi.CAD.rate_float)}
          disabled
        />
        <BtcRateInput
          title={bpi.EUR.code}
          rate={getBpiValue(bpi.EUR.rate_float)}
          disabled
        />
        <BtcRateInput
          title={bpi.USD.code}
          rate={getBpiValue(bpi.USD.rate_float)}
          disabled
        />
      </div>
    </div>
  );
}
