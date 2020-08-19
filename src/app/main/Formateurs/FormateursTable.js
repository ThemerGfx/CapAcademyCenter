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
import FormateursTableHead from './FormateursTableHead';

import { getAllFormateurs, getAllFormateursSuccess, removeFormateur, getCv } from '../../store/actions/FormateurActions/FormateurActions'


class FormateursTable extends Component {
        
    state = {
        statusSwitchEl : null,
        chatsMoreMenuEl: null,
        searchText     : '',
        id: '',
        prenom: '',
        nom: '',
        email: '',
        cin: '',
        numTel: '',
        role: '',
        speciality: '',
        idAdmin: '',
        dateDajout: '',
        allFormateurs: '',
        page       : 0,
        rowsPerPage: 10
    };

    componentDidMount()
    {
        setTimeout(() => {
            this.props.getAllFormateurs();
            this.setState({loader: false})
        }, 1800)

        this.setState({allFormateurs: this.props.allFormateurs})
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.allFormateurs !== prevProps.allFormateurs) {
            this.setState({
                allFormateurs: this.props.allFormateurs
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
        const { chatsMoreMenuEl } = this.state;
        const formateursFetched = this.props.allFormateurs.filter(
            (formateurToFilter) => {
                return formateurToFilter.prenom.toLowerCase().indexOf(this.props.text.toLowerCase()) !== -1
            }
        )
        return (
                <div className="w-full flex flex-col" delay={1000}>
                    <FuseAnimate animation="transition.slideUpBigIn" delay={300}>
                        <Table className="min-w-xl" aria-labelledby="tableTitle">
                            <FuseAnimate animation="transition.slideUpBigIn" delay={300}>
                                <FormateursTableHead/>
                            </FuseAnimate>
                            <FuseAnimate animation="transition.whirlIn" delay={400} className="flex-grow overflow-x-auto">
                                <TableBody>
                                    { 
                                        formateursFetched.map((formateur, index) => {
                                            return (
                                            <TableRow className="h-64" hover key={index}>

                                                <TableCell component="td" scope="row" align="left">
                                                    {formateur.nom}
                                                </TableCell>

                                                <TableCell component="td" scope="row" align="left">
                                                    {formateur.prenom}
                                                </TableCell>

                                                <TableCell component="td" scope="row" align="left">
                                                    {formateur.phone}
                                                </TableCell>

                                                <TableCell component="td" scope="row" align="left">
                                                    {formateur.specialite}
                                                </TableCell>

                                                <TableCell>
                                                    <Fab 
                                                        color="primary"
                                                        variant="contained"
                                                        onClick = { () => { 
                                                            this.props.removeFormateur(formateur.id) }} 
                                                    >      
                                                        <Icon 
                                                            aria-label="delete"
                                                        >
                                                            delete
                                                        </Icon>
                                                    </Fab>
                                                </TableCell>

                                                <TableCell>

                                                    <a href={"http://backcapformation.com/file/" + formateur.id}  >
                                                       download
                                                    </a>
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
                        count={this.props.allFormateurs.length}
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
        allFormateurs: state.formateurReducer.allFormateurs,
        text: state.searchReducer.text
    }
}

export default connect(mapStateToProps, { getAllFormateurs, getAllFormateursSuccess, removeFormateur, getCv })(FormateursTable)