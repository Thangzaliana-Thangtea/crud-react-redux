import React from 'react';
import List from '@material-ui/core/List'
import { connect } from 'react-redux';
import EventView from './EventView';
import PropTypes from 'prop-types';
import { Paper } from '@material-ui/core';
import { FETCH_EVENT } from '../actions/action-constant';
import EventSearchView from './EventSearchView';

class EventListView extends React.Component {

    componentDidMount() {
        // this.props.fetchEvent()
    }
    render() {

        return (
            <Paper>
                <br />
                <EventSearchView />
                <List>
                    {this.props.events.map(item => 
                        <EventView key={item.id} event={item} open={new Date(item.end)<Date.now()}/>
                    )
                    }

                </List>
            </Paper>
        )
    }
}


const mapStateToProps = (state) => ({
    events: state
})


const mapDispatchToProps = dispatch => ({
    fetchEvent: () => dispatch({ type: FETCH_EVENT, payload: null })
})
EventListView.propTypes = {
    events: PropTypes.array.isRequired
}
export default connect(mapStateToProps, mapDispatchToProps)(EventListView);