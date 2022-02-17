import React from "react";
import { Typography, List, ListItem, ListItemText } from "@material-ui/core";

//This component is a summary that will be displayed to let the user know what he/she is buying and how much it costs.
const Review = ({ checkoutToken, shippingCountry }) => {
    return (
        <>
            <Typography variant="h6" gutterBottom>Order summary</Typography>
            <List disablePadding>
                {checkoutToken.live.line_items.map((product) => (
                    <ListItem style={{padding: "10px 0"}} key={product.name}>
                        <ListItemText primary={product.name} secondary={`Quantity: ${product.quantity}`} />
                        <Typography variant="body2">{product.line_total.formatted_with_symbol}</Typography>
                    </ListItem>
                ))}
                {shippingCountry !== "US" && shippingCountry !== "CA" &&
                    <ListItem style={{padding: "10px 0"}}>
                        <ListItemText primary="Shipping costs" />
                        <Typography variant="body2">$10.00</Typography>
                    </ListItem>
                }
                <ListItem style={{padding: "10px 0"}}>
                    <ListItemText primary="Total" />
                    <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
                        $
                        {(shippingCountry !== "US" && shippingCountry !== "CA")
                            ? ( parseFloat(checkoutToken.live.subtotal.formatted) + 10 )
                            : ( checkoutToken.live.subtotal.formatted )
                        }
                    </Typography>
                </ListItem>
            </List>
        </>
    );
};

export default Review;