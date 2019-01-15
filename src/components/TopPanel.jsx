import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CodeIcon from '@material-ui/icons/Code'

class TopPanel extends React.Component {

    render() {
        return (
            <AppBar position="static">
                <Toolbar>
                    <IconButton color="inherit" aria-label="Menu">
                        <CodeIcon/>
                    </IconButton>
                    <Typography variant="h6" color="inherit" >
                        REDUX REACT CRUD without U :)
                </Typography>
                <IconButton color="inherit" aria-label="Menu">
                        <CodeIcon/>
                    </IconButton>
                </Toolbar>
            </AppBar>
        )
    }
}

export default TopPanel