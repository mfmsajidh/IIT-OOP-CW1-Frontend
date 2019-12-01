import React, {useState} from "react";
import 'date-fns';
import {ScheduleView} from "../view/ScheduleView";
import axios from "axios";
import {VehicleTable} from "./VehicleTable";
import {GET_CARS, GET_MOTORBIKES, IP_ADDRESS, PORT_NUMBER, VEHICLE} from "../constant/HttpRequest";

export default function Schedule() {

    const [fromDate, setFromDate] = useState(new Date());
    const [toDate, setToDate] = useState(new Date());
    const [searchVehicleType, setSearchVehicleType] = useState("");
    const [searchedForVehicles, setSearchedForVehicles] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [vehicleDetails, setVehicleDetails] = useState();

    const handleFromDateChange = (fromDate) => {
        setFromDate(fromDate)
    };

    const handleToDateChange = (toDate) => {
        setToDate(toDate)
    };

    const handleSearchVehicleType = event => {
        setSearchVehicleType(event.target.value);
        if (event.target.value !== "") {
            setErrorMessage(null);
        } else {
            setErrorMessage("Please select the vehicle type");
        }
    };

    const handleSearchForVehicles = () => {
        searchVehicleType !== "" ?
            (
                searchVehicleType === "Car" ? (
                    axios.get(IP_ADDRESS + PORT_NUMBER + VEHICLE + GET_CARS)
                        .then(response => {
                            console.log(response.data);
                            setVehicleDetails(response.data);
                            setSearchedForVehicles(true);
                        })
                        .catch(error => {
                            setErrorMessage(error.toString())
                        })
                ) : (
                    axios.get(IP_ADDRESS + PORT_NUMBER + VEHICLE + GET_MOTORBIKES)
                        .then(response => {
                            console.log(response.data);
                            setVehicleDetails(response.data);
                            setSearchedForVehicles(true);
                        })
                        .catch(error => {
                            setErrorMessage(error.toString())
                        })
                )
            ) : setErrorMessage("Please select the vehicle type");
    };

    const handleResetSearch = () => {
        setSearchedForVehicles(false);
        setVehicleDetails(null);
        setErrorMessage(null);
        setSearchVehicleType("");
    };

    return (
        searchedForVehicles ?
            <VehicleTable
                searchVehicleType={searchVehicleType}
                vehicleDetails={vehicleDetails}
                handleResetSearch={handleResetSearch}
            />
            :
            <ScheduleView
                fromDate={fromDate}
                toDate={toDate}
                searchVehicleType={searchVehicleType}
                errorMessage={errorMessage}
                handleToDateChange={handleToDateChange}
                handleFromDateChange={handleFromDateChange}
                handleSearchVehicleType={handleSearchVehicleType}
                handleSearchForVehicles={handleSearchForVehicles}
            />
    )
}