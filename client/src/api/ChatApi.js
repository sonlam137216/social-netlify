import axios from 'axios';
import axiosClient from './AxiosClient';
import { apiUrl } from '../constant';

const ChatAPI = {
    getAllConversations: () => {
        const url = `${apiUrl}/chat/getCon`;
        return axiosClient.get(url);
    },
    createConversation: (params) => {
        const url = `${apiUrl}/chat/createCon`;
        return axiosClient.post(url, params);
    },
    getUserContact: () => {
        const url = `${apiUrl}/user/chat/contact`;
        return axiosClient.get(url);
    },
    createMessage: (params) => {
        const url = `${apiUrl}/chat/createMessage`;
        return axiosClient.post(url, params);
    },
    getMessageInCon: (params) => {
        const url = `${apiUrl}/chat/${params}`;
        return axiosClient.get(url);
    },
    getMembersInCon: (params) => {
        const url = `${apiUrl}/chat/${params}/members`;
        return axiosClient.get(url);
    },
    deleteCon: (params) => {
        const url = `${apiUrl}/chat/removeCon`;
        return axiosClient.delete(url, { data: params });
    },
    removeUserInCon: (params) => {
        const url = `${apiUrl}/chat/removeUser`;
        return axiosClient.patch(url, params);
    },
    addUserInCon: (params) => {
        const url = `${apiUrl}/chat/addUser`;
        return axiosClient.patch(url, params);
    },
    tymMessage: (params) => {
        const url = `${apiUrl}/chat/tymMessage`;
        return axiosClient.patch(url, params);
    },
    unTymMessage: (params) => {
        const url = `${apiUrl}/chat/unTymMessage`;
        return axiosClient.patch(url, params);
    },
    changeConName: (params) => {
        const url = `${apiUrl}/chat/changeName/${params.id}`;
        return axiosClient.patch(url, { newName: params.newName });
    },
    changeConAvt: (params) => {
        const url = `${apiUrl}/chat/changeAvatar/${params.id}`;
        return axiosClient.patch(url, { newAvt: params.newAvt });
    },
};

export default ChatAPI;
