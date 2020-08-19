import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    Table, 
    TableBody, 
    TableCell, 
    TableRow,
    Button
} from '@material-ui/core';
import {FuseAnimate} from '@fuse';
import DemandesTableHead from './DemandesTableHead';

import { getAllDemandes, getAllDemandesSuccess, updateDemande } from '../../store/actions/DemandeActions/DemandeActions'


class DemandesTable extends Component {
        
    state = {
        statusSwitchEl : null,
        chatsMoreMenuEl: null,
        searchText     : '',
        id: '',
        name: '',
        etat: '',
        email: '',
        allDemandes: ''
    };

    componentDidMount()
    {
        this.props.getAllDemandes();

        this.setState({allDemandes: this.props.allDemandes})
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.allDemandes !== prevProps.allDemandes) {
            this.setState({
                allDemandes: this.props.allDemandes
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
                                <DemandesTableHead/>
                            </FuseAnimate>
                            <FuseAnimate animation="transition.whirlIn" delay={400} className="flex-grow overflow-x-auto">
                                <TableBody>
                                     { 
                                        this.props.allDemandes.map((demande, index) => {
                                            return ( 
                                            <TableRow className="h-64" hover>

                                                <TableCell component="td" scope="row" align="left">
                                                    {demande.formation}
                                                </TableCell>

                                                <TableCell component="td" scope="row" align="left">
                                                    {demande.email}
                                                </TableCell>

                                                <TableCell component="td" scope="row" align="left">
                                                    {demande.etat}
                                                </TableCell>

                                                <TableCell>
                                                    <Button
                                                        variant="contained"
                                                        onClick = { () => { this.props.updateDemande(demande) } } 
                                                    >
                                                        Valider
                                                    </Button>
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
        allDemandes: state.demandeReducer.allDemandes,

    }
}

export default connect(mapStateToProps, { getAllDemandes, getAllDemandesSuccess, updateDemande })(DemandesTable)
