import React from 'react';
import styled from 'styled-components';
import { JOIN_TITLE } from '../utils/JoinConstants';
import JoinForm from '../components/JoinForm';
import NavigationBar from '../components/NavigationBar';

const Join = () => {
  return (
    <>
      <NavigationBar />
      <JoinBox>
        <Title>{JOIN_TITLE}</Title>
        <JoinForm />
      </JoinBox>
    </>
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

  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');

  * {
    font-family: Pretendard;
  }
`;

const Title = styled.div`
  text-align: center;
  font-size: 36px;
`;
