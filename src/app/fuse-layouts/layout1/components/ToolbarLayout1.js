import React, {Component} from 'react'
import {AppBar, Hidden, MuiThemeProvider, Toolbar, withStyles} from '@material-ui/core';
import connect from 'react-redux/es/connect/connect';
import {withRouter} from 'react-router-dom';

import UserMenu from 'app/fuse-layouts/shared-components/UserMenu';

const styles = theme => ({
    separator: {
        width          : 1,
        height         : 64,
        backgroundColor: theme.palette.divider
    }
});

class ToolbarLayout1  extends Component{


    state = {
        open: false,
      }
    
    
      handleToggle = () => {
        this.setState(state => ({ open: !state.open }));
      }
    
      handleClose = event => {
        if (this.anchorEl.contains(event.target)) {
          return;
        }
    
        this.setState({ open: false });
      }
    
      render(){
        const {toolbarTheme} = this.props
        
        return (
            <MuiThemeProvider theme={toolbarTheme}>
                <AppBar id="fuse-toolbar" className="flex relative z-10" color="default">
                    <Toolbar className="p-0">
                    <div className="flex flex-1">
                            <Hidden mdDown>
                    <div>
                          </div>
                              </Hidden>
                          </div>
                             <UserMenu/>    
                         </Toolbar>
                         </AppBar>
            </MuiThemeProvider>
        );
    }
};


function mapStateToProps({fuse})
{
    return {
        settings    : fuse.settings.current,
        toolbarTheme: fuse.settings.toolbarTheme
    }
}

export default withStyles(styles, {withTheme: true})(withRouter(connect(mapStateToProps)(ToolbarLayout1)));
