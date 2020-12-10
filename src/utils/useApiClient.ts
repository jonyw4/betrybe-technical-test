import useSWR from 'swr';
import { AxiosRequestConfig } from 'axios';
import { apiClient } from './apiClient';

export function useApiClient<T>(url: string, config: AxiosRequestConfig = {}) {
  return useSWR(url, (url) => apiClient.request<T>({ ...config, url }));
}
