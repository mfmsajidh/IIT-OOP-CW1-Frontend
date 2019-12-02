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
import {VEHICLE_TYPE} from "../constant/VehicleTypeConstant";
import LinearProgress from "@material-ui/core/LinearProgress";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStylesProgress = makeStyles(theme => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));


export const ScheduleView = (props) => {
    const classes = useStyles();
    const classesProgress = useStylesProgress();

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
                                format="dd/MM/yyyy"
                                margin="normal"
                                id="date-picker-inline"
                                label="Pickup Date"
                                value={props.fromDate}
                                onChange={props.handleFromDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                                minDate={new Date()}
                            />
                            <KeyboardDatePicker
                                autoOk
                                disableToolbar
                                variant="inline"
                                inputVariant="outlined"
                                margin="normal"
                                id="date-picker-dialog"
                                label="Dropoff Date"
                                format="dd/MM/yyyy"
                                value={props.toDate}
                                onChange={props.handleToDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                                minDate={new Date()}
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
                                <MenuItem value={VEHICLE_TYPE.CAR}>Car</MenuItem>
                                <MenuItem value={VEHICLE_TYPE.MOTORBIKE}>Motorbike</MenuItem>
                            </Select>
                        </FormControl>
                        <Button variant="contained" color="primary" className={classes.button} onClick={props.handleSearchForVehicles}>
                            Search vehicles
                        </Button>
                    </Grid>
                    <Grid container justify="space-evenly">
                        {
                            props.errorMessage!=null ?
                                <Typography variant="button" display="block" gutterBottom color={"secondary"}>
                                    {props.errorMessage}
                                </Typography> : null
                        }
                        {
                            props.isLoading ? (
                                <div className={classesProgress.root}>
                                    <LinearProgress />
                                </div>
                            ) : null
                        }
                    </Grid>
                </Paper>
            </Grid>
        </>
    )
};