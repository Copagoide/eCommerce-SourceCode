import React from "react";
import {AppBar, Toolbar, IconButton, Badge, Typography } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";

import useStyles from "./styles";

//This component represents the navigation bar for the entire website.
const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    const location = useLocation();

    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography component={Link} to="/" variant="h4" className={classes.title}>
                        Copaga
                    </Typography>
                    <div className={classes.grow} />
                    {location.pathname === "/" && (
                        <div id='cartButton' className={classes.button}>
                            <IconButton style={{color: '#fff'}} component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                                <Badge badgeContent={totalItems} color="secondary">
                                    <ShoppingCart />
                                </Badge>
                            </IconButton>
                        </div>
                    )}                    
                </Toolbar>    
            </AppBar>
        </>
    )
};

export default Navbar;