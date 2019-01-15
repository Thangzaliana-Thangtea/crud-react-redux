
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Button, Typography ,IconButton,Snackbar} from '@material-ui/core/';
import CloseIcon from '@material-ui/icons/Close'
import { connect } from 'react-redux';
import { addEvent } from '../actions/event-actions';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    menu: {
        width: 200,
    },
    paper: {
        padding: 20,
        margin: 20
    },
    button: {
        margin: theme.spacing.unit,
    }
});


class EventForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            description: '',
            start: Date.now,
            end: Date.now,
            openSnackbar:false
        };
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };
    handleSave(event) {
        event.preventDefault()
        this.props.dispatch(addEvent(
            this.state.title,
            this.state.description,
            this.state.start,
            this.state.end
        ));
        this.setState({
            title: '',
            description: '',
            start: "",
            end: "",
        });
        this.doToast()
    }

    doToast=()=>{
        this.setState({openSnackbar:true})
    }

    closeSnackbar = (event, reason) => {
        console.log("close snack")
        if (reason === 'clickaway') {
            return;
        }

        this.setState({ openSnackbar: false });
    };

    render() {
        const { classes } = this.props;

        return (
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <Typography variant="h5">New Event</Typography>
                    <form className={classes.container} noValidate autoComplete="off" onSubmit={this.handleSave.bind(this)}>

                        <TextField
                            id="title"
                            label="Title"
                            className={classes.textField}
                            type="text"
                            name="title"
                            value={this.state.title}
                            fullWidth
                            autoComplete="email"
                            margin="normal"
                            variant="outlined"
                            onChange={this.handleChange.bind(this)}
                        />
                        <TextField
                            id="description"
                            label="Description"
                            multiline
                            name="description"
                            rows="4"
                            value={this.state.description}
                            fullWidth
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            onChange={this.handleChange.bind(this)}
                        />
                        <TextField
                            id="start-at"
                            name="start"
                            label="Start at"
                            type="date"
                            value={this.state.start}
                            defaultValue="2017-05-24T10:30"
                            className={classes.textField}
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                            onChange={this.handleChange.bind(this)}

                        />
                        <TextField
                            name="end"
                            id="end-at"
                            label="End at"
                            type="date"
                            value={this.state.end}
                            className={classes.textField}
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                            onChange={this.handleChange.bind(this)}
                        />

                        <Button type="submit" className={classes.button}  variant="contained" color="primary">Save</Button>

                        <Button type="reset" className={classes.button} variant="contained" color="secondary">Reset</Button>

                        <Snackbar
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            open={this.state.openSnackbar}
                            autoHideDuration={3000}
                            onClose={this.handleClose}
                            ContentProps={{
                                'aria-describedby': 'message-id',
                            }}
                            message={<span id="message-id">New Event is Created</span>}
                            action={[
                                <IconButton
                                    key="close"
                                    aria-label="Close"
                                    color="inherit"
                                    onClick={this.closeSnackbar}
                                >
                                    <CloseIcon />
                                </IconButton>,
                            ]}
                        />
                    </form>
                </Paper>
            </Grid>

        );
    }
}

EventForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(null, null)(withStyles(styles)(EventForm))
