import axios from 'axios';

/**
 * Make a request on the app
 */
export const apiClient = axios.create({ baseURL: '/api' });
