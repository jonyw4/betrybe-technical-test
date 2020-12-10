import * as React from 'react';

/**
 * Text that displays when has an error on the input of the form
 */
export function FormInputError({
  message = 'Esse campo é obrigatório'
}: FormInputErrorProps) {
  return <div className="form-input-error">{message}</div>;
}

interface FormInputErrorProps {
  message?: string;
}
