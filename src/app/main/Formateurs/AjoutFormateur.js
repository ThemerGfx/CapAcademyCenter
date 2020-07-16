import React, {Component} from 'react';
import { 
    Button, 
    TextField, 
    Icon, 
    Input,
    Typography
} from '@material-ui/core';
import {FuseAnimate, FusePageCarded} from '@fuse';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { post } from 'axios';

import { createFormateur } from '../../store/actions/FormateurActions/FormateurActions'

class AjoutFormateur extends Component {

    state = {
        id: '',
        nom: '',
        prenom: '',
        phone: '',
        specialite: '',
        file: null,
        disabled: false,
        files: []
    }; 

    handleChange = (e) => {
        this.setState({
          [e.target.id]: e.target.value
        })
    }

    handleSaveFormateur = (e) => {
        e.preventDefault();
        const 
            {  
                id,
                nom,
                prenom,
                phone,
                specialite
            } = this.state
        if(nom !== null && prenom !== null && phone !== null && specialite !== null) {
            
            this.props.createFormateur(this.state)
            let file = this.state.file

            setTimeout(() => {
            this.uploadFile(file)
            }, 2000)

            this.setState({
                id: '',
                nom: '',
                prenom: '',
                phone: '',
                specialite: '',
                file: null
            })
        }
    }

    uploadFile = (file) =>{
        const url = "http://localhost:8080/UploadF"

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
          this.setState({file: filesUp});
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
                                        Formateurs
                                    </Typography>
                                </FuseAnimate>

                                <div className="flex items-center max-w-full">
                                    <div className="flex flex-col min-w-0">
                                        <FuseAnimate animation="transition.slideLeftIn" delay={300}>
                                            <Typography className="text-16 sm:text-20 truncate">
                                                {this.state.nom ? this.state.nom : 'Nouveau Formateur'}
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
                                        id="nom"
                                        name="nom"
                                        onChange={this.handleChange}
                                        label="Email"
                                        type="email"
                                        value={this.state.nom}
                                        multiline
                                        variant="outlined"
                                        fullWidth
                                    />
                                    </FuseAnimate>
                                    <FuseAnimate animation="transition.bounceUpIn" delay={800}>
                                    <TextField  
                                        value={this.state.prenom}
                                        id="prenom"
                                        label="Nom et Prénom"        
                                        onChange={this.handleChange}
                                        variant="outlined"
                                        margin="normal" 
                                        type="text"
                                        className="mt-8 mb-16"   
                                        name="prenom"
                                        fullWidth
                                    />
                                </FuseAnimate>
                                <FuseAnimate animation="transition.bounceUpIn" delay={600}>
                                    <TextField
                                        className="mt-8 mb-16"
                                        id="phone"
                                        name="phone"
                                        onChange={this.handleChange}
                                        label="Phone"
                                        type="text"
                                        value={this.state.phone}
                                        variant="outlined"
                                        fullWidth
                                    />
                                </FuseAnimate>
                                <FuseAnimate animation="transition.bounceUpIn" delay={400}>
                                    <TextField
                                        className="mt-8 mb-16"
                                        id="specialite"
                                        name="specialite"
                                        onChange={this.handleChange}
                                        label="Specialite"
                                        type="text"
                                        value={this.state.specialite}
                                        variant="outlined"
                                        fullWidth
                                    />
                                </FuseAnimate>
                                    <Input 
                                        type="file" 
                                        onChange={this.handleChangeUpload}
                                        name="file"
                                    />
                            
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
      formateurItem: state.formateurReducer.formateurItem
    }
  }

export default connect(mapStateToProps, { createFormateur })(AjoutFormateur);