import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Schedule from "../component/Schedule";
import Box from "@material-ui/core/Box";
import Copyright from "../component/Copyright";
import {useStyles} from "../style/MainContentStyle";

export default function () {
    const classes = useStyles();
    return (
        <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
                <Grid container spacing={3}>

                    {/* Search for vehicles */}
                    <Schedule />
                </Grid>
                <Box pt={4}>
                    <Copyright />
                </Box>
            </Container>
        </main>
    )
}