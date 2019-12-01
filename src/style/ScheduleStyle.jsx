import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(2),
        minWidth: 200
    },
    input: {
        display: 'none',
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    formControl: {
        margin: theme.spacing(2),
        minWidth: 200,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    }
}));