import React, { useRef, useState } from 'react';

import { FileInput, ImageBox, PreImageBox } from '@components/Register/ImageUpload/index.style';

interface ImageUploadProps {
  setImage: React.Dispatch<React.SetStateAction<FileList>>;
  type: string;
}

const ImageUpload = ({ type, setImage }: ImageUploadProps) => {
  const [fileList, setFileList] = useState<FileList>();
  const [isEmpty, setIsEmpty] = useState(true);
  const [preImageList, setPreImageList] = useState([]);

  const fileInputType = type === 'multiple' ? true : false;
  const fileRef = useRef(null);

  const handleOpenFinder = () => {
    fileRef.current.click();
  };

  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.currentTarget.files;
    if (files.length === 0) return;
    if (!fileInputType && preImageList.length + files.length > 1) {
      alert('대표이미지는 1장만 등록가능합니다.');
      return;
    }
    if (preImageList.length + files.length > 4) {
      alert('파일은 최대 4장까지 등록가능합니다.');
      return;
    }
    let urlList: string[] = [];

    if (preImageList.length === 0) {
      setFileList(files);
      setImage(files);
      urlList = Array.from(files).map((v) => URL.createObjectURL(v));
    } else {
      const dataTransfer = new DataTransfer();

      Array.from(fileList).forEach((file) => dataTransfer.items.add(file));
      Array.from(files).forEach((file) => dataTransfer.items.add(file));

      setFileList(dataTransfer.files);
      setImage(dataTransfer.files);

      urlList = [...preImageList, Array.from(files).map((v) => URL.createObjectURL(v))];
    }

    setPreImageList(urlList);
    setIsEmpty(false);
  };

  const handleRemoveBtn = (index: number) => {
    const newPreImageList = preImageList.filter((v, i) => i !== index);
    const dataTransfer = new DataTransfer();

    Array.from(fileList)
      .filter((file, i) => i != index)
      .forEach((file) => dataTransfer.items.add(file));

    setFileList(dataTransfer.files);
    setImage(dataTransfer.files);
    setPreImageList(newPreImageList);

    if (newPreImageList.length === 0) {
      setIsEmpty(true);
    }
  };

  return (
    <div>
      <FileInput multiple={fileInputType} ref={fileRef} onChange={handleChangeFile} accept="image/*" type="file" />
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
          <PreImageBox>
            {preImageList.map((v, i) => (
              <div key={i}>
                <img src={v} />
                <button onClick={() => handleRemoveBtn(i)}>삭제</button>
              </div>
            ))}
          </PreImageBox>
          <p>
            <span onClick={handleOpenFinder}>여기</span>를 클릭하여 등록하세요.
          </p>
        </ImageBox>
      )}
    </div>
  );
};

export default ImageUpload;
