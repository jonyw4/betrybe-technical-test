import * as React from 'react';
import { AxiosError } from 'axios';
import Router from 'next/router';
import { useForm } from 'react-hook-form';
import { FormInputError, Alert } from '../components';
import { apiClient } from '../utils';
import { CurrenciesService, CurrenciesExchanges } from '../api/btc';
import { GetServerSideProps, InferGetStaticPropsType } from 'next';
import Link from 'next/link';

export const getServerSideProps: GetServerSideProps<{
  currenciesExchanges: CurrenciesExchanges;
}> = async () => {
  const currenciesExchanges = await new CurrenciesService().getCurrenciesExchanges();
  return {
    props: {
      currenciesExchanges
    }
  };
};

interface UpdatePageFormValues {
  currency: string;
  value: string;
}

export default function UpdatePage({
  currenciesExchanges
}: InferGetStaticPropsType<typeof getServerSideProps>) {
  const {
    register,
    handleSubmit,
    errors,
    formState,
    watch
  } = useForm<UpdatePageFormValues>();
  const { isSubmitting } = formState;
  const [requestError, setRequestError] = React.useState(null);

  const onSubmit = async (values) => {
    setRequestError(null);
    try {
      const { data } = await apiClient.post(
        '/crypo/btc',
        { ...values, value: Number(values.value) },
        {
          headers: { authorization: localStorage.getItem('token') }
        }
      );
      Router.push('/');
    } catch (e) {
      const {
        response: { data: d }
      }: AxiosError<any> = e;
      setRequestError(d.message || 'Erro Interno');
    }
  };

  const { currency } = watch(['currency']);

  return (
    <>
      <Link href="/">
        <a className="btn" style={{ position: 'absolute', top: 10, left: 10 }}>
          Voltar
        </a>
      </Link>
      <form onSubmit={handleSubmit(onSubmit)}>
        {requestError && <Alert type="warning">{requestError}</Alert>}

        <div className="mb-1">
          <label htmlFor="currency" className="mb-1">
            Moeda
          </label>
          <select name="currency" ref={register({ required: true })}>
            {Object.keys(currenciesExchanges).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
          {currency && (
            <div className="mt-2 mb-2">
              <strong>Valor Atual:</strong> {currenciesExchanges[currency]}
            </div>
          )}
          {errors.currency && <FormInputError />}
        </div>

        <div className="mb-1">
          <label htmlFor="value" className="mb-1">
            Novo valor
          </label>
          <input
            name="value"
            type="number"
            ref={register({ required: true })}
          />
          {errors.value && <FormInputError />}
        </div>

        <input
          type="submit"
          className="btn btn--success"
          disabled={isSubmitting}
          value="ATUALIZAR"
        />
      </form>
    </>
  );
}
