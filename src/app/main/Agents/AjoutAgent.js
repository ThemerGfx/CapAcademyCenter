  
import React, {Component} from 'react';
import { 
    Button, 
    TextField, 
    Icon, 
    Typography
} from '@material-ui/core';
import {FuseAnimate, FusePageCarded} from '@fuse';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

import history from '../../../history'

import { createAgent, updateAgent } from '../../store/actions/AgentActions/AgentActions'

var today = new Date();
var dd = today.getDate();

var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
today = dd+'-'+mm+'-'+yyyy;
class AjoutAgent extends Component {

    state = {
        id: '',
        prenom: '',
        nom: '',
        email: '',
        cin: '',
        numTel: '',
        role: '',
        speciality: '',
        idAdmin: '',
        dateDajout: today
    }; 

    handleChange = (e) => {
        this.setState({
          [e.target.id]: e.target.value
        })
    }

    componentDidMount()
    {
        this.updateAgentState();
    }

    componentDidUpdate(prevProps, prevState, snapshot)
    {

        const params = this.props.match.params;
        const {agentId} = params;

        if ( agentId === 'edit')
        { const {agentItem} = this.props
        this.setState({
            id: agentId,
            prenom: agentItem.prenom,
            nom: agentItem.nom,
            email: agentItem.email,
            cin: agentItem.cin,
            numTel: agentItem.numTel,
            role: agentItem.role,
            speciality: agentItem.speciality
        })
        } 
    }

    updateAgentState = () => {
        const params = this.props.match.params;
        const {agentId} = params;

        if ( agentId === 'add' )
        {  
            this.setState({
                id: '',
                prenom: '',
                nom: '',
                email: '',
                cin: '',
                numTel: '',
                role: '',
                speciality: '',
                idAdmin: '',
                dateDajout: today
           })
        } 
        else 
        {   const {agentItem} = this.props
            this.setState({
                id: agentId,
                prenom: agentItem.prenom,
                nom: agentItem.nom,
                email: agentItem.email,
                cin: agentItem.cin,
                numTel: agentItem.numTel,
                role: agentItem.role,
                speciality: agentItem.speciality
            })
        }
    }

    handleSaveAgent = (e) => {
        e.preventDefault();
        const 
            {  
                prenom,
                nom,
                email,
                cin,
                numTel,
                role,
                speciality,
                idAdmin,
                dateDajout 
            } = this.state
        if(prenom !== null && nom !== null && email !== null && cin !== null && numTel !== null && role !== null && speciality !== null && idAdmin !== null && dateDajout !== null) {
          this.props.createAgent(this.state)
          this.setState({
            id: '',
            prenom: '',
            nom: '',
            email: '',
            cin: '',
            numTel: '',
            role: '',
            speciality: '',
            idAdmin: '',
            dateDajout: ''
          })
          history.push('/table-agents')
        }
      }

