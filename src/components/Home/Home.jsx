import React from "react";
import { Typography, Button, Grid } from "@material-ui/core";

import useStyles from "./styles";

//This component is the first component in the website (welcome - introduction to the page).
const Home = () => {
    const classes = useStyles();
    
    const goToProducts = () => {
            window.scrollTo({
                top: document.getElementById('products').offsetTop,
                behavior: 'smooth'
            }
    )};

    return (
        <Grid className={ classes.background }>
            <div className={ classes.content }>
                <Typography variant="h3" style={{ letterSpacing: 1 }}>Welcome!</Typography>
                <Typography varaint="h4" style={{ letterSpacing: 1 }}>To my ecommerce project</Typography>
                <Typography varaint="h4" style={{ letterSpacing: 1 }}>Take a look at the products</Typography>
                <Button variant="outlined" className={ classes.button } onClick={goToProducts}>Browse</Button>
            </div>
        </Grid>
    );
};

export default Home;