import React from 'react';
// import {Grid} from "@material-ui/core";
// import Header from "./Header";
// import Content from "./v2.coffeeCard/Content";
// import NMakeStyles from "./v3.makeStyles/NMakeStyles";

import CenteredGrid from "./v10.Grid/CenteredGrid"

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
      <CenteredGrid/>
  );
}
