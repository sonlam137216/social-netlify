import axiosClient from './AxiosClient';
import { apiUrl } from '../constant';

class PostAPI {
  getPosts = () => {
    const url = `${apiUrl}/home/post`;
    return axiosClient.get(url, {});
  };

  getCommentByPostID = (params) => {
    const url = `${apiUrl}/comments/` + params;
    return axiosClient.get(url, {});
  };

  likePost = (params) => {
    const url = `${apiUrl}/posts/post/` + params + '/like';
    return axiosClient.patch(url, {});
  };

  getPostById = (params) => {
    const url = `${apiUrl}/posts/${params}`;
    return axiosClient.get(url, {});
  };

  unLikePost = (params) => {
    const url = `${apiUrl}/posts/post/` + params + '/unlike';
    return axiosClient.patch(url, {});
  };

  recommendFriends = () => {
    const url = `${apiUrl}/home/relate`;
    return axiosClient.get(url, {});
  };

  addComment = (params) => {
    let url = '';
    if (params.commentId == null || params.commentId == '') {
      url = `${apiUrl}/comments/` + params.postId + '/';
    } else {
      url = `${apiUrl}/comments/` + params.postId + '/' + params.commentId;
    }

    let content = params.content;
    return axiosClient.post(url, { content });
  };

  handleLikeCmt = (params) => {
    const url = `${apiUrl}/comments/ul/` + params;

    return axiosClient.put(url, {});
  };

  deleteCmt = (params) => {
    const url = `${apiUrl}/comments/` + params.CmtId;

    return axiosClient.delete(url, {});
  };

  editCmt = (params) => {
    const url = `${apiUrl}/comments/` + params.CmtId;
    return axiosClient.put(url, {});
  };

  unnFollowFriends = (params) => {
    const url = `${apiUrl}/user/user/` + params + '/unfollow';
    return axiosClient.patch(url, { params });
  };

  followFriends = (params) => {
    const url = `${apiUrl}/user/user/` + params + '/follow';
    return axiosClient.patch(url, { params });
  };

  getlistLike = (params) => {
    const url = `${apiUrl}/user/users`;
    return axiosClient.post(url, params);
  };
  createNewPost = (params) => {
    const url = `${apiUrl}/posts/createPost`;
    return axiosClient.post(url, params);
  };
}

const postAPI = new PostAPI();
export default postAPI;
