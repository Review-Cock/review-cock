import axiosInstance from './axiosInstance';
import { REGISTER_URL } from '@utils/constants/apiConstants';

export const fetchRegisterCampaign = (body: FormData) =>
  axiosInstance.post(REGISTER_URL, body, {
    headers: {
      'content-type': 'multipart/form-data',
    },
  });
