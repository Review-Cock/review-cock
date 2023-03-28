import styled from 'styled-components';

export const JoinFormBox = styled.form`
  width: 35%;
  margin: 40px 0px;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 15px;
  color: #404040;
  margin: 10px 0px;
`;

export const JoinInput = styled.input`
  padding: 15px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #cccccc;
  border-radius: 5px;

  &:focus {
    outline-color: #e76969;
  }

  &::placeholder {
    color: #cccccc;
  }

  &:last-child {
    border: none;
    background-color: #e76969;
    color: #ffffff;
    cursor: pointer;
  }
`;

export const ErrorBox = styled.div`
  color: #f58e8e;
  font-size: 0.5rem;
  margin: 0.25rem;
  padding-left: 0.25rem;
`;
