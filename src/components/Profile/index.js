import React from 'react';
import pic from './profile-pic.png'
import './style.css'

import {Link, Redirect} from 'react-router-dom'

class Profile extends React.Component{
    render(){
        return (
            <div className='profile'>
                {   
                    this.props.user?
                    <>
                        <div className='profile__pic'>
                        <img src={pic}></img>
                        </div>
                        <p className='profile__text'>{this.props.user.name}</p>
                        <p className='profile__text'>{this.props.user.email}</p>
                        <p className='profile__text'>
                            {
                                this.props.user.topics?this.props.user.topics.map((i,k) => {
                                    return (
                                        <span key={i['_id']}>
                                            <b>{i['name']}</b>
                                            {this.props.user.topics.length-1 != k?', ':''}
                                        </span>
                                    )
                                }):<></>
                            }
                        </p>
                        <div className='profile__back-div'>
                            <Link to='/'>
                                <button className='profile__back' style={{'display': 'block'}}><i className="fas fa-long-arrow-alt-left"></i></button>
                            </Link>
                            <button className='profile__logout' onClick={this.props.signOut}>log out</button>
                        </div>
                    </>:<Redirect to='/'></Redirect>
                }
            </div>
        )
    }
}

export default Profile;

