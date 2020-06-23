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
import { format } from 'date-fns/fp';
import axios, { post } from 'axios';

// import { createFormation, updateFormaion } from '../../store/actions/FormationActions/FormationActions'

// import { getAllFormateurs } from '../../store/actions/FormateurActions/FormateurActions'

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

class AjoutContenu extends Component {

    state = {
        id: '',
        name: '',
        formation: ''
    }; 

    handleChange = (e) => {
        this.setState({
          [e.target.id]: e.target.value
        })
    }

    // componentDidMount()
    // {
    //     // this.props.getAllFormateurs()
    //     // this.updateFormationState();
    //     // console.log('je trouve', this.props.formationItem)
    // }

    // componentDidUpdate(prevProps, prevState, snapshot)
    // {

    //     const params = this.props.match.params;
    //     const {formationId} = params;

    //     if ( formationId === 'edit')
    //     { const {formationItem} = this.props
    //     this.setState({
    //         id: formationItem.id,
    //         name: formationItem.name,
    //         formateur: formationItem.formateur,
    //         prix: formationItem.prix,
    //         dateDebt: formationItem.dateDebt,
    //         dateFin: formationItem.dateFin,
    //         type: formationItem.type
    //     })
    //     } 
    // }

    // updateFormationState = () => {
    //     const params = this.props.match.params;
    //     const {formationId} = params;

    //     if ( formationId === 'add' )
    //     {  
    //         this.setState({
    //             id: '',
    //             name: '',
    //             dateDebt: '',
    //             dateFin: '',
    //             prix: '',
    //             formateur: '',
    //             type: ''
    //        })
    //     } 
    //     else 
    //     {   const {formationItem} = this.props
    //         this.setState({
    //             id: formationItem.id,
    //             name: formationItem.name,
    //             formateur: formationItem.formateur,
    //             prix: formationItem.prix,
    //             dateDebt: formationItem.dateDebt,
    //             dateFin: formationItem.dateFin,
    //             type: formationItem.type
    //         })
    //     }
    // }

    handleSaveFormation = (e) => {
        e.preventDefault();
        const 
            {  
                id,
                name,
                formation
            } = this.state
            
            this.props.createFormation(this.state)

            this.setState({
                id: '',
                name: '',
                formation: ''
            })
    }
    
    handleUpdateFormation = () =>{
        this.props.updateFormaion(this.state)
        console.log('mrigle el edit')
        this.setState({
            id: '',
            name: '',
            formation: ''
       })
    }

    uploadFile = (file) =>{
        let contNom = this.props.formationItem.name
        let contId = this.props.formationItem.id

        const url = 'http://localhost:8080/UploadC/' + contNom + '/' + contId
        const formData = new FormData();
        formData.append("file", file)

        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }

        return post(url, formData, config)
    }

    handleChangeUpload = (e) => {
        let filesUp = e.target.files[0];
        console.log(filesUp)
        this.setState({formation: filesUp});
    }

    render()
    {
        console.log(this.props.formationItem.name)
        console.log(this.props.formationItem.id)

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
                            {/* {
                                    this.props.match.params.contenuId === 'add' ? ( */}
                                <Button
                                    className="whitespace-no-wrap"
                                    variant="contained"
                                    onClick = {() => this.uploadFile(this.state.formation) }
                                >
                                    Ajouter
                                </Button>
                                {/* ) : ( */}
                                    {/* <Button
                                        className="whitespace-no-wrap"
                                        variant="contained"
                                        onClick = { this.handleUpdateFormation }
                                        component={Link} to={'/table-formations'}
                                    >
                                        Modifier
                                    </Button>
                                )                               
                            } */}
                            </FuseAnimate>
                            </div>
                        </div>
                }
                // contentToolbar={
                //     <div className="px-24"> 
                //         <FuseAnimate animation="transition.perspectiveUpIn" delay={500}>
                //             <h4> Nouveau Formateur </h4>
                //         </FuseAnimate>
                //     </div>
                // }
                content={
                        <div className="p-16 sm:p-24 max-w-2xl">
                            <form>
                                <Input 
                                    type="file" 
                                    onChange={this.handleChangeUpload}
                                    name="file"
                                />
                                {/* <FuseAnimate animation="transition.bounceUpIn" delay={1000}>
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
                                        value={this.state.formation}
                                        id="formation"
                                        onChange={this.handleChange}
                                        variant="outlined"
                                        label="Formation"
                                        margin="normal" 
                                        type="text"
                                        className="mt-8 mb-16"   
                                        name="formation"
                                        fullWidth
                                        required
                                    />
                                </FuseAnimate> */}
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

export default connect(mapStateToProps)(AjoutContenu);
