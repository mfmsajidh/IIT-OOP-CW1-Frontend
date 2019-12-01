import React, {useState} from 'react';
import MaterialTable from 'material-table';
import Title from "./Title";
import Grid from "@material-ui/core/Grid";

export const VehicleTable = (props) => {
    const [vehicleDetails] = useState({
        commonDetails: [
            { title: 'Number Plate', field: 'numberPlate', type: 'numeric', filtering: false },
            { title: 'Type', field: 'type', filtering: false },
            { title: 'Model', field: 'model'}
        ],
        motorbikeDetails: [
            { title: 'Bike Type', field: 'bikeType'},
            {
                title: 'Is Helmet Provided',
                field: 'helmetProvided',
                lookup: {
                    Yes: 'Yes',
                    No: 'No'
                }
            }
        ],
        carDetails: [
            { title: 'Number of Doors', field: 'numberOfDoors', type: 'numeric'},
            {
                title: 'Is A/C Available',
                field: 'airConditioning',
                lookup: {
                    Yes: 'Yes',
                    No: 'No'
                }
            }
        ]
    });

    return (
        <Grid item xs={12}>
            <MaterialTable
                title={<Title>Here are the available vehicles</Title>}
                columns={ props.searchVehicleType==="Car" ?
                    vehicleDetails.commonDetails.concat(vehicleDetails.carDetails)
                    :
                    vehicleDetails.commonDetails.concat(vehicleDetails.motorbikeDetails)
                }
                data={props.vehicleDetails}
                // data={state.data}
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
                        onClick: (event, rowData) => console.log("You saved " + rowData.numberPlate)
                    }
                ]}
                detailPanel={rowData => {
                    return (
                        <div
                            style={{
                                fontSize: 100,
                                textAlign: 'center',
                                color: 'white',
                                backgroundColor: '#43A047',
                            }}
                        >
                            {rowData.numberPlate}
                        </div>
                    )
                }}
                onRowClick={(event, rowData, togglePanel) => togglePanel()}
                options={{
                    filtering: true
                }}
            />
        </Grid>
    );
}