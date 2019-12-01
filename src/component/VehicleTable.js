import React from 'react';
import MaterialTable from 'material-table';
import Title from "./Title";
import Grid from "@material-ui/core/Grid";

export const VehicleTable = (props) => {
    const [state, setState] = React.useState({
        columns: [
            { title: 'Name', field: 'name' },
            { title: 'Surname', field: 'surname' },
            { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
            {
                title: 'Birth Place',
                field: 'birthCity',
                lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
            },
        ],
        data: [
            { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
            { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34},
        ],
    });

    return (
        <Grid item xs={12}>
            <MaterialTable
                title={<Title>Here are the available vehicles</Title>}S
                columns={state.columns}
                data={state.data}
                actions={[
                    {
                        icon: 'refresh  ',
                        tooltip: 'Search Again',
                        isFreeAction: true,
                        onClick: props.handleResetSearch
                    }
                ]}
            />
        </Grid>
    );
}