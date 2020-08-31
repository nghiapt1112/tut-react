import React from "react";
import CoffeeCard from "./CoffeeCard";
import Grid from "@material-ui/core/Grid";
import coffeMakerList from "./constants";

const Content = () => {
    const getCofeMakeCard = (obj) => {
        return (
            <Grid item xs={12} sm={4}>
                <CoffeeCard {...obj} />
            </Grid>
        )
    };

    return (
        <Grid container spacing={2}>
            {coffeMakerList.map(obj => getCofeMakeCard(obj))}
        </Grid>
    );
};

export default Content;