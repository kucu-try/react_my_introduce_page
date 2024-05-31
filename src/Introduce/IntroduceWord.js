function IntroduceWord({ fontColor }) {
    const style2 = {
        width: '45%',
        height: '30%',
        position: 'absolute',
        left: '51%',
        top: '21%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    };

    const titleStyle = {
        fontSize: '1.1875rem',
        fontWeight: '700',
        color: fontColor ? 'orange' : 'dimgray',
        marginBottom: '1rem' // 제목과 내용 간의 간격을 설정
    };

    const contentStyle = {
        fontSize: '1.0625rem',
        fontWeight: '400',
        color: fontColor ? 'white' : 'grey',
        margin: 0,
        lineHeight: '1.5' 
    };


    return (
        <div style={style2} className="introduce-container">
            <h2 style={titleStyle} className="introduce-title">INTRODUCE MYSELF</h2>
            <h3 style={contentStyle} className="introduce-content">
                안녕하세요, 저는 Java와 Python을 포함한 여러 언어에 익숙한 풀스택 웹 개발자입니다.<br />
                AI-X 부트캠프와 자바 기반 웹개발 과정을 통해 프론트엔드와 백엔드 기술을 습득했습니다.<br />
                다양한 프로젝트 경험으로 문제 해결 능력과 협업 능력을 갖추고 있으며,<br />
                항상 새로운 기술을 배우며 성장하고 있습니다.<br />
            </h3>
            <style>
                {`
                .introduce-container {
                    width: 45%;
                    height: 30%;
                    position: absolute;
                    left: 51%;
                    top: 21%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }

                .introduce-title {
                    font-size: 1.1875rem;
                    font-weight: 700;
                    color: ${fontColor ? 'orange' : 'dimgray'};
                    margin-bottom: 1rem;
                }

                .introduce-content {
                    font-size: 1.0625rem;
                    font-weight: 300;
                    color: ${fontColor ? '#cc99ff' : 'black'};
                    margin: 0;
                }

                @media (max-width: 768px) {
                    .introduce-container {
                        width: 80%;
                        left: 10%;
                        top: 10%;
                    }

                    .introduce-title {
                        font-size: 1rem;
                    }

                    .introduce-content {
                        font-size: 0.875rem;
                    }
                }
                `}
            </style>
        </div>
    );
}

export default IntroduceWord;
