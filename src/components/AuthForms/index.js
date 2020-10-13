import React from 'react';
import './style.css';
import LogInForm from './LogInForm';
import SignUpForm from './SignUpForm';

class AuthForms extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            showLogIn: true,
            showSignUp: false
        }
    }

    switchForm(value){
        this.setState({showLogIn: value, showSignUp: !value});
    }

    render(){
        return (
            <div className='login-form__overlay' onClick={() => this.props.updateShowLogin(false)}>
                <div className='login-form__container' onClick={(e) => e.stopPropagation()}>
                    <div className='login-form__close' onClick={() => this.props.updateShowLogin(false)}></div>
                    {this.state.showLogIn && <LogInForm updateShowLogin={() => this.props.updateShowLogin(false)} switchForm={(v) => this.switchForm(v)}/>}
                    {this.state.showSignUp && <SignUpForm updateShowLogin={() => this.props.updateShowLogin(false)} switchForm={(v) => this.switchForm(v)}/>}
                </div>
            </div>
        );
    }
}

export default AuthForms;