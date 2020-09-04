import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    Table, 
    TableBody, 
    TableCell, 
    TableRow,
    Fab, 
    Icon,
    TablePagination
} from '@material-ui/core';
import {FuseAnimate} from '@fuse';
import SeancesTableHead from './SeancesTableHead';

import { getAllSeances, getAllSeancesSuccess, removeSeance } from '../../store/actions/SeanceActions/SeanceActions'


class SeancesTable extends Component {
        
    state = {
        statusSwitchEl : null,
        chatsMoreMenuEl: null,
        searchText     : '',
        id: '',
        admin: '',
        idformateur: '',
        idformation: '',
        nameFormateur: '',
        nameFormation: '',
        urlSeance: '',
        dateSeance: '',
        allSeances: '',
        page       : 0,
        rowsPerPage: 10
    };

    componentDidMount()
    {
        setTimeout(() => {
            this.props.getAllSeances();
            this.setState({loader: false})
        }, 1800)

        this.setState({allSeances: this.props.allSeances})
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.allSeances !== prevProps.allSeances) {
            this.setState({
                allSeances: this.props.allSeances
            })
        }
    }

    chatsMoreMenuClose = (event) => {
        this.setState({chatsMoreMenuEl: null});
    };

    chatsMoreMenuClick = (event) => {
        this.setState({chatsMoreMenuEl: event.currentTarget});
    };

    handleChangePage = (event, page) => {
        this.setState({page});
    };

    handleChangeRowsPerPage = event => {
        this.setState({rowsPerPage: event.target.value});
    };


    render()
    {
        const seancesFetched = this.props.allSeances.filter(
            (seanceToFilter) => {
                return seanceToFilter.nameFormation.indexOf(this.props.text) !== -1
            }
        )
        return (
                <div className="w-full flex flex-col" delay={1000}>
                    <FuseAnimate animation="transition.slideUpBigIn" delay={300}>
                        <Table className="min-w-xl" aria-labelledby="tableTitle">
                            <FuseAnimate animation="transition.slideUpBigIn" delay={300}>
                                <SeancesTableHead/>
                            </FuseAnimate>
                            <FuseAnimate animation="transition.whirlIn" delay={400} className="flex-grow overflow-x-auto">
                                <TableBody>
                                    { 
                                        seancesFetched.map((seance, index) => {
                                            return (
                                            <TableRow className="h-64" hover key={index}>

                                                <TableCell component="td" scope="row" align="left">
                                                    {seance.nameFormation}
                                                </TableCell>

                                                <TableCell component="td" scope="row" align="left">
                                                    {seance.nameFormateur}
                                                </TableCell>

                                                <TableCell component="td" scope="row" align="left">
                                                    {seance.dateSeance}
                                                </TableCell>

                                                <TableCell>
                                                    <a href={"https://meet.jit.si/" + seance.urlSeance}>
                                                        Accéder
                                                    </a>
                                                </TableCell>

                                                <TableCell>
                                                    <Fab 
                                                        color="primary"
                                                        variant="contained"
                                                        // onClick = { () => { 
                                                        //     this.props.removeFormateur(formateur.id) }} 
                                                    >      
                                                        <Icon 
                                                            aria-label="delete"
                                                        >
                                                            delete
                                                        </Icon>
                                                    </Fab>
                                                </TableCell>

                                            </TableRow>
                                            );
                                        })
                                    } 
                                </TableBody>
                            </FuseAnimate>
                        </Table>
                    </FuseAnimate>
                    
                    <TablePagination
                        component="div"
                        count={this.props.allSeances.length}
                        rowsPerPage={this.state.rowsPerPage}
                        page={this.state.page}
                        backIconButtonProps={{
                            'aria-label': 'Previous Page'
                        }}
                        nextIconButtonProps={{
                            'aria-label': 'Next Page'
                        }}
                        onChangePage={this.handleChangePage}
                        onChangeRowsPerPage={this.handleChangeRowsPerPage}
                    />

                </div>
            );
        }
}

const mapStateToProps = (state) => {
    return {        
        allSeances: state.seanceReducer.allSeances,
        text: state.searchReducer.text
    }
}

export default connect(mapStateToProps, { getAllSeances, getAllSeancesSuccess, removeSeance })(SeancesTable)