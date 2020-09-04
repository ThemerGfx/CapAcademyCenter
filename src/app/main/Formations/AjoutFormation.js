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

import { createFormation, updateFormaion } from '../../store/actions/FormationActions/FormationActions'

import { getAllFormateurs } from '../../store/actions/FormateurActions/FormateurActions'

const types = [
    {
        name: 'Aucune sélection'
    },
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
        this.props.getAllFormateurs()
        this.updateFormationState();
    }

    componentDidUpdate(prevProps, prevState, snapshot)
    {

        const params = this.props.match.params;
        const {formationId} = params;

        if ( formationId === 'edit')
        { const {formationItem} = this.props
        this.setState({
            id: formationItem.id,
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
                id: formationItem.id,
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
            history.push('/table-formations')
    }
    
    handleUpdateFormation = () =>{
        this.props.updateFormaion(this.state)
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
                                    this.props.match.params.formationId === 'add' ? (
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
                                        required
                                    />
                                    </FuseAnimate>
                                    <FuseAnimate animation="transition.bounceUpIn" delay={800}>
                                    <TextField  
                                        value={this.state.dateDebt}
                                        id="dateDebt"
                                        onChange={this.handleChange}
                                        variant="outlined"
                                        margin="normal" 
                                        type="date"
                                        className="mt-8 mb-16"   
                                        name="dateDebt"
                                        fullWidth
                                        required
                                    />
                                </FuseAnimate>
                                <FuseAnimate animation="transition.bounceUpIn" delay={600}>
                                    <TextField
                                        className="mt-8 mb-16"
                                        id="dateFin"
                                        name="dateFin"
                                        onChange={this.handleChange}
                                        type="date"
                                        value={this.state.dateFin}
                                        variant="outlined"
                                        fullWidth
                                        required
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
                                        required
                                    />
                                </FuseAnimate>
                                <FuseAnimate animation="transition.bounceUpIn" delay={400}>
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
                                        <option  selected='true'>
                                            Email Formateur
                                        </option>
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
                                </FuseAnimate>
                                <FuseAnimate animation="transition.bounceUpIn" delay={400}>
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
                                    >
                                        <option  selected='true'>
                                            Type Formation
                                        </option>
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
    return {
        allFormateurs: state.formateurReducer.allFormateurs,
        formationItem: state.formationReducer.formationItem
    }
  }

export default connect(mapStateToProps, { createFormation, updateFormaion, getAllFormateurs })(AjoutFormation);
