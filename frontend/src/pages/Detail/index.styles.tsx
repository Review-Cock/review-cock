import styled, { css } from 'styled-components';

const FontCss = css`
  text-align: left;
  font-style: normal;
  font-variant: normal;
  font-weight: medium;
`;

export const NumberText = styled.span`
  ${FontCss}
  font-size: 18px;
  line-height: 26px;
  letter-spacing: 0px;
  color: #e76969;
  opacity: 1;
`;

export const NomalText = styled.span`
  ${FontCss}
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0px;
  color: #888888;
`;

export const DisabledText = styled.span`
  ${FontCss}
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0px;
  color: #888888;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  border-bottom: 1px solid #eaeaea;
  margin: 30px;
`;
export const LeftCotainer = styled.div`
  min-width: 600px;
  max-width: 900px;
  width: 70%;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #eaeaea;
  margin-left: 30px;
  padding-right: 40px;
`;
export const RightCotainer = styled.div`
  min-width: 350px;
  max-width: 400px;
  width: 30%;
  margin-left: 40px;
  & > * {
    border-bottom: 1px solid #eaeaea;
    margin-bottom: 30px;
  }
`;

// LeftCotainer
export const TitleWrapper = styled.div`
  margin-bottom: 44px;
  & > p {
    margin-bottom: 34px;
  }
`;

export const TitleTextBox = styled.div`
  display: flex;
  justify-content: flex-start;
  & > p,
  div {
    margin-right: 40px;
  }
`;

export const TitleText = styled.span`
  ${FontCss}
  font-size: 28px;
  line-height: 38px;
  font-family: Pretendard;
  letter-spacing: 0px;
  color: #222222;
  opacity: 1;
  margin-bottom: 20px;
  display: block;
`;

export const MainImage = styled.img`
  border-radius: 20px;
  margin-bottom: 60px;
`;

export const SlideBtn = styled.button`
  ${FontCss}
  color: #888888;
  text-align: center;
  font-size: 16px;
  line-height: 26px;
  height: 72px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #cccccc;
  border-radius: 10px;
  opacity: 1;
  margin-bottom: 40px;
`;

export const CampaignTypeBox = styled.div`
  ${FontCss}
  height: 200px;
  background: #fef3f3 0% 0% no-repeat padding-box;
  border: 1px solid #e76969;
  border-radius: 10px;
  opacity: 1;
  padding: 20px;
  margin-bottom: 20px;
  & > span {
    font-weight: bold;
    font-size: 20px;
    line-height: 26px;
    margin-bottom: 20px;
    display: block;
  }
  & p {
    margin-bottom: 10px;
    color: #555555;
  }
  & > p {
    margin-bottom: 16px;
    font-size: 16px;
    line-height: 26px;
    color: #222222;
  }
`;

export const CampaignInfoBox = styled.div`
  display: flex;
  justify-content: flex-start;
  border-bottom: 1px solid #eaeaea;
  padding: 30px 0;
  & > span {
    min-width: 25%;
    ${FontCss}
    font-size: 24px;
    line-height: 26px;
    font-family: Pretendard;
    letter-spacing: 0px;
    color: #222222;
    opacity: 1;
    display: block;
  }
  & p {
    margin-bottom: 20px;
  }
  :last-child {
    border: none;
  }
`;

export const CampaignInfoBoxItem = styled.div`
  display: flex;
  flex-direction: column;
  & > div > span {
    margin-bottom: 20px;
    margin-right: 38px;
    font-size: 18px;
    line-height: 26px;
    span:first-child {
      margin-right: 15px;
    }
  }
  & > div {
    margin-bottom: 20px;
  }
`;

export const TagBox = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const TagItem = styled.div`
  ${FontCss}
  font-size: 16px;
  line-height: 26px;
  padding: 0 10px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  background: #e76969 0% 0% no-repeat padding-box;
  border-radius: 23px;
  opacity: 1;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
`;

export const TagDescriptionBox = styled.div`
  background: #f5f5f5 0% 0% no-repeat padding-box;
  padding: 20px;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  opacity: 1;
  margin-top: 10px;
  & > p {
    margin-bottom: 12px;
  }
`;

// RigthCotainer

const SubTitleCss = css`
  display: block;
  width: 30%;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: 0px;
  color: #222222;
  opacity: 1;
`;

export const RemainTime = styled.p`
  margin-top: 100px;
  margin-bottom: 18px;
  & > span {
    ${FontCss}
    font-weight: bold;
    font-size: 20px;
    line-height: 26px;
    letter-spacing: 0px;
    color: #222222;
    opacity: 1;
  }
`;

export const TimeInfoWrapper = styled.div`
  ${FontCss}
  & > div {
    display: flex;
    margin-bottom: 21px;
  }
  & > div > span {
    ${SubTitleCss}
  }
  & > div > p {
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0px;
    color: #555555;
    opacity: 1;
  }
`;

export const SubmitBox = styled.div`
  ${FontCss}
  display: flex;
  flex-direction: column;
  & > input {
    height: 41px;
    border: 3px solid #f58e8e;
    border-radius: 5px;
    outline: none;
    margin-bottom: 30px;
  }
  & > button {
    height: 64px;
    background: #f58e8e 0% 0% no-repeat padding-box;
    border-radius: 10px;
    border: none;
    opacity: 1;
    text-align: center;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: 0px;
    color: #ffffff;
    opacity: 1;
    margin-bottom: 30px;
  }
`;

export const SnsLinkText = styled.label`
  ${SubTitleCss}
`;
