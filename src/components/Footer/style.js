import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
    footer: {
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '100%',
        padding:'.25rem 0',
        backgroundColor: theme.palette.primary.main,
        color: 'white',
        textAlign: 'center',
    },
    anchor:{
        color:'white',
        textDecoration:'none',
        opacity:0.7,
        transition:'1s all forward',
        '&:hover':{
            opacity:1
        }
    }
}))

export default useStyle