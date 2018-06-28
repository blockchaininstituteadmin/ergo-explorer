import axios, { AxiosResponse } from 'axios';
import environment from '../config/environment';

export class TransactionApiService {
  static get apiUrl (): string {
    return `${environment.apiUrl}/transactions`;
  }
  
  static getTransaction (id: string): any {
    return axios.get(`${TransactionApiService.apiUrl}/${id}`)
      .then((response: AxiosResponse) => {
        return response.data;
      });
  }
}
