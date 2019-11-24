import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {useStyles} from "../style/DashboardStyle";
import NavigationBar from "./NavigationBar";
import MainContentView from "../view/MainContentView";

export const Dashboard = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline />
            <NavigationBar/>
            <MainContentView/>
        </div>
    );
};