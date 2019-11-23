/* eslint-disable no-script-url */
import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import OldTitle from './OldTitle';

const useStyles = makeStyles({
    depositContext: {
        flex: 1,
    },
});

export default function OldDeposits() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <OldTitle>Recent Deposits</OldTitle>
            <Typography component="p" variant="h4">
                $3,024.00
            </Typography>
            <Typography color="textSecondary" className={classes.depositContext}>
                on 15 March, 2019
            </Typography>
            <div>
                <Link color="primary" href="#">
                    View balance
                </Link>
            </div>
        </React.Fragment>
    );
}