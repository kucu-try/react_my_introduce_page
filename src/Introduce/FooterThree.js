import { useState } from "react";
import { Link } from "react-router-dom";
import bell from '../bell2.png';
import news from '../final.png';
import fairy from '../fairy.png';

function FooterThree({ fontColor }) {
    const style4 = {
        width: '25%',
        height: '100%',
        marginLeft: '2%'
    };

    const style5 = {
        fontSize: '22px',
        borderBottom: '1px solid gray',
        fontWeight: '900',
        paddingBottom: '2.5%',
        color: fontColor ? 'orange' : 'black'
    };

    const [hoverProject, setHoverProject] = useState(false);
    const [hoverNews, setHoverNews] = useState(false);
    const [hoverFairy, setHoverFairy] = useState(false);

    const mouseOverProject = () => setHoverProject(true);
    const mouseOutProject = () => setHoverProject(false);

    const mouseOverNews = () => setHoverNews(true);
    const mouseOutNews = () => setHoverNews(false);

    const mouseOverFairy = () => setHoverFairy(true);
    const mouseOutFairy = () => setHoverFairy(false);

    const style6 = {
        height: '3rem',
        border: fontColor ? '1px solid #cc99ff' : '1px solid black',
        borderRadius: '50%',
        transition: 'height 0.5s, border-radius 1s'
    };

    const grow = {
        height: '4rem',
        border: fontColor ? '1px solid #cc99ff' : '1px solid black',
        borderRadius: '50%',
        transition: 'height 0.3s, border-radius 1s'
    };

    const fontGrow = {
        fontWeight: '300',
        fontSize: '14px',
        color: fontColor ? '#cc99ff' : 'black',
        transition: 'color 0.3s, font-weight 0.3s'
    };

    const style7 = {
        fontWeight: '350',
        fontSize: '14px',
        color: fontColor ? '#cc99ff' : 'black',
        transition: 'color 0.3s, font-weight 0.3s'
    };

    const buttonStyle = {
        border: fontColor ? '1px solid #cc99ff' : '1px solid black',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        background: 'none',
        padding: 0,
        overflow: 'hidden',
        transition: 'border 0.3s, height 0.3s'
    };

    const imgStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    };

    return (
        <div style={style4}>
            <h2 style={style5}>ACHIEVEMENT</h2>

            <Link to="/project" style={{ textDecoration: 'none' }}>
                <div onMouseOver={mouseOverProject} onMouseOut={mouseOutProject} style={{ height: '20%', gap: '4%', display: "flex" }}>
                    <img
                        src={bell}
                        alt="Bell Icon"
                        style={hoverProject ? grow : style6}
                    />
                    <h5 style={hoverProject ? fontGrow : style7}>선생님을 위한 맞춤형 교실 관리 사이트</h5>
                </div>
            </Link>

            <Link to="/news" style={{ textDecoration: 'none' }}>
                <div onMouseOver={mouseOverNews} onMouseOut={mouseOutNews} style={{ height: '20%', gap: '4%', display: "flex" }}>
                    <img
                        src={news}
                        alt="News Icon"
                        style={hoverNews ? grow : style6}
                    />
                    <h5 style={hoverNews ? fontGrow : style7}>뉴스와 날씨 정보를 제공하는 AI 서비스</h5>
                </div>
            </Link>

            <Link to="/fairy" style={{ textDecoration: 'none' }}>
                <div onMouseOver={mouseOverFairy} onMouseOut={mouseOutFairy} style={{ height: '20%', gap: '4%', display: "flex" }}>
                    <img
                        src={fairy}
                        alt="Fairy Icon"
                        style={hoverFairy ? grow : style6}
                    />
                    <h5 style={hoverFairy ? fontGrow : style7}>동화 생성 AI 서비스</h5>
                </div>
            </Link>
        </div>
    );
}

export default FooterThree;
