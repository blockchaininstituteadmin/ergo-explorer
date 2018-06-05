import axios, { AxiosResponse } from 'axios';
import environment from '../config/environment';

export interface IGetBlocksParams {
  limit?: number;
  offset?: number;
  startDate?: number;
  endDate?: number;
  sortBy?: string;
  sortDirection?: string;
}

export class BlockApiService {
  static get apiUrl (): string {
    return `${environment.apiUrl}/blocks`;
  }
  
  static getBlock (id: string): any {
    return axios.get(`${BlockApiService.apiUrl}/${id}`)
      .then((response: AxiosResponse) => {
        return response.data;
      });
  }
  
  static getBlocks ({ limit, offset, sortBy, sortDirection, startDate, endDate }: IGetBlocksParams): any {
    return axios.get(`${BlockApiService.apiUrl}`, {
      params: {
        endDate,
        limit,
        offset,
        sortBy: sortBy || 'height',
        sortDirection: sortDirection || 'desc',
        startDate
      }
    })
      .then((response: AxiosResponse) => {
        return response.data;
      });
  }
}
