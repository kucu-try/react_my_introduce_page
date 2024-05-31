import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import p1 from './img/today1.png';
import p2 from './img/a1.png';
import p3 from './img/a2.jpg';
import p4 from './img/a3.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/mousewheel';

// import required modules
import { Pagination, Navigation, Autoplay, Mousewheel } from 'swiper/modules';
import Title from "./Introduce/Title";

const style = {
    color:'rgb(0,139,218)',
    position: 'absolute',
    left: '15%',
    top: '20%',
    fontSize: '3.3rem',
    fontFamily: 'jejuhallasan'
}

const asideColor = {
    position: 'absolute',
    right: '0',
    backgroundColor: 'rgba(145,155,193,1)',
    width: '22%',
    height: '100%'
}

const textStyle = {
    position: 'absolute',
    left: '15%',
    top: '35%',
    width: '30%'
}

const News = () => {
    return (
        <>
            <style jsx>{`
                .container {
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                    height: 100vh;
                    width: 100%;
                }

                .swiper-container {
                    width: 50%; /* Adjust width as needed */
                    height: auto;
                    position: absolute;
                    right: 0;
                }

                .slide {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .slide-img {
                    border: solid 1px black;
                    box-shadow: 0 8px 24px;
                    width: auto;
                    height: 400px;
                    object-fit: cover;
                }
                .swiper-button-prev{
                    display:none;
                }
                .swiper-button-next{
                    display:none;
                }
                li {
                  margin-bottom: 10px; /* 간격을 조정할 값 */
                }
            `}</style>
            <Title />
            <h1 style={style}>오늘은</h1>
            <div style={textStyle}>
                
            <h3>기획 및 의도</h3>
              <ul>
                  <li>오늘의 해외 뉴스 정보, 날씨 등을 종합적으로 볼 수 있는 앱</li>
                  <li>
                      최근 해외 이슈들이 국내 시장에 끼치는 영향이 지속적으로 증가함에 따라,
                      애플리케이션을 통해 해외의 주요 이슈들을 손쉽게 확인할 수 있도록 제작
                  </li>
                  <li>카테고리 별 인기 기사를 제공하여 특정 분야의 이슈를 확인할 수 있음</li>
                  <li>
                      전체 기사 중 가장 이슈가 높은 기사를 요약하여 제공하여, 
                      전체 이슈를 한 눈에 확인할 수 있음
                  </li>
                  <p>Link: <a href="http://www.gurotimes.shop">www.gurotimes.shop</a></p>
              </ul>
                
            </div>
            <div style={asideColor} />
            <div className="container">
                <Swiper
                    className="swiper-container"
                    modules={[Navigation, Pagination, Autoplay, Mousewheel]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    mousewheel={{ forceToAxis: true }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide className="slide">
                        <img src={p1} alt='' className="slide-img"/>
                    </SwiperSlide>

                    <SwiperSlide className="slide">
                        <img src={p2} alt='' className="slide-img"/>
                    </SwiperSlide>

                    <SwiperSlide className="slide">
                        <img src={p3} alt='' className="slide-img"/>
                    </SwiperSlide>

                    <SwiperSlide className="slide">
                        <img src={p4} alt='' className="slide-img"/>
                    </SwiperSlide>

                </Swiper>
            </div>
        </>
    );
}

export default News;
