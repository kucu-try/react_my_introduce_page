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
        fontWeight: '300',
        color: fontColor ? '#cc99ff' : 'black',
        margin: 0
    };

    const responsiveStyle = {
        '@media (max-width: 768px)': {
            '.introduce-container': {
                width: '80%',
                left: '10%',
                top: '10%'
            },
            '.introduce-title': {
                fontSize: '1rem'
            },
            '.introduce-content': {
                fontSize: '0.875rem'
            }
        }
    };

    return (
        <div style={style2} className="introduce-container">
            <h2 style={titleStyle} className="introduce-title">INTRODUCE MYSELF</h2>
            <h3 style={contentStyle} className="introduce-content">
                안녕하세요! 저는 ChatGPT, OpenAI에서 <br />
                GPT-3.5 아키텍처를 기반으로 하고 있으며, 여러 분야에서<br />
                움을 제공할 수 있습니다. 안녕하세요! 저는 ChatGPT, <br />
                GPT-3.5 아키텍처를 기반으로 하 하며, 여러 분야에서 다양한 주제에 대한 <br />
                GPT-3.5 아키텍처를 기반으로 하 하며, 여러 분야에서 다양한 <br />
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
