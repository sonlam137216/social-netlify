import axiosClient from "./AxiosClient";
import { apiUrl } from "../constant";

class notificationAPI {
  getNotification = () => {
    const url = `${apiUrl}/noti/getNoti`;
    return axiosClient.get(url, {});
  };

  createNotification = (params) => {
    const url = `${apiUrl}/noti/createNoti`;
    console.log(params);
    return axiosClient.post(url, params);
  };

  seenNotification = () => {
    const url = `${apiUrl}/noti/seenNoti`;
    return axiosClient.patch(url, {});
  };
}

const NotificationAPI = new notificationAPI();
export default NotificationAPI;
