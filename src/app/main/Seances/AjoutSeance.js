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

import { createSeance } from '../../store/actions/SeanceActions/SeanceActions'
import { getAllFormateurs,getAllFormateursSuccess } from '../../store/actions/FormateurActions/FormateurActions'
import { getAllFormations, getAllFormationsSuccess } from '../../store/actions/FormationActions/FormationActions'


class AjoutSeance extends Component {

    state = {
        id: '',
        admin: '',
        idformateur: '',
        idformation: '',
        nameFormateur: '',
        nameFormation: '',
        urlSeance: '',
        dateSeance: ''
    }; 

    componentDidMount () {
        this.props.getAllFormateurs()
        this.props.getAllFormations()
    }

    handleChange = (e) => {
        this.setState({
          [e.target.id]: e.target.value
        })
    }

    handleSaveFormateur = (e) => {
        e.preventDefault();
            
            this.props.createSeance(this.state, this.props.formationItem.id, this.props.formationItem.formateur)

            this.setState({
                id: '',
                admin: '',
                idformateur: '',
                idformation: '',
                nameFormateur: '',
                nameFormation: '',
                urlSeance: '',
                dateSeance: ''
            })
            history.push('/table-seances')
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
                                    <Typography className="normal-case flex items-center sm:mb-12" component={Link} role="button" to="/table-formateurs">
                                        <Icon className="mr-4 text-20">arrow_back</Icon>
                                        Séances
                                    </Typography>
                                </FuseAnimate>

                                <div className="flex items-center max-w-full">
                                    <div className="flex flex-col min-w-0">
                                        <FuseAnimate animation="transition.slideLeftIn" delay={300}>
                                            <Typography className="text-16 sm:text-20 truncate">
                                                {this.state.nom ? this.state.nom : 'Nouvelle Séance'}
                                            </Typography>
                                        </FuseAnimate>
                                    </div>
                                </div> 
                            </div>
                            <div>
                            <FuseAnimate animation="transition.slideRightIn" delay={300}>
                                <Button
                                    className="whitespace-no-wrap"
                                    variant="contained"
                                    onClick = { this.handleSaveFormateur }
                                >
                                    Ajouter
                                </Button>
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
                                        id="urlSeance"
                                        name="urlSeance"
                                        onChange={this.handleChange}
                                        label="Url Séance"
                                        type="text"
                                        value={this.state.urlSeance}
                                        multiline
                                        variant="outlined"
                                        fullWidth
                                    />
                                </FuseAnimate>
                                <FuseAnimate animation="transition.bounceUpIn" delay={800}>
                                    <TextField
                                        className="mt-8 mb-16"
                                        id="dateSeance"
                                        name="dateSeance"
                                        onChange={this.handleChange}
                                        type="date"
                                        value={this.state.dateSeance}
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
        allFormateurs: state.formateurReducer.allFormateurs,
        allFormations: state.formationReducer.allFormations,
        formationItem: state.formationReducer.formationItem
    }
}

export default connect(mapStateToProps, { createSeance, getAllFormateurs, getAllFormations, getAllFormateursSuccess, getAllFormationsSuccess })(AjoutSeance);