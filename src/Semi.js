import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import p1 from './img/1p2.png';
import p2 from './img/1p1.png';
import p3 from './img/1p4.png';
import p4 from './img/1p5.png';
import p5 from './img/1p3.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/mousewheel';

// import required modules
import { Pagination, Navigation, Autoplay, Mousewheel } from 'swiper/modules';
import Title from "./Introduce/Title";

const style = {
    color: 'rgb(242,229,46)',
    position: 'absolute',
    left: '15%',
    top: '20%',
    fontSize: '3.3rem',
    fontFamily: 'jejuhallasan'
}

const asideColor = {
    position: 'absolute',
    right: '0',
    backgroundColor: '#669966',
    width: '22%',
    height: '100%'
}

const textStyle = {
    position: 'absolute',
    left: '15%',
    top: '35%',
    width: '30%'
}

const Semi = () => {
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
            `}</style>
            <Title />
            <h1 style={style}>학교 종이 땡땡땡</h1>
            <div style={textStyle}>
                
                    <h3>목적</h3>
                    <ul>
                        <li> 초등학교 수업 시작 알림 종 부재로 인한 현직 교사들의 어려움 발생</li>
                        <li>아이들이 수업 시작 시간에 맞게 수업 준비를 하기 위한 웹 사이트를 기획</li>
                        <li>현직 초등학교 교사의 의뢰로 제작</li>
                    </ul>
                  
                    <h3>기획</h3>
                    <ul>
                        <li>쉬는시간 10분 동안 작동하는 타이머를 제공하고, 타이머가 0이 될 시 선택한 음악이 흘러 나옴.</li>
                        <li>수업이 시작되기 전 이미 착석한 아이들을 체크할 수 있게 함.</li>
                        <li>아이들을 칭찬할 수 있는 테이블을 만들어 테이블에 점수, 내용 등을 기입하고 조회할 수 있음.</li>
                        <li>랭킹 페이지를 통해 아이들과 같이 확인하며 칭찬과 착석의 동기부여를 줄 수 있음.</li>
                        <li>학생관리 페이지를 만들어 학생 각각 칭찬받은 내용과 결석, 조퇴 등 출결 내용을 조회하고, 생기부 작성에 도움을 줄 수 있음.</li>
                        <li>캘린더를 제공해 선생님의 스케줄을 관리할 수 있음.</li>
                    </ul>
                    <p>Link: <a href="http://www.shbells.shop">www.shbells.shop</a></p>
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
                    <SwiperSlide className="slide">
                        <img src={p5} alt='' className="slide-img"/>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}

export default Semi;
