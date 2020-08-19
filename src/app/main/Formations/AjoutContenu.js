import React, {Component} from 'react';
import { 
    Button,
    Icon, 
    Input,
    Typography
} from '@material-ui/core';
import {FuseAnimate, FusePageCarded} from '@fuse';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { post } from 'axios';

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
        this.setState({
            id: '',
            name: '',
            formation: ''
       })
    }

    uploadFile = (file) =>{
        let contNom = this.props.formationItem.name
        let contId = this.props.formationItem.id

        const url = 'http://backcapformation.com/UploadC/' + contNom + '/' + contId
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
        this.setState({formation: filesUp});
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
                                <Button
                                    className="whitespace-no-wrap"
                                    variant="contained"
                                    onClick = {() => this.uploadFile(this.state.formation) }
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
        allFormateurs: state.formateurReducer.allFormateurs,
        formationItem: state.formationReducer.formationItem
    }
}

export default connect(mapStateToProps)(AjoutContenu);
