import React, { useRef, useState } from 'react';

import { FileInput, ImageBox } from '@components/Register/ImageUpload/index.style';

interface ImageUploadProps {
  setImage: (data: any) => void;
  type: string;
}

const ImageUpload = ({ type, setImage }: ImageUploadProps) => {
  const [isEmpty, setIsEmpty] = useState(true);
  const [Base64s, setBase64s] = useState<{ image: File; url: any }[]>([]);

  const fileInputType = type === 'multiple' ? true : false;

  const fileRef = useRef(null);

  const handleOpenFinder = () => {
    fileRef.current.click();
  };

  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.currentTarget.files;
    // 최대 등록갯수 제한
    if (type === 'single' && Base64s.length > 0) return;
    if (type === 'multiple' && Base64s.length > 3) return;

    if (files.length > 4) {
      window.alert('사진은 최대 4장까지 등록가능합니다.');
      return;
    }
    if (files.length === 0) {
      setIsEmpty(true);
      return;
    }
    setIsEmpty(false);
    // files가 바뀔때 files Array를 돌면서 base64로 인코딩 후 Base64s에 저장
    Array.from(files).forEach((image) => {
      encodeFileToBase64(image).then((data) => {
        setBase64s((preV) => [...preV, { image: image, url: data }]);
        setImage((preV: any) => [...preV, data]);
      });
    });
  };

  // base64로 인코딩
  const encodeFileToBase64 = (image: File) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = (event: any) => resolve(event.target.result);
      reader.onerror = (error) => reject(error);
    });
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
          {Base64s.map((v, i) => (
            <div key={i}>{v.image.name}</div>
          ))}
          <p>
            <span onClick={handleOpenFinder}>여기</span>를 클릭하여 등록하세요.
          </p>
        </ImageBox>
      )}
    </div>
  );
};

export default ImageUpload;
