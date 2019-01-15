import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import CalenderTodayIcon from '@material-ui/icons/CalendarToday';
import ScheduleIcon from '@material-ui/icons/Schedule';
import AddAlarmIcon from '@material-ui/icons/AddAlarm';

import { withRouter } from 'react-router-dom';
const styles = {
    root: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
        background:'#f50057',
    },
};

class Footer extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
    }
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    handleNav(e) {
        switch (e.target.name) {
            case 'new-event-nav':
                this.props.history.push('/new-event');
                break;
                case 'events-nav':
                this.props.history.push('/');
                break;
                case 'timeline-nav':
                this.props.history.push('/timeline');
                break;
            default:
                return;
        }
    }

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <BottomNavigation
                value={value}
                onChange={this.handleChange}
                showLabels
                className={classes.root}
            >
                <BottomNavigationAction onClick={this.handleNav.bind(this)} name="timeline-nav" label="Timeline" icon={<ScheduleIcon />} />
                <BottomNavigationAction onClick={this.handleNav.bind(this)} name="events-nav" label="Events" icon={<CalenderTodayIcon />} />
                <BottomNavigationAction onClick={this.handleNav.bind(this)} name="new-event-nav" label="New" icon={<AddAlarmIcon />} />
            </BottomNavigation>
        );
    }
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Footer));