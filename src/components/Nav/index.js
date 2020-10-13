import React from 'react';
import './Nav.css';
import AuthForms from '../AuthForms';

class Nav extends React.Component {
    constructor(){
        super();
        this.state={
            showLogin: false
        }
    }

    componentDidMount(){
        // auth.onAuthStateChanged(user => {
        //     if(user){
        //         this.props.login(user);
        //         const cartRef = db.doc(`/users/${user.uid}`);

        //         cartRef.onSnapshot(snapshot => {
        //             const data = snapshot.data();
        //             this.props.updateCart(data);
        //         });
        //     } else {
        //         this.props.logout();
        //         this.props.resetCart();
        //     }
        // })
    }

    updateShowLogin(showLogin){
        this.setState({showLogin});
    }

    render(){
        const loggedIn = this.props.loggedIn;
        return (
            <>
            <div className="nav">
                <div className='nav__container'>
                    <div className='nav__logo-container'>
                        <h1 className='nav__logo'>TechAboutIt</h1>
                        <div className="nav__mobile-options">
                            {
                                !loggedIn && <h1 className='nav__login login-button' key='25515' onClick={() => this.updateShowLogin(true)}>login</h1>
                            }
                            {
                                loggedIn && <span className='nav__icon'><i className="fas fa-user fa-lg nav__mobile-cart"></i></span>
                            }
                        </div>
                    </div>
                    <div className='nav__search-container'>
                        <input type='text' className='nav__search' placeholder='Search'></input>
                        <button className='nav__search-submit'>
                            <i className="fa fa-search fa-lg" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
                <ul className='nav__options'>
                    {
                        !loggedIn && <li className='login-button' key='515' onClick={() => this.updateShowLogin(true)}>login</li> 
                    }
                    {
                        loggedIn && <li className='nav__profile'>
                            <div className='nav__profile-button'><i className="fas fa-user"></i> My Profile</div>
                            <div className='nav__hover'>
                                <div className='seperator'><span><i className="fas fa-caret-up fa-lg" aria-hidden="true"></i></span></div>
                                <div className='nav__profile-hover-options'>
                                    <span className='nav__profile-option'>account</span>
                                    <span className='nav__profile-option'>logout</span>
                                </div>
                            </div>
                        </li>
                    }
                </ul>
            </div>
            {this.state.showLogin && <AuthForms updateShowLogin={(showLogin) => this.updateShowLogin(showLogin)}/>}
            </>
        );
    }
}

export default Nav;