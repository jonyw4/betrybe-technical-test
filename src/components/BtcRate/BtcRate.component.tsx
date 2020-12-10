import * as React from 'react';

export function BtcRate({ rate, title }: BtcRateProps) {
  return (
    <div className="btc-rate">
      <div className="btc-rate__title">{title}</div>
      <div className="btc-rate__rate">{rate}</div>
    </div>
  );
}

interface BtcRateProps {
  rate: string;
  title: string;
}
