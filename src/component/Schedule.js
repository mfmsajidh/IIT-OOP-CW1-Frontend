import React, {useState} from "react";
import {format} from 'date-fns';
import {ScheduleView} from "../view/ScheduleView";
import axios from "axios";
import {VehicleTable} from "./VehicleTable";
import {
    GET_CARS,
    GET_MOTORBIKES,
    IP_ADDRESS,
    PORT_NUMBER,
    SCHEDULE_VEHICLE,
    SEARCH_VEHICLES,
    VEHICLE
} from "../constant/HttpRequest";
import {CUSTOMER} from "../constant/CUSTOMER";

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
                axios.get(IP_ADDRESS + PORT_NUMBER + SEARCH_VEHICLES,{
                    params: {
                        'fromDate': format(fromDate, 'dd/MM/yyyy'),
                        'toDate': format(toDate, 'dd/MM/yyyy'),
                        'vehicleType': searchVehicleType
                    }
                })
                    .then(response => {
                        console.log(response.data);
                        setVehicleDetails(response.data);
                        setSearchedForVehicles(true);
                    })
                    .catch(error => {
                        setErrorMessage(error.toString())
                    })
            ) : setErrorMessage("Please select the vehicle type");
    };

    const handleResetSearch = () => {
        setSearchedForVehicles(false);
        setVehicleDetails(null);
        setErrorMessage(null);
        setSearchVehicleType("");
    };

    const handleBooking = (id) => {
        axios.post(IP_ADDRESS + PORT_NUMBER + SCHEDULE_VEHICLE,{
            'pickUpDate': fromDate,
            'dropOffDate': toDate,
            'customer_id': CUSTOMER._id,
            'vehicle_id': id
        }
        ).then(response => {
            console.log('POST', response);
        }).catch(error => {
            console.log('POST ERROR', error.response);
        })
    };

    return (
        searchedForVehicles ?
            <VehicleTable
                searchVehicleType={searchVehicleType}
                vehicleDetails={vehicleDetails}
                fromDate={fromDate}
                toDate={toDate}
                handleResetSearch={handleResetSearch}
                handleBooking={handleBooking}
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