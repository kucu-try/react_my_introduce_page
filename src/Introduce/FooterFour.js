import git from '../github.png'
import git2 from '../pngwing.com.png'

function FooterFour({fontColor}){


    const style4 = {
        width : '25%',
        height : '100%',
        marginLeft : '2%',
        marginRight : '3%'
    }

    const style5 = {
        fontSize : '22px',
        borderBottom : '1px solid gray',
        fontWeight : '900',
        paddingBottom : '2.5%'
        ,color : fontColor ? 'orange' : 'black' 

    }


    const style6 = {
        height : '50%',
        width : fontColor ? '70%' : '90%',
        marginLeft : fontColor ? '12%' : '0%'
    }
    return(
        <div style={style4}>
            <h2 style={style5}>GITHUB</h2>
            <a href="https://github.com/kucu-try">
            {/* <img style={style6} src= {git}  alt="깃허브 로고"/> */}
                <img style={style6} src={fontColor ? git2 : git} alt="깃허브 로고" />
            </a>
        </div>

    )
}

export default FooterFour;