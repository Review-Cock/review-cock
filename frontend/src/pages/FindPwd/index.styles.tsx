import styled from 'styled-components';

export const FindPwdBox = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  align-items: center;
`;

export const Title = styled.div`
  text-align: center;
  font-style: normal;
  font-variant: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 40px;
  font-family: Pretendard;
`;

export const Notice = styled.div`
  text-align: center;
  margin-top: 20px;

  p {
    margin: 20px 0px;

    &:first-child {
      font-size: 20px;
      font-weight: 700;
    }

    &:last-child {
      font-size: 15px;
      opacity: 0.5;
    }
  }
`;

export const FindPwdForm = styled.form`
  margin-top: 50px;
  width: 35%;
  display: flex;
  flex-direction: column;
`;

export const FindPwdInput = styled.input`
  padding: 15px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #cccccc;

  &:last-child {
    margin-top: 20px;
    padding: 20px 15px;
    border: none;
    background-color: #e76969;
    color: #ffffff;
    border-radius: 5px;
    cursor: pointer;
  }
`;
