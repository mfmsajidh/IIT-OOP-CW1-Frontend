import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Schedule from "../component/Schedule";
import Orders from "../component/Orders";
import Box from "@material-ui/core/Box";
import Copyright from "../component/Copyright";
import {useStyles} from "../style/MainContentStyle";
import clsx from "clsx";

export default function () {
    const classes = useStyles();
    return (
        <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
                <Grid container spacing={3}>

                    {/* Search for vehicles */}
                    <Schedule />

                    {/* Recent Orders */}
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <Orders />
                        </Paper>
                    </Grid>
                </Grid>
                <Box pt={4}>
                    <Copyright />
                </Box>
            </Container>
        </main>
    )
}