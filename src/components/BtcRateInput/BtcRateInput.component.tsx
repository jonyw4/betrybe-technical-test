import * as React from 'react';

export function BtcRateInput({
  rate,
  title,
  onChange = undefined,
  disabled = false
}: BtcRateInputProps) {
  return (
    <div className="btc-rate">
      <div className="btc-rate__title">{title}</div>
      <input
        className="btc-rate__rate"
        type="number"
        name={title}
        value={rate}
        onChange={onChange}
        readOnly={onChange ? false : true}
        disabled={disabled}
        step={0.1}
      />
    </div>
  );
}

interface BtcRateInputProps {
  rate: number;
  title: string;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
