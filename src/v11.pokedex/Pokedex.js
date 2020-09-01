import React, {useState} from "react";
import {AppBar, Card, CardMedia, CardContent, CircularProgress, Grid, Toolbar, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import mockData from "./constants";

const useStyles = makeStyles({
    pokedexContainer: {
        paddingTop: "20px",
        paddingLeft: "50px",
        paddingRight: "50px"
    },
    cardContent : {
        margin: "auto"
    },
    cardMedia: {
        margin: "auto",
        width: "130px",
        height: "130px"
    }
});

const Pokedex = (props) => {
    const { history } = props;
    const classes = useStyles();
    const [pokemonData, setPokemonData] = useState(mockData);
    const toFirstCharUpperCase = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const getPokemonCard = (pokeId) => {
        const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId + 1}.png`;
        const {id, name} = pokemonData[`${pokeId}`];
        return (
            <Grid item xs={12} sm={4}  key = {id}>
                <Card onClick={() => history.push(`/${id}`)}>
                    <CardMedia
                        className = {classes.cardMedia}
                        image = {sprite}
                    />
                    <CardContent className={classes.cardContent}>
                        <Typography> {`${id}. ${toFirstCharUpperCase(name)}`}</Typography>
                    </CardContent>
                </Card>
            </Grid>
        )
    }

    return (
        <>
            <AppBar position="static">
                <Toolbar/>
            </AppBar>
            {pokemonData ? (
                <Grid className={classes.pokedexContainer} container spacing={2}>
                    {Object.keys(pokemonData).map((id) => getPokemonCard(id))
                    }
                </Grid>
            ) : (
                <CircularProgress/>
            )}
        </>
    )
}

export default Pokedex;