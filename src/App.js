import React from 'react';
// import {Grid} from "@material-ui/core";
// import Header from "./Header";
// import Content from "./v2.coffeeCard/Content";
// import NMakeStyles from "./v3.makeStyles/NMakeStyles";

import CenteredGrid from "./v10.Grid/CenteredGrid"
import ComplexGrid from "./v10.Grid/ComplexGrid"
import {Route, Switch} from "react-router-dom";
import Pokedex from "./v11.pokedex/Pokedex";
import Pokemon from "./v11.pokedex/Pokemon";

export default function App() {
  return (
      // <Grid container direction="column">
      //     <Grid item>
      //         <Header/>
      //     </Grid>
      //     <Grid item container>
      //         <Grid item xs={0} sm={2}/>
      //         <Grid item xs={12} sm={8}>
      //           <Content/>
      //         </Grid>
      //         <Grid item xs={0} sm={2}/>
      //     </Grid>
      //     <Grid item container>
      //         <Grid item>
      //             <NMakeStyles cool = {true}/>
      //         </Grid>
      //     </Grid>
      // </Grid>
      //
  <Switch>
    <Route exact path="/" render={(props) => <Pokedex {...props} />} />
    <Route
        extract
        path = "/poke/:pokemonId"
        render ={(props) => <Pokemon {...props} />}
    />
    <Route
        extract
        path = "/grid"
        render ={(props) => <CenteredGrid {...props} />}
    />
    <Route
        extract
        path = "/complexGrid"
        render ={(props) => <ComplexGrid {...props} />}
    />
  </Switch>
);
}
