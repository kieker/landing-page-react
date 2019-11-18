import React from 'react';


class Weather extends React.Component
{
    state = {
        last_updated : "",
        err:"",
        sunrise:"",
        sunset:"",
        
    }
    cleanData = (data) => {
        String.prototype.replaceAll = function(search, replacement) {
            var target = this;
            return target.replace(new RegExp(search, 'g'), replacement);
        };
        let clean_data = data.replaceAll('"', '');
        clean_data = clean_data.replace("T", ' ' );
        return clean_data
    }
    fetchData = () =>
    {
        const parseString = require('react-native-xml2js').parseString;
        
        fetch('https://yr.no/place/South_Africa/Gauteng/Pretoria/forecast.xml',{
            headers :{
                'Access-Control-Allow-Origin' : '*'
            }
        })
        .then(response => response.text())
        .then((response) => {
        parseString(response,function(err,result){
            console.log(result);
            
            let lastupdated = JSON.stringify(result["weatherdata"]["meta"][0]["nextupdate"][0]);
            let last_updated = this.cleanData(lastupdated)
            
            let sunrise = JSON.stringify(result["weatherdata"]["sun"][0]['$']["rise"]);
            sunrise = this.cleanData(sunrise)

            
            this.setState({last_updated, sunrise})
           
            }.bind(this));
        }).catch((err) => {
            this.setState({err});
            console.log( err);
            return
        })
    }
    componentDidMount() {
       let result = this.fetchData();
    
    }
    updateWeather = () => 
    {
        
        if (this.state.last_updated)
        {
           const shouldCheck = this.props.weathercheck(this.state.last_updated)
           if (shouldCheck)
            console.log("has to update")
           else
            console.log("not yet")
        }
        else
        {
            let err = "there was an error with the program"
            this.setState({err})
        }
    }
    render() {
        
        return (
            <div className="weather_container">
                <span>Last Updated: </span>
                
                <div>{this.state.last_updated}</div>
                {/* {Object.keys(this.state.last_updated).map(i => <span>{this.state.last_updated}</span>)} */}
                <button onClick={this.updateWeather} >Get weather</button>
            </div>
        )
    }
}
export default Weather;