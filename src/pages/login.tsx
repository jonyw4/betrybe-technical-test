import * as React from 'react';
import Head from 'next/head';
import { AxiosError } from 'axios';
import Router from 'next/router';
import { useForm } from 'react-hook-form';
import { FormInputError, Alert } from '../components';
import { apiClient } from '../utils';
import { ApiLoginResponse } from '../api';

export default function LoginPage() {
  const { register, handleSubmit, errors, formState } = useForm();
  const { isSubmitting } = formState;
  const [requestError, setRequestError] = React.useState(null);

  const onSubmit = async (values) => {
    setRequestError(null);
    try {
      const { data } = await apiClient.post<ApiLoginResponse>('/login', values);
      localStorage.setItem('token', data.token);
      Router.push('/');
    } catch (e) {
      const {
        response: { data }
      }: AxiosError<any> = e;
      setRequestError(data.message || 'Erro Interno');
    }
  };

  return (
    <>
      <Head>
        <title>Crypo Index - Login</title>
      </Head>
      <form onSubmit={handleSubmit(onSubmit)}>
        {requestError && <Alert type="warning">{requestError}</Alert>}

        <div className="mb-1">
          <label htmlFor="email">Email</label>
          <input name="email" type="email" ref={register({ required: true })} />
          {errors.email && <FormInputError />}
        </div>

        <div className="mb-1">
          <label htmlFor="password">Senha</label>
          <input
            name="password"
            type="password"
            ref={register({ required: true })}
          />
          {errors.password && <FormInputError />}
        </div>

        <input
          type="submit"
          className="btn btn--success"
          disabled={isSubmitting}
          value="ENTRAR"
        />
      </form>
    </>
  );
}
