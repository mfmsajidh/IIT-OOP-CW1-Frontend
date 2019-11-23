import React, {useState} from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { mainListItems, secondaryListItems } from './ListItems';
import Chart from './Chart';
import Deposits from './Deposits';
import Orders from './Orders';
import Copyright from "./Copyright";
import {ListItemText} from "@material-ui/core";
import {useStyles} from "../style/DashboardStyle";
import Schedule from "./Schedule";
import AppBarView from "../view/AppBarView";

export const Dashboard = () => {

    const classes = useStyles();

    const [open, setOpen] = useState(true);
    const [dashboardName, setDashboardName] = useState("");
    const [drawerName, setDrawerName] = useState("Booking.com");

    // useEffect(() => {
    //     console.log('Open', dashboardName);
    //     console.log('Open drawerName', drawerName);
    //     // setDashboardName("Booking.com Dashboard");
    //     console.log('das', dashboardName);
    //     console.log('das drawerName', drawerName);
    // }, []);

    const handleDrawerOpen = () => {
        setOpen(true);
        setDashboardName("");
        setDrawerName("Booking.com");
    };
    const handleDrawerClose = () => {
        setOpen(false);
        setDashboardName("Dashboard");
        setDrawerName("");
    };

    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBarView
                handleDrawerOpen={handleDrawerOpen}
                dashboardName={dashboardName}
                open = {open}
            />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>

                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <Schedule />
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
        </div>
    );
};