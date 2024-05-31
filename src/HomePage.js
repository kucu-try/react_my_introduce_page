import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import k1 from './k1.png';
import k2 from './k2.png';

const containerStyle = {
    width: '100%',
    height: '100vh',
    position: 'relative',
};

const headingStyle = {
    textAlign: 'center',
    fontSize: '2.8125rem',
    letterSpacing: '0.1375rem',
    position: 'absolute',
    top: '22%',
    width: '100%',
};

const linkStyle = {
    width: '20%',
    height: '27%',
    position: 'absolute',
    bottom: '0',
    left: '45%',
    transform: 'translateX(-50%)',
    textAlign: 'center',
};

const imgContainerStyle = {
    position: 'relative',
    width: '100%',
    height: '100%',
};

const imgStyle = {
    position: 'absolute',
    width: 'auto',
    height: '100%',
    transition: 'opacity 0.5s ease-in-out',
    objectFit: 'cover',
};

const HomePage = () => {
    const [hover, setHover] = useState(false);

    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>Hey, I’m Jonghwan!</h1>
            <NavLink
                to="/page"
                style={linkStyle}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <div style={imgContainerStyle}>
                    <img
                        style={{
                            ...imgStyle,
                            opacity: hover ? 0 : 1,
                        }}
                        src={k1}
                        alt="k1"
                    />
                    <img
                        style={{
                            ...imgStyle,
                            opacity: hover ? 1 : 0,
                        }}
                        src={k2}
                        alt="k2"
                    />
                </div>
            </NavLink>
        </div>
    );
};

export default HomePage;
