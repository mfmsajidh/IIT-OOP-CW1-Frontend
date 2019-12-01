import React from "react";
import Title from "../component/Title";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {useStyles} from "../style/ScheduleStyle";
import Paper from "@material-ui/core/Paper";

// export const ScheduleView = (fromDate, toDate, handleFromDateChange, handleToDateChange) => {
export const ScheduleView = (props) => {
    const classes = useStyles();
    return (
        <>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <Title>Find deals on vehicle rentals, with cars and much more...</Title>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container justify="space-evenly">
                            <KeyboardDatePicker
                                autoOk
                                disableToolbar
                                variant="inline"
                                format="MM/dd/yyyy"
                                margin="normal"
                                id="date-picker-inline"
                                label="Pickup Date"
                                value={props.fromDate}
                                onChange={props.handleFromDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                            <KeyboardDatePicker
                                autoOk
                                disableToolbar
                                variant={"inline"}
                                margin="normal"
                                id="date-picker-dialog"
                                label="Dropoff Date"
                                format="MM/dd/yyyy"
                                value={props.toDate}
                                onChange={props.handleToDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                            <Button variant="contained" color="primary" className={classes.button} onClick={props.handleSearchForVehicles}>
                                Search vehicles
                            </Button>
                        </Grid>
                    </MuiPickersUtilsProvider>
                </Paper>
            </Grid>
        </>
    )
}