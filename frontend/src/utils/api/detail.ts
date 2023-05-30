import axiosInstance from './axiosInstance';
import { CAMPAIGN_APPLY_URL, CAMPAIGN_DETAIL_URL } from '@utils/constants/apiConstants';

export const fetchCampaign = async (id: string) => {
  const data = await axiosInstance.get(CAMPAIGN_DETAIL_URL + id).then((res) => res.data);
  const [main, detail] = data.address.split(')');
  data.mainAddress = main + ')';
  data.detailAddress = detail;

  return data;
};

export const fetchApplyCampaign = ({ userSnsLink, id }: { userSnsLink: string; id: string }) =>
  axiosInstance.post(CAMPAIGN_APPLY_URL + id, userSnsLink);
