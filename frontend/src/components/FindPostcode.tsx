import React, { useState } from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import styled from 'styled-components';

const FindPostcode = () => {
  const open = useDaumPostcodePopup('https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js');

  const [address, setAddress] = useState('');
  const [detailAddress, setDetailAddress] = useState('');

  const onChangeDetailAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetailAddress(e.target.value);
  };

  const handleComplete = (data: any) => {
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

    setAddress(fullAddress);
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  return (
    <div>
      <button type="button" onClick={handleClick}>
        주소검색
      </button>
      <AddressInput type="text" disabled value={address} />
      <AddressInput type="text" value={detailAddress} placeholder="상세주소" onChange={onChangeDetailAddress} />
    </div>
  );
};

const AddressInput = styled.input`
  width: 100%;
`;

export default FindPostcode;
