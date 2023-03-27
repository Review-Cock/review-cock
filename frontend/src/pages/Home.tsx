import React from 'react';

import MainPage from '../Layouts/MainPage';
import CampaignItem from '../components/CampaignItem';

const dummy = {
  region: '전북',
  storeName: '이도훈',
  priceName: '6일남음',
  serviceName: '코딩',
  application: 3,
  total: 10,
};

const Home = () => {
  return (
    <MainPage>
      <CampaignItem {...dummy} />
    </MainPage>
  );
};

export default Home;
