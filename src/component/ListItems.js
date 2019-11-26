import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AssignmentIcon from '@material-ui/icons/Assignment';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';
import { Link as RouterLink } from 'react-router-dom';

function ListItemLink(props) {
    const { icon, primary, to } = props;

    const renderLink = React.useMemo(
        () =>
            React.forwardRef((itemProps, ref) => (
                // With react-router-dom@^6.0.0 use `ref` instead of `innerRef`
                // See https://github.com/ReactTraining/react-router/issues/6056
                <RouterLink to={to} {...itemProps} innerRef={ref} />
            )),
        [to],
    );

    return (
        <li>
            <ListItem button component={renderLink}>
                {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
                <ListItemText primary={primary} />
            </ListItem>
        </li>
    );
}

ListItemLink.propTypes = {
    icon: PropTypes.element,
    primary: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
};


export const mainListItems = (
    <>
        {/*<ListItem button>*/}
        {/*    <ListItemIcon>*/}
        {/*        <DashboardIcon />*/}
        {/*    </ListItemIcon>*/}
        {/*    <ListItemText primary="Dashboard" />*/}
        {/*</ListItem>*/}
        <ListItemLink to="/home" primary={"Dashboard"} icon={<DashboardIcon/>}/>
        <ListItem button>
            <ListItemIcon>
                <EmojiTransportationIcon />
            </ListItemIcon>
            <ListItemText primary="All Vehicles" />
        </ListItem>
    </>
);


export const secondaryListItems = (
    <div>
        <ListSubheader inset>Saved reports</ListSubheader>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Current month" />
        </ListItem>
    </div>
);