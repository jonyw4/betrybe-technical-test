import * as React from 'react';

/**
 * Alert box
 */
export function Alert({ children, type = 'default' }: AlertProps) {
  return <div className={`alert alert--${type}`}>{children}</div>;
}

interface AlertProps {
  children: string;
  type?: 'default' | 'warning';
}
