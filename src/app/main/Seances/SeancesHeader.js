import React from 'react';
import {
    Button, 
    Icon, 
    Typography,
    MuiThemeProvider,
    Paper,
    Input
} from '@material-ui/core';
import {FuseAnimate} from '@fuse';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {searchItem} from '../../store/actions/SearchActions/SearchActions'

class SeancesHeader extends React.Component {

    constructor() {
        super();
        this.state = {
            search: ''
        };
    }

    onChange = e => {
        this.props.searchItem(e.target.value);
    };

    render() {

        let mainTheme = this.props.mainTheme
        let searchText = this.props.searchText

        return (
            <div className="flex flex-1 w-full items-center justify-between">

                <div className="flex items-center">
                    <FuseAnimate animation="transition.expandIn" delay={300}>
                        <Icon className="text-32 mr-0 sm:mr-12">shopping_basket</Icon>
                    </FuseAnimate>
                    <FuseAnimate animation="transition.slideLeftIn" delay={300}>
                        <Typography className="hidden sm:flex" variant="h6">Séances</Typography>
                    </FuseAnimate>
                </div>

                <div className="flex flex-1 items-center justify-center px-12">

                    <MuiThemeProvider theme={mainTheme}>
                        <FuseAnimate animation="transition.slideDownIn" delay={300}>
                            <Paper className="flex items-center w-full max-w-512 px-8 py-4 rounded-8" elevation={1}>

                                <Icon className="mr-8" color="action">search</Icon>

                                <Input
                                    placeholder="Search"
                                    className="flex flex-1"
                                    disableUnderline
                                    fullWidth
                                    value={searchText}
                                    inputProps={{
                                        'aria-label': 'Search'
                                    }}
                                    onChange={this.onChange}
                                />
                            </Paper>
                        </FuseAnimate>
                    </MuiThemeProvider>

                </div>
            </div>
        );
    };
}

const mapStateToProps = (state) =>
{
    return {
        text : state.searchReducer.text
    }
}

export default connect(mapStateToProps, {searchItem})(SeancesHeader);
