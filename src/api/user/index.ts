import request from '@/utils/request';
import { TransformedResponse, RequestListParams } from 'Api';
import { UserParams } from './params';
import { Method } from '../types';

export function useUserApi() {
  return {
    /**
     * 获取用户列表
     * @author Peng
     * @date 2023-04-15
     * @param {any} params:object
     * @returns {any}
     */
    getUsers<T = any>(params: RequestListParams): TransformedResponse<T> {
      return request({
        url: '/user',
        method: Method.GET,
        params,
      });
    },
    /**
     * 添加用户
     * @author Peng
     * @date 2023-04-15
     * @param {any} params:object
     * @returns {any}
     */
    addUser<T>(params: UserParams): TransformedResponse<T> {
      return request({
        url: '/user',
        method: Method.POST,
        data: JSON.stringify(params),
      });
    },
    /**
     * 更新用户信息
     * @author Peng
     * @date 2023-04-15
     * @param {any} userId:number
     * @param {any} params:UserParams
     * @returns {any}
     */
    updateUser<T>(userId: number, params: UserParams): TransformedResponse<T> {
      return request({
        url: `/user/${userId}`,
        method: Method.PUT,
        data: JSON.stringify(params),
      });
    },
    update<T>(userId: number, params: UserParams): TransformedResponse<T> {
      return request({
        url: `/user/${userId}`,
        method: Method.PATCH,
        data: JSON.stringify(params),
      });
    },
    /**
     * 通过ID删除用户
     * @author Peng
     * @date 2023-04-15
     * @param {any} userId:number
     * @returns {any}
     */
    deleteUserById<T>(userId: number): TransformedResponse<T> {
      return request({
        url: `/user/${userId}`,
        method: Method.DELETE,
      });
    },
    /**
     * 批量删除用户
     */
    deleteUsers(ids: number[]): TransformedResponse<string> {
      return request({
        url: `/user`,
        method: Method.DELETE,
        data: JSON.stringify({ ids }),
      });
    },
    /**
     * 上传用户头像
     * @author Peng
     * @date 2023-04-03
     * @param {any} userId:number
     * @param {any} file:FormData
     * @returns {any}
     */
    uploadUserAvatar(userId: number, file: FormData) {
      return request({
        url: `/user/uploadAvatarById/${userId}`,
        method: Method.POST,
        data: file,
        headers: {
          'Content-Type': 'multipart/form-data',
          'resource-classification': 'user-cover',
        },
      });
    },
    /**
     * 修改用户密码
     * @author Peng
     * @date 2023-05-07
     * @param {any} userId:number
     * @param {any} params:object
     * @returns {any}
     */
    changeUserPwd(userId: number, params: object) {
      return request({
        url: `/user/changePasswordById/${userId}`,
        method: Method.POST,
        data: params,
      });
    },
  };
}
