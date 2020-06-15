import React, {Component} from 'react';
import { 
    Button, 
    TextField, 
    Icon, 
    Input,
    Typography,
    Menu
} from '@material-ui/core';
import {FuseAnimate, FusePageCarded} from '@fuse';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import { format } from 'date-fns/fp';

import { createFormation, updateFormaion } from '../../store/actions/FormationActions/FormationActions'

const types = [
    {
        name: 'pro'
    },
    {
        name: 'educt'
    }
]

class AjoutFormation extends Component {

    state = {
        id: '',
        name: '',
        dateDebt: '',
        dateFin: '',
        prix: '',
        formateur: '',
        type: ''
    }; 

    handleChange = (e) => {
        this.setState({
          [e.target.id]: e.target.value
        })
    }

    componentDidMount()
    {
        this.updateFormationState();
        console.log('je trouve', this.props.formationItem)
    }

    componentDidUpdate(prevProps, prevState, snapshot)
    {

        const params = this.props.match.params;
        const {formationId} = params;

        if ( formationId === 'edit')
        { const {formationItem} = this.props
        this.setState({
            id: formationId,
            name: formationItem.name,
            formateur: formationItem.formateur,
            prix: formationItem.prix,
            dateDebt: formationItem.dateDebt,
            dateFin: formationItem.dateFin,
            type: formationItem.type
        })
        } 
    }

    updateFormationState = () => {
        const params = this.props.match.params;
        const {formationId} = params;

        if ( formationId === 'add' )
        {  
            this.setState({
                id: '',
                name: '',
                dateDebt: '',
                dateFin: '',
                prix: '',
                formateur: '',
                type: ''
           })
        } 
        else 
        {   const {formationItem} = this.props
            this.setState({
                id: formationId,
                name: formationItem.name,
                formateur: formationItem.formateur,
                prix: formationItem.prix,
                dateDebt: formationItem.dateDebt,
                dateFin: formationItem.dateFin,
                type: formationItem.type
            })
        }
    }

    handleSaveFormation = (e) => {
        e.preventDefault();
        const 
            {  
                id,
                name,
                dateDebt,
                dateFin,
                prix,
                formateur,
                type
            } = this.state
            
            this.props.createFormation(this.state)

            this.setState({
                id: '',
                name: '',
                dateDebt: '',
                dateFin: '',
                prix: '',
                formateur: '',
                type: ''
            })
    }
    
    handleUpdateFormation = () =>{
        this.props.updateFormaion(this.state)
        console.log('mrigle el edit')
        this.setState({
            id: '',
            name: '',
            dateDebt: '',
            dateFin: '',
            prix: '',
            formateur: '',
            type: ''
       })
    }

