import React from 'react';
import ScrollArrows from '../ScrollArrows';

import './style.css'

class Carousel extends React.Component {

    constructor(props){
        super(props);
        this.div = React.createRef();
    }

    componentDidMount(){
        this.timerID = setInterval(() => this.onHit(0),6000);
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    onHit(dir){
        const carousel = this.div.current;
        const width = carousel.scrollWidth/carousel.childElementCount;
        const scrollWidth = carousel.scrollWidth;

        if(dir === 0)
            if(carousel.scrollLeft+width < scrollWidth)
                carousel.scrollLeft += width;
            else 
                carousel.scrollLeft = 0;
        else if(dir === 1)
            if(carousel.scrollLeft-width > 0)
                carousel.scrollLeft -= width;
            else
                carousel.scrollLeft = scrollWidth;
    }

    render(){
        return (
            <div className='container' 
                onMouseEnter={() => clearInterval(this.timerID)} 
                onMouseLeave={() => this.timerID = setInterval(() => this.onHit(0),6000)}>
                <div ref={this.div} className='carousel remove-scrollbar'>
                    <img className='carousel__product' src='https://source.unsplash.com/1600x400/?products' alt='Resource not available'></img>
                    <img className='carousel__product' src='https://source.unsplash.com/1600x400/?products' alt='Resource not available'></img>
                    <img className='carousel__product' src='https://source.unsplash.com/1600x400/?products' alt='Resource not available'></img>
                    <img className='carousel__product' src='https://source.unsplash.com/1600x400/?products' alt='Resource not available'></img>
                    <img className='carousel__product' src='https://source.unsplash.com/1600x400/?products' alt='Resource not available'></img>
                </div>
                <ScrollArrows onHit={(i) => this.onHit(i)} />
            </div>
        )
    }
}

export default Carousel;