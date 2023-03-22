import React, { FC } from 'react';
import styled from 'styled-components';

import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';

type MainPageProps = {
  children?: React.ReactNode;
};

const MainPage: FC<MainPageProps> = ({ children }) => {
  return (
    <Container>
      <NavigationBar />
      <ContentWrapper>{children}</ContentWrapper>
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
`;

const ContentWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default MainPage;
