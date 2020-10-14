import React from 'react'

class EventCard extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            applied: false
        }
    }
    addForUser(id){
        const token = this.props.token
        fetch('http://127.0.0.1:5000/applications',{
            method: 'POST',
            mode: 'cors', 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'token': token
              },
              body: JSON.stringify({
                  'event_id': id
              })       
            }).then(data => data.json())
            .then(data => this.setState({applied: true}))
            .catch(error => console.log(error))
    }
    render(){
        const {_id,name,details,topics} = this.props.event
        return(
            <div className='feed__event'>
                <p><b>{name}</b></p>
                <p>{details}</p>
                <p>
                    {topics.map((i,k) => <span key={k} className='feed__topic'>{i['name']}</span>)}
                </p>
                {
                    this.state.applied?
                        <button onClick={() => this.addForUser(_id)} disabled>Applied!</button>:
                        <button onClick={() => this.addForUser(_id)}>Apply</button>
                }
            </div>
        )
    }
}

export default EventCard;