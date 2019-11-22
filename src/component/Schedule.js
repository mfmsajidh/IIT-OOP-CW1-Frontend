import React, {useState} from "react";
import Title from "./Title";
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import 'date-fns';
import {MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers';
import Fab from "@material-ui/core/Fab";
import SearchIcon from '@material-ui/icons/Search';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
        padding: '0px 100px'
    },
    input: {
        display: 'none',
    },
}));

export default function Schedule() {
    const classes = useStyles();
    const [fromDate, setFromDate] = useState(new Date());
    const [toDate, setToDate] = useState(new Date());

    const handleFromDateChange = (fromDate) => {
        setFromDate(fromDate)
    };

    const handleToDateChange = (toDate) => {
        setToDate(toDate)
    };

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
                        value={fromDate}
                        onChange={handleFromDateChange}
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
                        value={toDate}
                        onChange={handleToDateChange}
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