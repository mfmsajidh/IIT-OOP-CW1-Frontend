import React from "react";
import axios from "axios";

export default function VehicleList() {

    componentDidMount() {
        console.log('MOUNTED',);
        axios.get('http://localhost:8080/vehicles')
            .then( response => console.log(response))
    }

        return (
            <span></span>)
}