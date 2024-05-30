import human from '../human.jpg'

function TitlePicture(){
    const style1 = {
        width : '21%',
        height : '43%',
        position : 'absolute',
        left : '27%',
        top: '8%'
        
    }

    const style2 = {
        width : '70%',
        height : 'auto',
        
    }


    return(
        <div style={style1}>
            <img style={style2} src={human} alt=''/>
        </div>
    )
}

export default TitlePicture;