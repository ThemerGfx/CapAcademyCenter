import React, {Component} from 'react';
import {withStyles} from '@material-ui/core';

const styles = theme => ({
    root  : {
        '& .user': {
            '& .username, & .email': {
                transition: theme.transitions.create('opacity', {
                    duration: theme.transitions.duration.shortest,
                    easing  : theme.transitions.easing.easeInOut
                })
            }
        }
    }
});

class UserNavbarHeader extends Component {
    state = {
        userMenu: null
    };

    userMenuClick = event => {
        this.setState({userMenu: event.currentTarget});
    };

    userMenuClose = () => {
        this.setState({userMenu: null});
    };

    handleSignOut = () => {
        this.props.logoutUser()
    }

    render()
    {
        
    return (
        <div></div>
        // <AppBar 
        //     position="static"
        //     color="primary"
        //     elevation={0}
        //     className="user relative flex flex-col items-center justify-center pt-24 pb-64 mb-32 z-0"
        // >
        //     Nom ou Logo
        // </AppBar>
    )}
}


export default withStyles(styles, {withTheme: true})(UserNavbarHeader);