      handleUpdateAgent = () =>{
        this.props.updateAgent(this.state)
        this.setState({
            id: '',
            prenom: '',
            nom: '',
            email: '',
            cin: '',
            numTel: '',
            role: '',
            speciality: '',
            idAdmin: '',
            dateDajout: ''
       })
    }

    
    render()
    {
        return (
            <FusePageCarded
                classes={{
                    toolbar: "p-0",
                    header : "min-h-72 h-72 sm:h-136 sm:min-h-136"
                }}
                header={
                        <div className="flex flex-1 w-full items-center justify-between">

                            <div className="flex flex-col items-start max-w-full">

                                <FuseAnimate animation="transition.slideRightIn" delay={300}>
                                    <Typography className="normal-case flex items-center sm:mb-12" component={Link} role="button" to="/table-agents">
                                        <Icon className="mr-4 text-20">arrow_back</Icon>
                                        Agents
                                    </Typography>
                                </FuseAnimate>

                                <div className="flex items-center max-w-full">
                                    <div className="flex flex-col min-w-0">
                                        <FuseAnimate animation="transition.slideLeftIn" delay={300}>
                                            <Typography className="text-16 sm:text-20 truncate">
                                                {this.state.prenom ? this.state.prenom : 'Nouvel Agent'}
                                            </Typography>
                                        </FuseAnimate>
                                    </div>
                                </div> 
                            </div>
                            <div>
                            <FuseAnimate animation="transition.slideRightIn" delay={300}>
                                {
                                    this.props.match.params.agentId === 'add' ? (
                                        <Button
                                            className="whitespace-no-wrap"
                                            variant="contained"
                                            onClick = { this.handleSaveAgent }
                                            component={Link} to={'/table-agents'}
                                        >
                                            Ajouter
                                        </Button>
                                    ) : (
                                        <Button
                                            className="whitespace-no-wrap"
                                            variant="contained"
                                            onClick = { this.handleUpdateAgent }
                                            component={Link} to={'/table-agents'}
                                        >
                                            Modifier
                                        </Button>
                                    )                               
                                }
                            </FuseAnimate>
                            </div>
                        </div>
                }
                content={
                        <div className="p-16 sm:p-24 max-w-2xl">
                            <form>
                                <FuseAnimate animation="transition.bounceUpIn" delay={1200}>
                                    <TextField  
                                        value={this.state.prenom}
                                        id="prenom"
                                        label="Prénom"        
                                        onChange={this.handleChange}
                                        variant="outlined"
                                        margin="normal" 
                                        type="text"
                                        className="mt-8 mb-16"   
                                        name="prenom"
                                        fullWidth
                                    />
                                </FuseAnimate>
                                <FuseAnimate animation="transition.bounceUpIn" delay={1000}>
                                    <TextField
                                        className="mt-8 mb-16"
                                        id="nom"
                                        name="nom"
                                        onChange={this.handleChange}
                                        label="Nom"
                                        type="text"
                                        value={this.state.nom}
                                        multiline
                                        variant="outlined"
                                        fullWidth
                                    />
                                </FuseAnimate>
                                <FuseAnimate animation="transition.bounceUpIn" delay={800}>
                                    <TextField
                                        className="mt-8 mb-16"
                                        id="email"
                                        name="email"
                                        onChange={this.handleChange}
                                        label="Email"
                                        type="text"
                                        value={this.state.email}
                                        variant="outlined"
                                        fullWidth
                                    />
                                </FuseAnimate>
                                <FuseAnimate animation="transition.bounceUpIn" delay={600}>
                                    <TextField
                                        className="mt-8 mb-16"
                                        id="cin"
                                        name="cin"
                                        onChange={this.handleChange}
                                        label="cin"
                                        type="text"
                                        value={this.state.cin}
                                        variant="outlined"
                                        fullWidth
                                    />
                                </FuseAnimate>
                                <FuseAnimate animation="transition.bounceUpIn" delay={400}>
                                    <TextField
                                        className="mt-8 mb-16"
                                        id="numTel"
                                        name="numTel"
                                        onChange={this.handleChange}
                                        label="numTel"
                                        type="text"
                                        value={this.state.numTel}
                                        variant="outlined"
                                        fullWidth
                                    />
                                </FuseAnimate>
                                <FuseAnimate animation="transition.bounceUpIn" delay={400}>
                                    <TextField
                                        className="mt-8 mb-16"
                                        id="role"
                                        name="role"
                                        onChange={this.handleChange}
                                        label="Rôle"
                                        type="text"
                                        value={this.state.role}
                                        variant="outlined"
                                        fullWidth
                                    />
                                </FuseAnimate>
                                <FuseAnimate animation="transition.bounceUpIn" delay={400}>
                                    <TextField
                                        className="mt-8 mb-16"
                                        id="speciality"
                                        name="speciality"
                                        onChange={this.handleChange}
                                        label="Specialité"
                                        type="text"
                                        value={this.state.speciality}
                                        variant="outlined"
                                        fullWidth
                                    />
                                </FuseAnimate>
                            
                            </form>
                        </div>
                }
                innerScroll
            />
        )
    };
}

const mapStateToProps = (state) => {
    return {
      agentItem: state.agentReducer.agentItem
    }
  }

export default connect(mapStateToProps, { createAgent, updateAgent })(AjoutAgent);