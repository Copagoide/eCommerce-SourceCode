import React, { useState, useEffect, useRef } from "react";
import { Grid, Typography, Box, useMediaQuery } from "@material-ui/core";

import { slide } from "./data";
import useStyles from "./styles";

const Carousel = () => {
    const breakpoint = useMediaQuery(theme => theme.breakpoints.up('sm'));
    const [currImg, setCurrImg] = useState(0);
    const slideshow = useRef(null);
    const interval = useRef(null);
    const image = useRef(null);
    const text = useRef(null);
    const classes = useStyles();
    let idx = 0;

    const next = () => {
        image.current.style.opacity = '0';
        image.current.style.transition = 'opacity 1s ease'
        text.current.style.opacity = '0';
        text.current.style.transition = 'opacity 1s ease'

        setTimeout(() => {
            if (image.current && text.current) {
                image.current.style.opacity = '100%';
                image.current.style.transition = 'opacity 1s ease'
                text.current.style.opacity = '100%';
                text.current.style.transition = 'opacity 1s ease'

                if (idx === slide.length - 1) {
                    setCurrImg(0)
                    idx = 0;
                }
                else
                    setCurrImg(++idx)
                    
                if (idx === 3)
                    text.current.style.color = "#FAFAFA";
                else
                    text.current.style.color = "#000000DE";
            }
        }, 1050)
    }

    useEffect(() => {
        interval.current = setInterval(() => {
            next();
        }, 3000);

        slideshow.current.addEventListener('mouseenter', () => {
            clearInterval(interval.current);
        });

        slideshow.current.addEventListener('mouseleave', () => {
            interval.current = setInterval(() => {
                next();
            }, 3000);
        });

        return () => { clearInterval(interval.current); }
    }, [])
    
    return (
        <div className={classes.position}>
            <Grid item xs={12} lg={8} xl={6} className={classes.borderDecoration}>
                <Grid container ref={slideshow} direction={ breakpoint ? 'row' : 'column-reverse'} style={{ background: slide[currImg].background }}>
                    <Grid item xs={12} sm={6} className={classes.imageOuter}>
                        <Box width='calc(100vw - 48px)' className={classes.imageMiddle}>
                            <img ref={image} className={classes.imageInner} src={slide[currImg].image} alt="shoe.jpg" />
                        </Box>
                    </Grid>
                    <Grid item ref={text} xs={12} sm={6} className={classes.textContainer}>
                        <Box width='calc(100vw - 48px)'>
                            <Typography variant='h5' style={{ textAlign: 'center', fontFamily: 'Poiret One', paddingBottom: '5px' }} className={classes.text}>{slide[currImg].title}</Typography>
                            <Typography variant='h6' style={{ textAlign: 'center', fontFamily: 'Lobster' }}>{slide[currImg].subtitle}</Typography>
                            <Typography variant='h6' style={{ textAlign: 'center', fontFamily: 'Lobster'  }}>{slide[currImg].subtitle2}</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default Carousel;