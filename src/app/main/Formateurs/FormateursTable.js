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
// import CircularProgress from '@material-ui/core/CircularProgress';
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
        loader: true
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
                                <FormateursTableHead/>
                            </FuseAnimate>
                            <FuseAnimate animation="transition.whirlIn" delay={400} className="flex-grow overflow-x-auto">
                                <TableBody>
                                    { 
                                        this.props.allFormateurs.map((formateur, index) => {
                                            return (
                                            <TableRow className="h-64" hover key={index}>

                                                <TableCell component="td" scope="row" align="left">
                                                    {formateur.id}
                                                </TableCell>

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

                                                    <a href={"http://localhost:8080/file/" + formateur.id}  >
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
                </div>
            );
        }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {        
        allFormateurs: state.formateurReducer.allFormateurs

    }
}

export default connect(mapStateToProps, { getAllFormateurs, getAllFormateursSuccess, removeFormateur, getCv })(FormateursTable)