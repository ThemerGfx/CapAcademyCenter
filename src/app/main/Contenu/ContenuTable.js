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
import ContenuTableHead from './ContenuTableHead';

import { getAllContenus, getAllContenusSuccess } from '../../store/actions/ContenuActions/ContenuActions'


class ContenuTable extends Component {
        
    state = {
        statusSwitchEl : null,
        chatsMoreMenuEl: null,
        searchText     : '',
        id: '',
        description: '',
        formation: '',
        allContenus: '',
        loader: true
    };

    componentDidMount()
    {
        setTimeout(() => {
            this.props.getAllContenus();
            this.setState({loader: false})
        }, 1800)

        this.setState({allContenus: this.props.allContenus})
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.allContenus !== prevProps.allContenus) {
            this.setState({
                allContenus: this.props.allContenus
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
                                <ContenuTableHead/>
                            </FuseAnimate>
                            <FuseAnimate animation="transition.whirlIn" delay={400} className="flex-grow overflow-x-auto">
                                <TableBody>
                                     { 
                                        this.props.allContenus.map((contenu, index) => {
                                            return ( 
                                            <TableRow className="h-64" hover>

                                                <TableCell component="td" scope="row" align="left">
                                                    {contenu.id}
                                                </TableCell>

                                                <TableCell component="td" scope="row" align="left">
                                                    {contenu.description}
                                                </TableCell>

                                                <TableCell component="td" scope="row" align="left">
                                                    {contenu.formation}
                                                </TableCell>

                                                <TableCell>
                                                    <a href={"http://localhost:8080/contenuDownload/" + contenu.name}  >
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
        allContenus: state.contenuReducer.allContenus,

    }
}

export default connect(mapStateToProps, { getAllContenus, getAllContenusSuccess })(ContenuTable)
