import DayBox from '../components/DayBox'
import React from 'react';

class Calendar extends React.Component{
    render(){
        return(
            <div>
            <DayBox times={this.props.times}></DayBox>
            </div>
        )
    }
}



export default Calendar;
