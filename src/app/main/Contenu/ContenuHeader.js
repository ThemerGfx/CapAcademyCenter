import React from 'react';
import {
    Button, 
    Icon, 
    Typography
} from '@material-ui/core';
import {FuseAnimate} from '@fuse';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const ContenuHeader = ({setSearchText, searchText, mainTheme, props}) => {

    return (
        <div className="flex flex-1 w-full items-center justify-between">
        </div>
    );
};

const mapStateToProps = ({fuse}) =>
{
    return {
        mainTheme : fuse.settings.mainTheme
    }
}

export default connect(mapStateToProps)(ContenuHeader);
