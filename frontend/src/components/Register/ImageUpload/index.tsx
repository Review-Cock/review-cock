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

  const changeFile = (files: FileList) => {
    // 드래그 시 파일유형 검사
    const fileForm = /(.*?)\.(jpg|jpeg|png|gif|bmp|pdf)$/;
    for (const file of Array.from(files)) {
      if (!file.name.match(fileForm)) {
        alert('이미지 파일만 업로드 가능합니다.');
        return;
      }
    }

    // 사진갯수 검사
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
    // 첫 사진 등록
    if (preImageList.length === 0) {
      setFileList(files);
      setImage(files);
      urlList = Array.from(files).map((v) => URL.createObjectURL(v));
    }
    // 사진이 이미 있을 때
    else {
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

  const handleOpenFinder = () => {
    fileRef.current.click();
  };

  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeFile(e.currentTarget.files);
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

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleOnDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    changeFile(e.dataTransfer.files);
  };

  return (
    <div onDrop={handleOnDrop} onDragOver={handleDragOver}>
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
