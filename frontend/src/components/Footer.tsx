import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Container>
      <div>Side Project | https://github.com/BOHYUN-JO/side_project</div>
      <div>오늘의 방문자 |</div>
    </Container>
  );
};

const Container = styled.div`
  height: 2rem;
  width: 100%;
  background-color: #ffffff;
  border-top: 0.05rem solid gray;
  margin: 0, 1.25rem;
  padding: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 0.7rem;
  color: black;
`;

export default Footer;
