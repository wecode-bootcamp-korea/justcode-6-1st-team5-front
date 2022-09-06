import React from 'react';
import { MapMarker, MarkerClusterer } from 'react-kakao-maps-sdk';

const Markers = ({ locations }) => {
  return (
    <>
      <MarkerClusterer
        averageCenter={true} // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
        minLevel={10} // 클러스터 할 최소 지도 레벨
        // styles={{
        //   backgroundImage: "url('/image/circle.png')",
        //   backgroundColor: '#ffffff',
        //   borderRadius: '25px',
        //   color: '#000',
        // }}
      >
        {locations.map(location => {
          const { id, name, latlng } = location;
          const { lat, lng } = latlng;
          return (
            <MapMarker
              key={id}
              position={{ lat: lat, lng: lng }}
              title={name}
            />
          );
        })}
      </MarkerClusterer>
    </>
  );
};

export default Markers;
