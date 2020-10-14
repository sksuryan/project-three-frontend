import React from 'react'
import EventCard from './EventCard';
import './style.css'

class Feed extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            events: null
        }
    }

    componentDidUpdate(){
        if(this.props.user){
            const token = this.props.user['token']
            fetch('http://127.0.0.1:5000/feed',{
            method: 'GET',
            mode: 'cors', 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'token': token
              }         
            }).then(data => data.json())
            .then(data => this.setState({events: data}))
            .catch(error => console.log(error))
        }
    }

    shouldComponentUpdate(nextProps, nextState){
        if(this.props.user && nextProps.user)
            if(JSON.stringify(nextState.events) === JSON.stringify(this.state.events) && nextProps.user['token'] === this.props.user['token'])
                return false
        return true
    }

    render(){
        let eventCard = []
        if(this.state.events && this.props.user)
            eventCard = this.state.events.map(i => {
                return <EventCard key={i['_id']} event={i} token={this.props.user['token']}></EventCard>
            })
        return (
            <div className='feed__container'>
                {eventCard}
            </div>
        )
    }
}

export default Feed;