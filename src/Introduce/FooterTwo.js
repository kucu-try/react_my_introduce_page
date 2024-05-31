import React from 'react';

function FooterTwo({ fontColor }) {
    const baseTextColor = fontColor ? 'orange' : 'black';
    const baseFontWeight = fontColor ? '300' : '600';

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
        color: baseTextColor
    };

    const style6 = {
        color: fontColor ? 'white' : 'black',
        marginBlockStart: '0.7rem',
        marginBlockEnd: '0.7rem',
        marginLeft: '3%',
        fontWeight: baseFontWeight
    };

    return (
        <div style={style4}>
            <h2 style={style5}>EDUCATION</h2>
            <h4 style={style6}>JAVA</h4>
            <h4 style={style6}>MYSQL</h4>
            <h4 style={style6}>SPRING FRAME WORK</h4>
            <h4 style={style6}>REACT</h4>
            <h4 style={style6}>JAVASCRIPT</h4>
            <h4 style={style6}>CSS</h4>
            <h4 style={style6}>HTML</h4>
        </div>
    );
}

export default FooterTwo;
