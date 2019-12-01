import React, {useState, useRef, useEffect} from "react";
import Title from "../component/Title";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {useStyles} from "../style/ScheduleStyle";
import Paper from "@material-ui/core/Paper";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";

// export const ScheduleView = (fromDate, toDate, handleFromDateChange, handleToDateChange) => {
export const ScheduleView = (props) => {
    const classes = useStyles();

    const inputLabel = useRef(null);
    const [labelWidth, setLabelWidth] = useState(0);
    useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

    return (
        <>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <Title>Find deals on vehicle rentals, with cars and much more...</Title>
                    <Grid container justify="space-evenly">
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                autoOk
                                disableToolbar
                                variant="inline"
                                inputVariant="outlined"
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
                                variant="inline"
                                inputVariant="outlined"
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
                        </MuiPickersUtilsProvider>
                        <FormControl variant="outlined" className={classes.formControl} required>
                            <InputLabel ref={inputLabel}>
                                Vehicle Type
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={props.searchVehicleType}
                                onChange={props.handleSearchVehicleType}
                                labelWidth={labelWidth}
                            >
                                <MenuItem value="">
                                    <em>Select A Vehicle Type</em>
                                </MenuItem>
                                <MenuItem value={"Car"}>Car</MenuItem>
                                <MenuItem value={"Motorbike"}>Motorbike</MenuItem>
                            </Select>
                        </FormControl>
                        <Button variant="contained" color="primary" className={classes.button} onClick={props.handleSearchForVehicles}>
                            Search vehicles
                        </Button>
                        {
                            props.errorMessage!=null ?
                                <Typography variant="button" display="block" gutterBottom color={"secondary"}>
                                    {props.errorMessage}
                                </Typography> : null
                        }
                    </Grid>
                </Paper>
            </Grid>
        </>
    )
};