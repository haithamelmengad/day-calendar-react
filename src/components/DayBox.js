import Event from './Event';
import React from 'react';

class DayBox extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
        <div style={{display: 'flex', height: 700, paddingBottom:10, paddingTop: 10}}>
            <div className="timeline" style={{flex: 1, display: 'flex', flexDirection: 'column', alignItem: 'center',justifyContent: 'space-between'}}>
                {new Array(13).fill(null).map((_, i) => 9 + i).map(num => <span className="time-line">{num}:00</span>)}
            </div>
                <div className="daybox" style={{flex: 9}}>
                {
                    this.props.times.map(time => <Event time={time}/>)
                }
                </div>
        </div>     
        )
    }
}

export default DayBox;