import React from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

interface KaKaoMapProps {
  campaignAddress: string;
}

const KakaoMap = ({ campaignAddress }: KaKaoMapProps) => {
  const geocoder = new window.kakao.maps.services.Geocoder();

  const drawMap = (result: any, status: string) => {
    if (status === window.kakao.maps.services.Status.OK) {
      const container = document.getElementById('map');
      // 입력받은 주소의 위도,경도를 지도의 중심으로 함
      const options = {
        center: new window.kakao.maps.LatLng(result[0].y, result[0].x),
        level: 3,
      };
      const map = new window.kakao.maps.Map(container, options);

      // 마커 생성
      new window.kakao.maps.Marker({
        map: map,
        position: new window.kakao.maps.LatLng(result[0].y, result[0].x),
      });
    }
  };

  geocoder.addressSearch(campaignAddress, drawMap);

  return <div id="map" style={{ width: '400px', height: '400px' }} />;
};

export default KakaoMap;
