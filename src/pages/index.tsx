import * as React from 'react';
import Link from 'next/link';
import { useApiClient } from '../utils';
import { BtcRate } from '../components';

export default function HomePage() {
  const { data } = useApiClient('/crypo/btc');

  if (!data) {
    return <span>Carregando...</span>;
  }
  // @ts-ignore
  const bpi = data.data.bpi;
  return (
    <div>
      <div className="flex jc-center mb-2">
        <Link href="/update">
          <a className="btn">Atualizar valor monetário</a>
        </Link>
      </div>
      <div>
        <BtcRate title={bpi.BTC.code} rate={bpi.BTC.rate} />
      </div>
      <div className="flex">
        <BtcRate title={bpi.BRL.code} rate={bpi.BRL.rate} />
        <BtcRate title={bpi.CAD.code} rate={bpi.CAD.rate} />
        <BtcRate title={bpi.EUR.code} rate={bpi.EUR.rate} />
        <BtcRate title={bpi.USD.code} rate={bpi.USD.rate} />
      </div>
    </div>
  );
}
