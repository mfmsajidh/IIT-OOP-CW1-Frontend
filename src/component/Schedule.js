import React, {useState} from "react";
import 'date-fns';
import {ScheduleView} from "../view/ScheduleView";
import axios from "axios";

const searchVehicles = () => {
    console.log('SEARCHED',);
    axios.get("http://localhost:8080/vehicles").then(response => console.log(response.data))
};

export default function Schedule() {

    const [fromDate, setFromDate] = useState(new Date());
    const [toDate, setToDate] = useState(new Date());

    const handleFromDateChange = (fromDate) => {
        setFromDate(fromDate)
    };

    const handleToDateChange = (toDate) => {
        setToDate(toDate)
    };

    return (
        <ScheduleView
            fromDate={fromDate}
            toDate={toDate}
            handleToDateChange={handleToDateChange}
            handleFromDateChange={handleFromDateChange}
            searchVehicles={searchVehicles}
        />
    )
}