import React, { useRef, useState } from 'react';
import styled from 'styled-components';

interface ImageUploadProps {
  type: string;
}

const ImageUpload = ({ type }: ImageUploadProps) => {
  const [isEmpty, setIsEmpty] = useState(true);
  const [file, setFile] = useState<FileList>();
  const [fileArray, setFileArray] = useState([]);

  const fileInputType = type === 'multiple' ? true : false;

  const fileRef = useRef(null);

  const handleOpenFinder = () => {
    fileRef.current.click();
  };

  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.currentTarget.files;
    const fileArr = Array.from(files);
    if (files.length === 0) {
      setIsEmpty(true);
      return;
    }
    setFile(files);
    setFileArray(fileArr);
    setIsEmpty(false);
  };

  return (
    <div>
      <FileInput multiple={fileInputType} ref={fileRef} onChange={handleChangeFile} type="file" />
      {isEmpty && (
        <ImageBox>
          <p>다운이미지</p>
          <p>등록할 이미지를 끌어오거나,</p>
          <p>
            <span onClick={handleOpenFinder}>여기</span>를 클릭하여 등록하세요.
          </p>
        </ImageBox>
      )}

      {!isEmpty && (
        <ImageBox>
          {fileArray.map((v, i) => (
            <div key={i}>{v.name}</div>
          ))}
          <p>
            <span onClick={handleOpenFinder}>여기</span>를 클릭하여 등록하세요.
          </p>
        </ImageBox>
      )}
    </div>
  );
};

const FileInput = styled.input`
  display: none;
`;

const ImageBox = styled.div`
  width: 482px;
  height: 167px;
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

  & > div {
    width: 100%;
    text-align: left;
    margin-left: 20px;
  }
`;
export default ImageUpload;
