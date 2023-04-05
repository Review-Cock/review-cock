import React, { useState } from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';

import {
  AddressBox,
  BusinessNumberInputShort,
  BusinessNumberInputLong,
  Button,
} from '@components/Register/FindPostcode/index.style';

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

export default FindPostcode;
