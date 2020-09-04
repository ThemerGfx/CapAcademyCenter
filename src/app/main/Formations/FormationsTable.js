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
import {Link} from 'react-router-dom';
import {FuseAnimate} from '@fuse';
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
        page       : 0,
        rowsPerPage: 10
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

    handleChangePage = (event, page) => {
        this.setState({page});
    };

    handleChangeRowsPerPage = event => {
        this.setState({rowsPerPage: event.target.value});
    };

    render()
    {
        const formationsFetched = this.props.allFormations.filter(
            (formationToFilter) => {
                return formationToFilter.name.toLowerCase().indexOf(this.props.text.toLowerCase()) !== -1
            }
        )
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
                                        formationsFetched.map((formation, index) => {
                                            return ( 
                                            <TableRow className="h-64" hover>

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
                                                        onClick = { () => { this.props.selectFormation(formation) } } 
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

                    <TablePagination
                        component="div"
                        count={this.props.allFormations.length}
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
        allFormations: state.formationReducer.allFormations,
        text : state.searchReducer.text
    }
}

export default connect(mapStateToProps, { getAllFormations, getAllFormationsSuccess, removeFormation, selectFormation })(FormationsTable)
