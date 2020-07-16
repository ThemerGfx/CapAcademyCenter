import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    Table, 
    TableBody, 
    TableCell, 
    TableRow,
    Fab, 
    Icon
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
        loader: true
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

    render()
    {
        const { chatsMoreMenuEl } = this.state;
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
                                        this.props.allSeances.map((seance, index) => {
                                            return (
                                            <TableRow className="h-64" hover key={index}>

                                                <TableCell component="td" scope="row" align="left">
                                                    {seance.admin}
                                                </TableCell>

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
                                                    <a href={"http://localhost:8080/file/" + seance.id}  >
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
                </div>
            );
        }
}

const mapStateToProps = (state) => {
    return {        
        allSeances: state.seanceReducer.allSeances

    }
}

export default connect(mapStateToProps, { getAllSeances, getAllSeancesSuccess, removeSeance })(SeancesTable)