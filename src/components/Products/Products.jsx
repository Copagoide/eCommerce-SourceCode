import React from 'react'
import { Grid } from '@material-ui/core'

import Home from '../Home/Home';
import Technologies from '../Technologies/Technologies';
import Carousel from '../Carousel/Carousel';
import Product from './Product/Product';
import Footer from '../Footer/Footer';
import useStyles from "./styles";

//This component contains all the products inside and also the Home, Technologies, Carousel and Footer components.
//This is the main component for the website.
const Products = ({ products, onAddToCart }) => {
    const classes = useStyles();

    return (
        <>
            <Home />
            <Technologies />
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Carousel />
                <div id='products' className={classes.toolbar} />
                <Grid style={{ height: '25px' }}></Grid>
                <Grid container justifyContent="center" spacing={4}>
                    {products.map((product) => (
                        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                            <Product product={product} onAddToCart={onAddToCart} />
                        </Grid>
                    ))}
                </Grid>
                <div className={classes.toolbar} />
            </main>
            <Footer />
        </>
    )
}

export default Products;