

// #65C18C #91C483 #a5ba93

import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme)=>({
    dflex: {
        display: 'flex',
        justifyContent:'space-between',
    },
    logo:{
        cursor:'pointer'
    },
    marginNeed:{
        marginBottom:'1rem'
    }
}))

export default useStyle