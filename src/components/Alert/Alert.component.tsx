import * as React from 'react';

/**
 * Alert box
 */
export function Alert({ message, type = 'default' }: AlertProps) {
  return <div className={`alert alert--${type}`}>{message}</div>;
}

interface AlertProps {
  message: string;
  type?: 'default' | 'warning';
}
