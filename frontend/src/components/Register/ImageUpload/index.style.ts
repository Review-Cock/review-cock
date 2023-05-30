import styled from 'styled-components';

export const FileInput = styled.input`
  display: none;
`;

export const ImageBox = styled.div`
  width: 482px;
  height: 250px;
  background: #fef3f3 0% 0% no-repeat padding-box;
  border: 1px solid #cccccc;
  border-radius: 5px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: right;
  font: normal normal normal 16px/24px Pretendard;
  letter-spacing: 0px;
  color: #555555;
  opacity: 1;

  & > p {
    :first-child {
      margin-bottom: 20px;
    }
    span {
      color: #e76969;
      cursor: pointer;
    }
  }
`;

export const PreImageBox = styled.div`
  height: 90%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  overflow: auto;
  & img {
    height: 200px;
    margin: 0 10px 10px 30px;
  }
  & button {
    position: relative;
    top: -100px;
  }
`;
