import React from 'react';
import { JOIN_TITLE } from '../../utils/constants/joinConstants';
import JoinForm from '../../components/Join/JoinForm';
import MainPage from '../../Layouts/MainPage';
import { JoinBox, Title } from './index.styles';

const Join = () => {
  return (
    <MainPage>
      <JoinBox>
        <Title>{JOIN_TITLE}</Title>
        <JoinForm />
      </JoinBox>
    </MainPage>
  );
};

export default Join;
