import React from 'react'

class EventCard extends React.Component{
    render(){
        const {name,details,topics} = this.props.event
        return(
            <div className='feed__event'>
                <p><b>{name}</b></p>
                <p>{details}</p>
                <p>
                    {topics.map((i,k) => <span key={k} className='feed__topic'>{i['name']}</span>)}
                </p>
            </div>
        )
    }
}

export default EventCard;