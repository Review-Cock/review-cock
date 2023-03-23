import React from 'react';
import styled from 'styled-components';
import { JOIN_TITLE } from '../utils/JoinConstants';
import JoinForm from '../components/JoinForm';
import MainPage from '../Layouts/MainPage';

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

const JoinBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

const Title = styled.div`
  text-align: center;
  font-size: 36px;
`;
