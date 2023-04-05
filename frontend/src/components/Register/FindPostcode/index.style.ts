import styled from 'styled-components';

export const AddressBox = styled.div`
  display: flex;
  flex-direction: column;
  & input {
    margin-bottom: 10px;
  }
`;

export const BusinessNumberInputShort = styled.input`
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

export const BusinessNumberInputLong = styled(BusinessNumberInputShort)`
  width: 480px;
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
