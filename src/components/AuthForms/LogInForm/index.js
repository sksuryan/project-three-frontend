import React from 'react';

class LoginForm extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: '',
            error: null
        };
    }

    completeLogin(e){
        e.preventDefault();
        const {email,password} = this.state;
        fetch('http://127.0.0.1:5000/auth/login/',{
            method: 'POST',
            mode: 'cors', 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(
                {
                    'email': email,
                    'password': password
                }
            )
        }).then(data => data.json())
        .then(data => {
            this.props.updateShowLogin(false)
            this.props.updateUserState(data)
        })
        .catch(error => console.log(error))
        
    }

    updateField(e){
        this.setState({[e.target.name]: e.target.value});
    }

    render(){
        return (
            <form className='login-form'>
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
                    <button type='submit' className='login-form__login-button' onClick={(e) => this.completeLogin(e)}>Login</button>
                </div>
                {
                    this.state.error && <div className='login-form__seperator'>
                        <span className='login-form__error'>{this.state.error}</span>
                    </div>
                }
                <div className='login-form__seperator'>
                    <a href='google.co.in' className='login-form__forgot-password'>forgot password?</a>
                    <button onClick={() => this.props.switchForm(false)} className='login-form__forgot-password'>create new account</button>
                </div>
            </form>
        );
    }
}

export default LoginForm;