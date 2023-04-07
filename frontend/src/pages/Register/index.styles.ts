import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const TitleBox = styled.div`
  min-width: 950px;
  width: 100%;
  border-bottom: 2px solid #707070;
  opacity: 1;
  & > h1 {
    text-align: center;
    font: normal normal bold 36px/40px Pretendard;
    letter-spacing: 0px;
    color: #222222;
    opacity: 1;
    margin-top: 60px;
    margin-bottom: 21px;
  }
  & > p {
    text-align: center;
    font: normal normal normal 16px/28px Pretendard;
    letter-spacing: 0px;
    color: #e38787;
    opacity: 1;
    margin-bottom: 60px;
  }
`;

export const CampainInfoBox = styled.div`
  width: 100%;
  padding: 50px 0 20px 0;
  border-bottom: 1px solid #cccccc;
  opacity: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const InputBox = styled.div`
  min-width: 950px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
`;

export const ButtonBox = styled.div`
  min-width: 950px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  & > button {
    margin-right: 20px;
    :first-child {
      background-color: #f58e8e;
    }
  }
`;

export const BusinessNumberInput = styled.input`
  width: 310px;
  height: 48px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #cccccc;
  border-radius: 5px;
  opacity: 1;
  outline: none;
  text-align: left;
  font: normal normal normal 16px/40px Pretendard;
  margin-right: 20px;
  letter-spacing: 0px;
  padding-left: 20px;
  opacity: 1;
  ::placeholder {
    color: #cccccc;
  }
`;

export const InputLabel = styled.label`
  display: flex;
  justify-content: flex-end;
  width: 30%;
  font: normal normal medium 20px/28px Pretendard;
  letter-spacing: 0px;
  color: #404040;
  opacity: 1;
  margin-right: 5px;
  display: flex;
  cursor: pointer;
`;

export const TextInput = styled.input`
  width: 30%;
  width: 460px;
  height: 48px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #cccccc;
  border-radius: 5px;
  opacity: 1;
  outline: none;
  text-align: left;
  font: normal normal normal 16px/40px Pretendard;
  letter-spacing: 0px;
  padding-left: 20px;
  ::placeholder {
    color: #cccccc;
  }
  opacity: 1;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const DateInput = styled.input`
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #cccccc;
  border-radius: 5px;
  opacity: 1;
  outline: none;
  text-align: center;
  width: 30%;
  width: 215px;
  height: 48px;
  margin-right: 20px;

  ::before {
    content: attr(data-placeholder);
    color: #cccccc;
    width: 100%;
  }
  :focus::before,
  :valid::before {
    display: none;
  }
`;

export const RedStar = styled.div`
  width: 1%;
  display: flex;
  height: 100%;
  align-items: center;
  padding: 5px 0 0 0;
  font: normal normal medium 20px/26px Pretendard;
  letter-spacing: 0px;
  color: #e76969;
  opacity: 1;
  margin-right: 80px;
`;

export const Tilde = styled.div`
  width: 10px;
  height: 10px;
  margin-right: 19px;
`;

export const Button = styled.button`
  width: 130px;
  height: 48px;
  background: #555555 0% 0% no-repeat padding-box;
  border-radius: 5px;
  opacity: 1;
  text-align: center;
  font: normal normal medium 18px/40px Pretendard;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  cursor: pointer;
`;

export const SubmitButton = styled(Button)`
  width: 240px;
  height: 72px;
  background: #555555 0% 0% no-repeat padding-box;
  border-radius: 5px;
  opacity: 1;
  border: none;
`;
