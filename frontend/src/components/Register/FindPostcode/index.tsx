import React, { useState } from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import styled from 'styled-components';

interface FindPostCode {
  onChangeAddress: (t: string) => void;
}

const FindPostcode = ({ onChangeAddress }: FindPostCode) => {
  const open = useDaumPostcodePopup('https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js');

  const [address, setAddress] = useState('');
  const [detailAddress, setDetailAddress] = useState('');
  const [postCode, setPostCode] = useState('');

  const onChangeDetailAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetailAddress(e.target.value);
    onChangeAddress(`${address} ${e.target.value}`);
  };

  const handleComplete = (data: any) => {
    const postCode = data.zonecode;
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    setPostCode(postCode);
    setAddress(fullAddress);
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  return (
    <AddressBox>
      <div>
        <BusinessNumberInputShort value={postCode} type="text" placeholder="우편번호" disabled />
        <Button onClick={handleClick} name="adress" id="adress">
          우편번호 찾기
        </Button>
      </div>
      <BusinessNumberInputLong value={address} type="text" placeholder="주소" disabled />
      <BusinessNumberInputLong
        value={detailAddress}
        onChange={onChangeDetailAddress}
        type="text"
        placeholder="상세주소"
      />
    </AddressBox>
  );
};

const AddressBox = styled.div`
  display: flex;
  flex-direction: column;
  & input {
    margin-bottom: 10px;
  }
`;

const BusinessNumberInputShort = styled.input`
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

const BusinessNumberInputLong = styled(BusinessNumberInputShort)`
  width: 480px;
`;

const Button = styled.button`
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
export default FindPostcode;
