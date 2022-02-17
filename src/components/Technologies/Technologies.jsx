import React from 'react'
import { Grid, Typography } from '@material-ui/core'

import { data } from "./data";
import useStyles from "./styles";

//This component belongs to the main page and displays the programming languages/libraries,technologies
//used for this website (besically a second introduction).
function Technologies() {
    const classes = useStyles();

    return (
        <Grid className={classes.gridContainer}>
            <br />
            <Typography className={classes.typography}>This website was built using:</Typography>
            <br />
            <Grid container justifyContent="center" style={{ display: 'flex' }}>
                {data.map((item) => (
                    <Grid item key={item.id} xs={6} sm={4} md={2}>
                        <Typography className={classes.typography}>{item.title}</Typography>
                        <div className={classes.svgContainer}>
                            <img src={item.svg} alt={item.alt} />
                        </div>
                        <br />
                    </Grid>
                ))}
            </Grid>
        </Grid>
    )
}

export default Technologies
