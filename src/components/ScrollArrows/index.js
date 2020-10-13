import React from 'react';
import './style.css'

class ScrollArrows extends React.Component{
    render(){
        return(
            <>
                <button onClick={() => this.props.onHit(1)} className='rem-def-btn left-button'><i className="fas fa-chevron-left fa-2x"></i></button>
                <button onClick={() => this.props.onHit(0)} className='rem-def-btn right-button'><i className="fas fa-chevron-right fa-2x"></i></button>
            </>
        );
    }
}

export default ScrollArrows;