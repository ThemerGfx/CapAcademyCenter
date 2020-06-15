import React, {Component} from 'react';
import { Button, Card, CardContent, Checkbox, Divider, FormControl, FormControlLabel, TextField, Typography} from '@material-ui/core';
import {FuseAnimate} from '@fuse';
import {Link, Redirect} from 'react-router-dom';
import _ from '@lodash';
import { connect } from 'react-redux';
import logo from './logo.png'

import {loginUser} from './store/actions/login.actions'

const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);
  
const formValid = ({ formErrors, ...rest }) => {
    let valid = true;
  
    // validate form errors being empty
    Object.values(formErrors).forEach(val => {
      val.length > 0 && (valid = false);
    });
  
    // validate the form was filled out
    Object.values(rest).forEach(val => {
      val === null && (valid = false);
    });
  
    return valid;
};

class Login extends Component {

    state = {
        email   : '',
        password: '',
        role: '',
        remember: false,
        formErrors: {
            email: "",
            password: ""
          }
    };
    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };
    
        switch (name) {
            case "email":
                formErrors.email = emailRegex.test(value)
                ? ""
                : "invalid email address";
            break;
            case "password":
                formErrors.password =
                value.length < 6 ? "minimum 6 characaters required" : "";
            break;
          default:
            break;
        }
        this.setState({ formErrors, [name]: value });
    };

    handleSubmitLogin = e => {
        e.preventDefault();
        const {email,password} = this.state
    
        if (formValid(this.state)) {
            console.log(`
                --SUBMITTING--
                Email: ${this.state.email}
                Password: ${this.state.password}
            `);
            
            this.props.loginUser(email,password)
            this.setState({
                email   : '',
                password: ''
            })
        } 
        else {
            console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
        }
      };

    render()
    {
        // const { auth } = this.props; 
        // const { email, password, remember, formErrors } = this.state;

        // console.log(auth)
        // if (auth.uid)  return <Redirect to = '/animations'/>

        return (
            <div className="flex flex-col flex-auto flex-no-shrink items-center justify-center p-32">

                <div className="flex flex-col items-center justify-center w-full">

                    <FuseAnimate animation="transition.expandIn">

                        <Card className="w-full max-w-384">

                            <CardContent className="flex flex-col items-center justify-center p-30">

                                <img className="w-128 m-30" src={logo} alt="logo"/>

                                <Typography variant="h6" className="mt-16 mb-32">SE CONNECTER</Typography>
                                
                                <form name="loginForm" noValidate className="flex flex-col justify-center w-full">
                                
                                    <TextField
                                        className="mb-16"
                                        label="Email"
                                        autoFocus
                                        type="email"
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.handleChange}
                                        variant="outlined"
                                        required
                                        fullWidth
                                    />
                                    {this.state.formErrors.email.length > 0 && (
                                        <span style = {{color : "red" }} className="errorMessage">{this.state.formErrors.email}</span>
                                    )}

                                    <TextField
                                        className="mb-16"
                                        label="Password"
                                        type="password"
                                        name="password"
                                        value={this.state.password}
                                        onChange={this.handleChange}
                                        variant="outlined"
                                        required
                                        fullWidth
                                    />
                                    {this.state.formErrors.password.length > 0 && (
                                        <span  style = {{color : "red" }} className="errorMessage">{this.state.formErrors.password}</span>
                                    )}
                                    <Button 
                                        variant="contained" 
                                        color="primary" 
                                        className="w-224 mx-auto mt-16" 
                                        aria-label="LOG IN"
                                        onClick={this.handleSubmitLogin} 
                                        component={Link} to="/table-agents"
                                    >
                                        LOG IN
                                    </Button>

                                </form>

                                <div className="my-24 flex items-center justify-center">
                                    <Divider className="w-32"/>
                                    <span className="mx-8 font-bold">OR</span>
                                    <Divider className="w-32"/>
                                </div>

                                <Button 
                                    variant="contained" 
                                    color="secondary" 
                                    size="small"
                                    className="normal-case w-192 mb-8"
                                    // onClick={()=>{
                                    // this.props.authWithGoogle()
                                    // }}
                                >
                                    Log in with Google
                                </Button>
                                <Button className="font-medium" component={Link} to='/register-2'>
                                    Create an account
                                </Button>
                                
                            </CardContent>
                        </Card>
                    </FuseAnimate>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
            // auth: state.firebase.auth,
    }
}

export default (connect(mapStateToProps,{loginUser})(Login));