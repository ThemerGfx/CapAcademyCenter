import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    Icon, 
    Table, 
    TableBody, 
    TableCell, 
    TableRow,
    Fab
} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {FuseAnimate} from '@fuse';
import AgentsTableHead from './AgentsTableHead';

import { getAllAgents, getAllAgentsSuccess, removeAgent, selectAgent } from '../../store/actions/AgentActions/AgentActions'


class AgentsTable extends Component {
        
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
        allAgents: '',
        loader: true
    };

    componentDidMount()
    {
        setTimeout(() => {
            this.props.getAllAgents();
            this.setState({loader: false})
        }, 1800)

        this.setState({allAgents: this.props.allAgents})
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.allAgents !== prevProps.allAgents) {
            this.setState({
                allAgents: this.props.allAgents
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
        const agentsFetched = this.props.allAgents
        return (
                <div className="w-full flex flex-col" delay={1000}>
                    <FuseAnimate animation="transition.slideUpBigIn" delay={300}>
                        <Table className="min-w-xl" aria-labelledby="tableTitle">
                            <FuseAnimate animation="transition.slideUpBigIn" delay={300}>
                                <AgentsTableHead/>
                            </FuseAnimate>
                            <FuseAnimate animation="transition.whirlIn" delay={400} className="flex-grow overflow-x-auto">
                                <TableBody>
                                    { 
                                        this.props.allAgents.map((agent, index) => {
                                            return (
                                            <TableRow className="h-64" hover key={index}>

                                                <TableCell component="td" scope="row" align="left">
                                                    {agent.prenom}
                                                </TableCell>

                                                <TableCell component="td" scope="row" align="left">
                                                    {agent.nom}
                                                </TableCell>

                                                <TableCell component="td" scope="row" align="left">
                                                    {agent.email}
                                                </TableCell>

                                                <TableCell component="td" scope="row" align="left">
                                                    {agent.cin}
                                                </TableCell>

                                                <TableCell component="td" scope="row" align="left">
                                                    {agent.numTel}
                                                </TableCell>

                                                <TableCell component="td" scope="row" align="left">
                                                    {agent.role}
                                                </TableCell>

                                                <TableCell component="td" scope="row" align="left">
                                                    {agent.speciality}
                                                </TableCell>

                                                <TableCell component="td" scope="row" align="left">
                                                    {agent.dateDajout}
                                                </TableCell>

                                                <TableCell>
                                                    <Fab 
                                                        color="primary"
                                                        variant="contained"
                                                        onClick = { () => { 
                                                            this.props.removeAgent(agent.id) }} 
                                                    >      
                                                        <Icon 
                                                            aria-label="delete"
                                                        >
                                                            delete
                                                        </Icon>
                                                    </Fab>
                                                </TableCell>
                                                <TableCell>
                                                    <Fab 
                                                        color="default"
                                                        variant="contained"
                                                        className="text-blue color-blue"
                                                        onClick = { () => { this.props.selectAgent(agent) } } 
                                                        className="text-blue color-blue"
                                                        component={Link} to={'/ajout-agent/' + agent.id + '/' + agent.prenom}
                                                    >      
                                                        <Icon 
                                                            aria-label="edit"
                                                        >
                                                            edit
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
        allAgents: state.agentReducer.allAgents,

    }
}


export default connect(mapStateToProps, { getAllAgents, getAllAgentsSuccess, removeAgent, selectAgent })(AgentsTable)
