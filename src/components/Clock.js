import React from 'react';

class Clock extends React.Component{
   constructor(){
       super()

       let date = new Date();
       this.state = {
           date: date.getDate(),
           day:date.getDay(),
           month:date.getMonth(),
           year: date.getFullYear(),
           time:date.toLocaleTimeString()

       }
   }
    componentDidMount() {
     
        setInterval(this.updateTime,1000);
    }
    updateTime = () => {
       let date= new Date();
       
            this.setState({
                date: date.getDate(),
                day:date.getDay(),
                month:date.getMonth(),
                year: date.getFullYear(),
                time:date.toLocaleTimeString()
     
            })
       
        
    }
    render(){
        
        return (
            <div className="clock">
                <div> { this.state.time } </div>
            </div>
        )
    }
}
export default Clock;