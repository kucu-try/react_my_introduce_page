import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import p1 from './img/i1.png';
import p2 from './img/i2.png';
import p3 from './img/i3.png';
import p4 from './img/i4.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/mousewheel';

// import required modules
import { Pagination, Navigation, Autoplay, Mousewheel } from 'swiper/modules';
import Title from "./Introduce/Title";

const style = {
    color:'black',
    position: 'absolute',
    left: '15%',
    top: '20%',
    fontSize: '3.3rem',
    fontFamily: 'jejuhallasan'
}

const asideColor = {
    position: 'absolute',
    right: '0',
    backgroundColor: 'rgba(227,167,167,1)',
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
            <h1 style={style}>A-Iforum</h1>
            <div style={textStyle}>
                
            <h2>프로젝트 개요</h2>
              <p>I-forum"은 GPT API, DALL-E API, Huggingface 등 다양한 AI 모델을 조합하여 동화를 생성하고, 이를 유튜브에 자동으로 업로드해주는 자동화 AI 서비스입니다.</p>
              <ul>
                  <li>동화 생성: 다양한 AI 모델을 활용하여 창의적이고 재미있는 동화를 쉽게 생성</li>
                  <li>유튜브 업로드: 생성된 동화를 자동으로 유튜브에 업로드하여 동영상 콘텐츠를 손쉽게 관리할 수 있습니다.</li>
                  <li>사용자 친화적 인터페이스: 아이들이 쉽게 조작할 수 있는 인터페이스를 제공하여 창의력 개발에 도움을 줍니다.</li>
                  <li>부업 창출: 부모들은 아이들이 만든 동화를 유튜브에 업로드함으로써 부수입을 얻을 수 있습니다.</li>
                  <li>공유 경제: AI 모델을 활용한 동화 생성 및 자동화된 유튜브 업로드는 콘텐츠 공유와 경제적 가치를 창출합니다.</li>
              </ul>
              <p>Link: <a href="http://www.iforum.shop">www.iforum.shop</a></p>
                
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
