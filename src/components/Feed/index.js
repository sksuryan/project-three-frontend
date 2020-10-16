import React from 'react'
import EventCard from './EventCard';
import LoadingAnimation from '../LoadingAnimation'
import './style.css'

class Feed extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            events: null
        }
    }

    componentDidMount(){
        this.mounted = true;
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
            .then(data => {
                if(this.mounted)
                this.setState({events: data})
            })
            .catch(error => console.log(error))
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
            .then(data => {
                if(this.mounted)
                this.setState({events: data})
            })
            .catch(error => console.log(error))
        }
    }

    componentWillUnmount(){
        this.mounted = false;
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
                {this.state.events?eventCard:<LoadingAnimation />}
            </div>
        )
    }
}

export default Feed;