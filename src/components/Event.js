import React from 'react';

class Event extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return( 
        <div className={'event'} style={{borderBottom: '1px solid black', borderTop: '1px solid black',  height: (this.props.time.end-this.props.time.start), top: this.props.time.start}} >
            <div> <strong>Test</strong> </div>
            <div> <small>Test</small> </div>
        </div>)

    }    
}

export default Event;


