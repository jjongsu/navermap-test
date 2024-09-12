import { useEffect, useRef } from 'react';

function App() {
    const mapRef = useRef(null);
    const lat = 37.3595704; // 위도 숫자로 넣어주기
    const lng = 127.105399; // 경도 숫자로 넣어주기

    useEffect(() => {
        if (mapRef.current && naver) {
            const location = new naver.maps.LatLng(lat, lng);
            const map = new naver.maps.Map(mapRef.current, {
                center: location,
                zoom: 16, // 지도 확대 정도
            });
            new naver.maps.Marker({
                position: location,
                map,
            });
        }
    }, []);

    return (
        <div className='w-full flex-col flex gap-2 items-center'>
            <div className='text-2xl p-2'>네이버 지도 test</div>
            <div ref={mapRef} className='w-[680px] h-[500px]'></div>
        </div>
    );
}

export default App;
