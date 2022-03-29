import { makeStyles } from "@material-ui/styles";
;

const useStyle = makeStyles((theme) => ({
    loading: {
        margin: 'auto',
        textAlign: 'center',
    }, 
    oHidden: {
        overflow: 'hidden!important',
    },
    cardContainer: {
        paddingTop: '10px',
        fontFamily: 'Ubuntu',
        borderRadius: '15px',
        color: '#000',
        transform: 'scale(1)',
        transition: '250ms all ease',
        '&:hover': {
            transform: 'scale(1.05)',
        }
    },
    pokemonImg: {
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        borderRadius: '50%',
        width: '120px',
        height: '120px',
        margin: 'auto',
    },
    cardCont: {
        textAlign: 'center',
    },
    para: {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
    },
    // '&.MuiCardMedia-img':{
    //     maxWidth:'120',
    //     maxHeight:'120'

    // }
}))

export default useStyle