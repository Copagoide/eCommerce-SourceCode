import React from "react";
import { TextField, Grid } from "@material-ui/core";
import { useFormContext, Controller } from "react-hook-form";

//This component represents a customized input form for the country, state/province
//and extra charges that will be part of the main Form.
const FormInput = ({ name, label }) => {
    const { control } = useFormContext();

    return (
        <Grid item xs={12} sm={6}>
            <Controller 
                defaultValue=""
                render={
                    ({ field }) => <TextField {...field} label={label} fullWidth required /> 
                }
                control={control}
                name={name}
            />
        </Grid>
    );
};

export default FormInput;