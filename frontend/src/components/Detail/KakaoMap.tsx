import React, { useEffect } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

const KakaoMap = () => {
  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };

    const map = new window.kakao.maps.Map(container, options);
  }, []);

  return <div id="map" style={{ width: '400px', height: '400px' }} />;
};

export default KakaoMap;
