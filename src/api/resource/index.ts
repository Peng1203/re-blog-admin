import request from '@/utils/request';
import { TransformedResponse, RequestListParams } from 'Api';

export function useResourceApi() {
  return {
    getNetdiskDir<T>(params?: { path?: string }): TransformedResponse<T> {
      return request({
        url: '/resource/netdisk',
        method: 'get',
        params,
      });
    },
  };
}
