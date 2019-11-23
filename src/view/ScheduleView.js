import React from "react";
import Title from "../component/Title";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {useStyles} from "../style/ScheduleStyle";

// export const ScheduleView = (fromDate, toDate, handleFromDateChange, handleToDateChange) => {
export const ScheduleView = (props) => {
    const classes = useStyles();
    return (
        <>
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
                        label="Schedule from"
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
                        label="Schedule upto"
                        format="MM/dd/yyyy"
                        value={props.toDate}
                        onChange={props.handleToDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                    <Button variant="contained" color="primary" className={classes.button}>
                        Search vehicles
                    </Button>
                </Grid>
            </MuiPickersUtilsProvider>
        </>
    )
}