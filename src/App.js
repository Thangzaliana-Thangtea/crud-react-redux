import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TopPanel from './components/TopPanel';
import EventListView from './views/EventListView';
import Footer from './components/Footer';
import EventForm from './views/EventForm';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import EventTimelineView from './views/EventTimelineView';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class App extends Component {

  constructor(props) {
    super(props)
    const { classes } = props;
  }
  render() {
    return (
      <Router>

      {/* <div className={classes.root}> */}
        <Grid container  justify="center">
          <Grid item xs>
            <TopPanel/>
            <br/>
            <Route exact path="/" component={EventListView}/>
            <Route path="/new-event" component={EventForm}/>
            <Route path="/timeline" component={EventTimelineView}/>
             <Footer/>
          </Grid>

        </Grid>
        
     {/* </div> */}
      </Router>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
