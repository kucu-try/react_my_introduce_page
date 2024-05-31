import React, { useState } from "react";
import Title from "./Introduce/Title";
import TitlePicture from "./Introduce/TitlePicture";
import IntroduceWord from "./Introduce/IntroduceWord";
import FooterOne from "./Introduce/FooterOne";
import FooterTwo from "./Introduce/FooterTwo";
import FooterThree from "./Introduce/FooterThree";
import FooterFour from "./Introduce/FooterFour";
import "./index.css";

const Page = () => {
    const [black, setBlack] = useState(false);
    const [fontColor, setFontColor] = useState(false);

    const style3 = {
        width: '100%',
        height: '40%',
        position: 'absolute',
        left: '0',
        bottom: '1%',
        display: 'flex'
    }

    const blackScreen = () => {
        setBlack(!black);
        setFontColor(!fontColor);
    }

    const style1 = {
        margin: 0,
        padding: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: black ? `rgb(25, 25, 26)` : 'white',
        position: 'relative',
        overflow: 'hidden'
    }

    const style2 = {
        position: 'absolute',
        width: '120px',
        height: '28px',
        top: '8%',
        right: '15%',
        fontSize: '0.9375rem',
        fontWeight: '600',
        backgroundColor: 'white'
    }

    return (
        <>
            <div style={style1}>
                {black && (
                    <div className="background-container">
                        <div className="star-container"><div className="star"></div></div>
                        <div className="star-container"><div className="star"></div></div>
                        <div className="star-container"><div className="star"></div></div>
                        <div className="star-container"><div className="star"></div></div>
                        <div className="star-container"><div className="star"></div></div>
                        <div className="star-container"><div className="star"></div></div>
                        <div className="star-container"><div className="star"></div></div>
                        {/* Add more stars as needed */}
                    </div>
                )}
                <button style={style2} onClick={blackScreen}>DARK MODE</button>
                <Title fontColor={fontColor} />
                <TitlePicture />
                <IntroduceWord fontColor={fontColor} />
                <footer style={style3}>
                    <FooterOne fontColor={fontColor} />
                    <FooterTwo fontColor={fontColor} />
                    <FooterThree fontColor={fontColor} />
                    <FooterFour fontColor={fontColor} />
                </footer>
            </div>
            <style jsx>{`
                body, html {
                    margin: 0;
                    width: 100vw;
                    height: 100vh;
                }

                .background-container {
                    position: absolute;
                    width: 100vw;
                    height: 100vh;
                    top: 0;
                    left: 0;
                }

                .star-container {
                    position: absolute;
                    width: 100px; /* Adjust the hoverable area size as needed */
                    height: 100px; /* Adjust the hoverable area size as needed */
                }

                .star {
                    position: absolute;
                    width: 2px;
                    height: 2px;
                    background: white;
                    border-radius: 50%;
                    box-shadow: 0 0 6px 3px white;
                    animation: twinkle 1.2s infinite alternate;
                }

                .star-container:hover .star {
                    transform: scale(4.5);
                    background: white;
                    box-shadow: 0 0 12px 6px rgb(255, 255, 204);
                }

                .star-container:nth-child(1) { top: 20%; left: 11%; animation-delay: 0s; }
                .star-container:nth-child(2) { top: 28%; left: 14%; animation-delay: 0.5s; }

                .star-container:nth-child(3) { top: 35%; left: 17%; animation-delay: 1s; }
                .star-container:nth-child(4) { top: 20%; left: 8%; animation-delay: 1.5s; }
                .star-container:nth-child(5) { top: 40%; left: 20%; animation-delay: 2s; }
                .star-container:nth-child(6) { top: 30%; left: 9%; animation-delay: 2s; }
                .star-container:nth-child(7) { top: 50%; left: 20%; animation-delay: 2s; }

                @keyframes twinkle {
                    0% { opacity: 1; }
                    100% { opacity: 0.2; }
                }
            `}</style>
        </>
    )
}

export default Page;
