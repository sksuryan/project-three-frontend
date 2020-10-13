import React from 'react';

class SignUpForm extends React.Component{

    constructor(){
        super();

        this.state = {
            name: '',
            email: '',
            password: '',
            error: null
        };
    }

    completeLogin(e){
        e.preventDefault();
        // const {name,email,password} = this.state;
    }

    updateField(e){
        this.setState({[e.target.name]: e.target.value});
    }

    render(){
        return (
            <form className='login-form'>
                <div className='login-form__seperator'>
                    <label htmlFor='login-form__name' className='login-form__label'>Enter your name:</label>
                    <input 
                        type='text' 
                        name='name' 
                        className='login-form__field' 
                        placeholder='name' 
                        onChange={(e) => this.updateField(e)} 
                        value={this.state.name}
                        required>
                    </input>
                </div>
                <div className='login-form__seperator'>
                    <label htmlFor='login-form__email' className='login-form__label'>Enter e-mail:</label>
                    <input 
                        type='text' 
                        name='email' 
                        className='login-form__field' 
                        placeholder='e-mail' 
                        onChange={(e) => this.updateField(e)} 
                        value={this.state.email}
                        required>
                    </input>
                </div>
                <div className='login-form__seperator'>
                    <label htmlFor='login-form__password' className='login-form__label'>Enter password:</label>
                    <input 
                        type='password' 
                        name='password' 
                        className='login-form__field' 
                        placeholder='Password' 
                        onChange={(e) => this.updateField(e)} 
                        value={this.state.password}
                        required>
                    </input>
                </div>
                <div className='login-form__seperator'>
                    <button type='submit' className='login-form__login-button' onClick={(e) => this.completeLogin(e)}>Sign Up</button>
                </div>
                {
                    this.state.error && <div className='login-form__seperator'>
                        <span className='login-form__error'>{this.state.error}</span>
                    </div>
                }
                <div className='login-form__seperator'>
                    <button onClick={() => this.props.switchForm(true)} className='login-form__forgot-password'>login instead</button>
                </div>
            </form>
        );
    }
}

export default SignUpForm;