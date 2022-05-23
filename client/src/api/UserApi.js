import axiosClient from './AxiosClient';
import { apiUrl } from '../constant';

class UserAPI {
  getUserInfo = (params) => {
    console.log(params);
    const url = `${apiUrl}/user/${params}`;
    return axiosClient.get(url, {});
  };

  updateUser = (params) => {
    const url = `${apiUrl}/user/update`;

    return axiosClient.post(url, params);
  };
  unFollow = (params) => {
    console.log(params);
    const url = `${apiUrl}/user/user/${params}/unfollow`;
    return axiosClient.patch(url, {});
  };
  getListFollowings = (params) => {
    const url = `${apiUrl}/list-followings`;
    return axiosClient.get(url, params);
  };
  getAllPost = (params) => {
    const url = `${apiUrl}/posts`;
    return axiosClient.get(url, params);
  };
  getPostsByUserId = (params) => {
    const url = `${apiUrl}/posts/user/${params}`;
    return axiosClient.get(url, {});
  };
  getAllUsers = (params) => {
    const url = `${apiUrl}/user/users/getAllUsers`;
    return axiosClient.get(url);
  };
}

const userAPI = new UserAPI();

export default userAPI;
