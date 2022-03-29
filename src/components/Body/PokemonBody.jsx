import {
    Card,
    CardActionArea, CardContent, CardMedia,
    Typography
} from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useStyle from './style';
import colors from './colors';
const PokemonBody = ({ data }) => {
    

    const [pokeData, setPokeData] = useState([])
    useEffect(() => {
        axios.get(data.url)
            .then(res => setPokeData(res.data))
    }, [])
    const classes = useStyle();
    const firstLetterUppercase = (name) => (name[0].toUpperCase() + name.slice(1));
    return (
        <>
            
            {pokeData.types &&<Card style={{backgroundColor:colors(pokeData.types[0].type.name)}}className={classes.cardContainer}>
                <CardActionArea className={classes.cardAction}>
                    <CardMedia
                        component="img"
                        alt={pokeData.name}
                        image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokeData.id}.png`}
                        className={classes.pokemonImg}
                    />
                    <CardContent className={classes.cardCont}>
                        <Typography variant="h5" component='span' gutterBottom className={classes.para}>
                            #{pokeData.id && pokeData.id.toString().padStart(4, '0')}
                        </Typography>
                        <Typography variant="h5" >
                            {pokeData.name && firstLetterUppercase(pokeData.name)}
                        </Typography>
                        {pokeData.height &&
                            <Typography variant='h6' className={classes.heightSec}>
                                Height: {pokeData.height}
                            </Typography>
                        }
                        {pokeData.types &&
                            <Typography variant='h6' className={classes.heightSec}>
                                Type: {pokeData.types[0].type.name}
                            </Typography>
                        }
                    </CardContent>

                </CardActionArea>
            </Card>}
        </>
    )
}

export default PokemonBody