import React, {useState} from 'react';
import MaterialTable from 'material-table';
import Title from "./Title";
import Grid from "@material-ui/core/Grid";
import {VEHICLE_TYPE} from "../constant/VehicleTypeConstant";

export const VehicleTable = (props) => {
    const [vehicleDetails] = useState({
        commonDetails: [
            {title: 'Number Plate', field: 'numberPlate', type: 'numeric', filtering: false},
            {title: 'Model', field: 'model'}
        ],
        motorbikeDetails: [
            {
                title: 'Bike Type',
                field: 'bikeType',
                lookup: {
                    R: 'Racing',
                    S: 'Scooter',
                    T: 'Trailer'
                }
            },
            {
                title: 'Is Helmet Provided',
                field: 'helmetProvided',
                lookup: {
                    Y: 'Yes',
                    N: 'No'
                },
            }
        ],
        carDetails: [
            {
                title: 'Number of Doors',
                field: 'numberOfDoors',
                type: 'numeric',
                lookup: {
                    2: "Two Door",
                    4: "Four Door",
                    6: "Six Door"
                }
            },
            {
                title: 'Is A/C Available',
                field: 'airConditioning',
                lookup: {
                    Y: 'Yes',
                    N: 'No'
                }
            }
        ]
    });

    return (
        <Grid item xs={12}>
            <MaterialTable
                title={
                    <Title>
                        All Available { props.searchVehicleType === VEHICLE_TYPE.CAR ? <span>Cars</span> : <span>Motorbikes</span> }
                    </Title>
                }
                columns={props.searchVehicleType === VEHICLE_TYPE.CAR ?
                    vehicleDetails.commonDetails.concat(vehicleDetails.carDetails)
                    :
                    vehicleDetails.commonDetails.concat(vehicleDetails.motorbikeDetails)
                }
                data={props.vehicleDetails}
                actions={[
                    {
                        icon: 'refresh',
                        tooltip: 'Search Again',
                        isFreeAction: true,
                        onClick: props.handleResetSearch
                    },
                    {
                        icon: 'commute',
                        tooltip: 'Book Vehicle',
                        onClick: (event, rowData) => props.handleBooking(rowData._id)
                    }
                ]}
                detailPanel={rowData => {
                    if (rowData.type === VEHICLE_TYPE.CAR) {
                        return (
                            <iframe
                                title="Rolce Royce"
                                width="100%"
                                height="315"
                                src="https://www.youtube.com/embed/o896yqbHUxc"
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        )
                    } else {
                        return (
                            <iframe
                                title="Harley Davidson"
                                width="100%"
                                height="315"
                                src="https://www.youtube.com/embed/OGOsyM_Kifk"
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        )
                    }

                }}
                onRowClick={(event, rowData, togglePanel) => togglePanel()}
                options={{
                    filtering: true
                }}
            />
        </Grid>
    );
}