    render()
    {
        // console.log(this.props.allFormateurs)

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
                                    <Typography className="normal-case flex items-center sm:mb-12" component={Link} role="button" to="/table-formations">
                                        <Icon className="mr-4 text-20">arrow_back</Icon>
                                        Formations
                                    </Typography>
                                </FuseAnimate>

                                <div className="flex items-center max-w-full">
                                    <div className="flex flex-col min-w-0">
                                        <FuseAnimate animation="transition.slideLeftIn" delay={300}>
                                            <Typography className="text-16 sm:text-20 truncate">
                                                {this.state.name ? this.state.name : 'Nouvelle Formation'}
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
                                    onClick = { this.handleSaveFormation }
                                >
                                    Ajouter
                                </Button>
                                ) : (
                                    <Button
                                        className="whitespace-no-wrap"
                                        variant="contained"
                                        onClick = { this.handleUpdateFormation }
                                        component={Link} to={'/table-formations'}
                                    >
                                        Modifier
                                    </Button>
                                )                               
                            }
                            </FuseAnimate>
                            </div>
                        </div>
                }
                contentToolbar={
                    <div className="px-24"> 
                        <FuseAnimate animation="transition.perspectiveUpIn" delay={500}>
                            <h4> Nouveau Formateur </h4>
                        </FuseAnimate>
                    </div>
                }
                content={
                        <div className="p-16 sm:p-24 max-w-2xl">
                            <form>
                                <FuseAnimate animation="transition.bounceUpIn" delay={1000}>
                                    <TextField
                                        className="mt-8 mb-16"
                                        id="name"
                                        name="name"
                                        onChange={this.handleChange}
                                        label="Name"
                                        type="text"
                                        value={this.state.name}
                                        multiline
                                        variant="outlined"
                                        fullWidth
                                    />
                                    </FuseAnimate>
                                    <FuseAnimate animation="transition.bounceUpIn" delay={800}>
                                    <TextField  
                                        value={this.state.dateDebt}
                                        id="dateDebt"
                                        label="Date début"        
                                        onChange={this.handleChange}
                                        variant="outlined"
                                        margin="normal" 
                                        type="text"
                                        className="mt-8 mb-16"   
                                        name="dateDebt"
                                        fullWidth
                                    />
                                </FuseAnimate>
                                <FuseAnimate animation="transition.bounceUpIn" delay={600}>
                                    <TextField
                                        className="mt-8 mb-16"
                                        id="dateFin"
                                        name="dateFin"
                                        onChange={this.handleChange}
                                        label="Date fin"
                                        type="text"
                                        value={this.state.dateFin}
                                        variant="outlined"
                                        fullWidth
                                    />
                                </FuseAnimate>
                                <FuseAnimate animation="transition.bounceUpIn" delay={400}>
                                    <TextField
                                        className="mt-8 mb-16"
                                        id="prix"
                                        name="prix"
                                        onChange={this.handleChange}
                                        label="Prix"
                                        type="text"
                                        value={this.state.prix}
                                        variant="outlined"
                                        fullWidth
                                    />
                                </FuseAnimate>
                                <FuseAnimate animation="transition.bounceUpIn" delay={400}>
                                    {/* <TextField
                                        className="mt-8 mb-16"
                                        id="formateur"
                                        name="formateur"
                                        onChange={this.handleChange}
                                        label="Formateur"
                                        type="text"
                                        value={this.state.formateur}
                                        variant="outlined"
                                        fullWidth
                                    /> */}
                                            <select
                                                className="mt-15 mb-20"
                                                helperText="Formateur"
                                                id="formateur"
                                                name="formateur"
                                                select
                                                value={this.state.formateur}
                                                onChange={this.handleChange}
                                                variant="outlined"
                                            >
                                                {
                                                    this.props.allFormateurs.map((formateur, index) => {
                                                        return (
                                                        <option key={index} value={formateur.nom}>
                                                            {formateur.nom}
                                                        </option>
                                                        )
                                                    })
                                                }
                                                </select>
                                            {/* <MenuItem value="" className="mt-8 mb-16">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={"20"}>Twenty</MenuItem>
                                            <MenuItem value={"30"}>Thirty</MenuItem> */}
                                </FuseAnimate>
                                <FuseAnimate animation="transition.bounceUpIn" delay={400}>
                                    {/* <TextField
                                        className="mt-8 mb-16"
                                        id="type"
                                        name="type"
                                        onChange={this.handleChange}
                                        label="Type"
                                        type="text"
                                        value={this.state.type}
                                        variant="outlined"
                                        fullWidth
                                    /> */}
                                        <select
                                                className="mt-15 mb-20"
                                                helperText="Type"
                                                id="type"
                                                name="type"
                                                select
                                                value={this.state.type}
                                                onChange={this.handleChange}
                                                variant="outlined"
                                                fullWidth
                                                required
                                                variant="outlined"
                                            >
                                                {
                                                    types.map((option) => {
                                                        return (
                                                        <option key={option.name} value={option.name}>
                                                            {option.name}
                                                        </option>
                                                        )
                                                    })
                                                }
                                            </select>
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
    console.log(state)
    return {
        allFormateurs: state.formateurReducer.allFormateurs,
        formationItem: state.formationReducer.formationItem
    }
  }

export default connect(mapStateToProps, { createFormation, updateFormaion })(AjoutFormation);