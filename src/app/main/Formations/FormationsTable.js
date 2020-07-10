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
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import {FuseAnimate} from '@fuse';
// import CircularProgress from '@material-ui/core/CircularProgress';
import FormationsTableHead from './FormationsTableHead';

import { getAllFormations, getAllFormationsSuccess, removeFormation, selectFormation } from '../../store/actions/FormationActions/FormationActions'


class FormationsTable extends Component {
        
    state = {
        statusSwitchEl : null,
        chatsMoreMenuEl: null,
        searchText     : '',
        id: '',
        name: '',
        dateDebt: '',
        dateFin: '',
        prix: '',
        formateur: '',
        type: '',
        allFormations: '',
        loader: true
    };

    componentDidMount()
    {
        setTimeout(() => {
            this.props.getAllFormations();
            this.setState({loader: false})
        }, 1800)

        this.setState({allFormations: this.props.allFormations})
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.allFormations !== prevProps.allFormations) {
            this.setState({
                allFormations: this.props.allFormations
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
        // const formateursFetched = this.props.allFormateurs
        // console.log('mel base-formateurs: ', formateursFetched)


        // if (this.state.loader) {
        //     return (    
        //         <div className="w-full flex flex-col">
        //             <CircularProgress />
        //         </div>
        //     )
        // } else {
        return (
                <div className="w-full flex flex-col" delay={1000}>
                    <FuseAnimate animation="transition.slideUpBigIn" delay={300}>
                        <Table className="min-w-xl" aria-labelledby="tableTitle">
                            <FuseAnimate animation="transition.slideUpBigIn" delay={300}>
                                <FormationsTableHead/>
                            </FuseAnimate>
                            <FuseAnimate animation="transition.whirlIn" delay={400} className="flex-grow overflow-x-auto">
                                <TableBody>
                                     { 
                                        this.props.allFormations.map((formation, index) => {
                                            return ( 
                                            <TableRow className="h-64" hover>

                                                <TableCell component="td" scope="row" align="left">
                                                    {formation.id}
                                                </TableCell>

                                                <TableCell component="td" scope="row" align="left">
                                                    {formation.name}
                                                </TableCell>

                                                <TableCell component="td" scope="row" align="left">
                                                    {formation.dateDebt}
                                                </TableCell>

                                                <TableCell component="td" scope="row" align="left">
                                                    {formation.dateFin}
                                                </TableCell>

                                                <TableCell component="td" scope="row" align="left">
                                                    {formation.prix}
                                                </TableCell>

                                                <TableCell component="td" scope="row" align="left">
                                                    {formation.formateur}
                                                </TableCell>

                                                <TableCell component="td" scope="row" align="left">
                                                    {formation.type}
                                                </TableCell>

                                                <TableCell>
                                                    <Fab 
                                                        color="blue"
                                                        variant="contained"
                                                        className="text-blue color-blue"
                                                        onClick = { () => { 
                                                            this.props.selectFormation(formation) }} 
                                                        component={Link} to={'/ajout-contenu/' + formation.id + '/' + formation.name }
                                                    >      
                                                        <Icon 
                                                            aria-label="add"
                                                        >
                                                            add
                                                        </Icon>
                                                    </Fab>
                                                </TableCell>

                                                <TableCell>
                                                    <Fab 
                                                        color="blue"
                                                        variant="contained"
                                                        // className="text-blue color-blue"
                                                        onClick = { () => { this.props.selectFormation(formation) } } 
                                                        // className="text-blue color-blue"
                                                        component={Link} to={'/ajout-formation/' + formation.id }
                                                    >      
                                                        <Icon 
                                                            aria-label="edit"
                                                        >
                                                            edit
                                                        </Icon>
                                                    </Fab>
                                                </TableCell>

                                                <TableCell>
                                                    <Fab 
                                                        color="blue"
                                                        variant="contained"
                                                        className="text-green color-green"
                                                        onClick = { () => { 
                                                            this.props.selectFormation(formation) }} 
                                                        component={Link} to={'/ajout-seance/' + formation.id + '/' + formation.formateur }
                                                    >      
                                                        <Icon 
                                                            aria-label="add"
                                                        >
                                                            add
                                                        </Icon>
                                                    </Fab>
                                                </TableCell>

                                                <TableCell>
                                                    <Fab 
                                                        color="primary"
                                                        variant="contained"
                                                        onClick = { () => { 
                                                            this.props.removeFormation(formation.id) }} 
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
    console.log(state)
    return {        
        allFormations: state.formationReducer.allFormations,

    }
}

export default connect(mapStateToProps, { getAllFormations, getAllFormationsSuccess, removeFormation, selectFormation })(FormationsTable)
