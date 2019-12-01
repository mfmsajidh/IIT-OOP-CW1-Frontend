import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Schedule from "../component/Schedule";
import Chart from "../component/Chart";
import Deposits from "../component/Deposits";
import Orders from "../component/Orders";
import Box from "@material-ui/core/Box";
import Copyright from "../component/Copyright";
import {useStyles} from "../style/MainContentStyle";
import clsx from "clsx";
import VehicleTable from "../component/VehicleTable";

export default function () {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
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

                    {/* Chart */}
                    <Grid item xs={12} md={8} lg={9}>
                        <Paper className={fixedHeightPaper}>
                            <Chart />
                        </Paper>
                    </Grid>
                    {/* Recent Deposits */}
                    <Grid item xs={12} md={4} lg={3}>
                        <Paper className={fixedHeightPaper}>
                            <Deposits />
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