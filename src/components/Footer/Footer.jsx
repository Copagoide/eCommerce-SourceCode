import React from "react";
import { Typography } from "@material-ui/core";

import useStyles from "./styles";

//This component is the footer of the website.
const Footer = () => {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <Typography className={classes.typographyTop}>
                Created with
            </Typography>
            <div>
                <svg 
                    width="15"
                    fill="#fff"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path>
                </svg>
            </div>
            <Typography className={classes.typographyBottom}>
                by Gustavo Copaga
            </Typography>
        </footer>
    );
};

export default Footer;