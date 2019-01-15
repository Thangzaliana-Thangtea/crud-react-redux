import React from 'react'
import { TextField } from '@material-ui/core';
import { connect } from 'react-redux';
import { SEARCH_EVENT } from '../actions/action-constant';
import PropTypes from 'prop-types';

class EventSearchView extends React.Component {

    constructor(){
        super();
        this.state={
            query:''
        }
    }
    clear=()=>{
        this.setState({
            query:''
        })
    }
    render(){
        return (
            <div style={{margin: 10}}>
                <TextField
                    fullWidth
                    label="Search here"
                    name="search"
                    variant="outlined"
                    margin="normal"
                    onKeyDown={(e) => {
                        if (e.keyCode == 13) {
                            this.props.dispatch({
                                type:SEARCH_EVENT,
                                payload:e.target.value
                            })
                        }
                        this.clear()
                    }}
                />
            </div>
        )
    }
}


export default connect(null,null)(EventSearchView)
