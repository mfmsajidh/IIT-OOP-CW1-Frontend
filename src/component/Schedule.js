import React, {useState} from "react";
import 'date-fns';
import {ScheduleView} from "../view/ScheduleView";
import axios from "axios";
import {VehicleTable} from "./VehicleTable";

export default function Schedule() {

    const [fromDate, setFromDate] = useState(new Date());
    const [toDate, setToDate] = useState(new Date());
    const [searchedForVehicles, setSearchedForVehicles] = useState(false);

    const handleFromDateChange = (fromDate) => {
        setFromDate(fromDate)
    };

    const handleToDateChange = (toDate) => {
        setToDate(toDate)
    };

    const handleSearchForVehicles = () => {
        axios.get("http://localhost:8080/vehicles")
            .then(response => {
                    console.log(response.data);
                    setSearchedForVehicles(true);
            })
    };

    const handleResetSearch = () => {
        setSearchedForVehicles(false);
    }

    return (
            searchedForVehicles ?
                <VehicleTable
                    handleResetSearch={handleResetSearch}
                />
                :
                <ScheduleView
                    fromDate={fromDate}
                    toDate={toDate}
                    handleToDateChange={handleToDateChange}
                    handleFromDateChange={handleFromDateChange}
                    handleSearchForVehicles={handleSearchForVehicles}
                />
    )
}