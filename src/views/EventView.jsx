import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import {CalendarToday} from '@material-ui/icons/';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { deleteEvent } from '../actions/event-actions';
import {connect} from 'react-redux'
class EventView extends React.Component{

    constructor(props){
        super(props);
        this.event=props.event;
    }

    handleDelete=(e)=>{
        this.props.dispatch(deleteEvent(this.event.id))
    }
    render(){
        let chips;
        if(this.props.open){
            chips=<span style={{color:'green'}}>Open</span>
        }else{
            chips=<span style={{color:'gray'}}>Close</span>
        }
        return(
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <CalendarToday />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary={this.event.title}
                    secondary={chips}
                />
                <ListItemSecondaryAction>
                    <IconButton aria-label="Delete" onClick={this.handleDelete.bind(this)}>
                        <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        )
    }
}

export default connect()(EventView);