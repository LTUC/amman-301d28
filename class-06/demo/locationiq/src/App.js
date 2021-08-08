import React, { Component } from 'react';
import City from './components/City';
import axios from 'axios';

export class App extends Component {
  constructor(props){
    super(props);

    this.state={
      lat:"0.0",
      lon:"0.0",
      cityName:""
    }
  }
// https://eu1.locationiq.com/v1/search.php?key=pk.60346fba30221450f0bd55e67928ff53&county=Syria&format=json
  getUserInputHandler=(e)=>{
    this.setState({
      cityName:e.target.value
    })
    console.log(this.state.cityName);
  }

  submitHandler=(e)=>{
    e.preventDefault();
    let url=`https://eu1.locationiq.com/v1/search.php?key=pk.60346fba30221450f0bd55e67928ff53&q=${this.state.cityName}&format=json`
    axios.get(url).then(res=>{
      let data= res.data[0]

      this.setState({
        cityName:data.display_name,
        lat:data.lat,
        lon:data.lon
      })
    
    });
  }
  render() {
    return (
      <div>
        <h1>LocationIQ API Demo</h1>
        <form onSubmit={(e)=>this.submitHandler(e)}>
          <input type="text" onChange={(e)=>{this.getUserInputHandler(e)}} placeholder="Search by City name, Street, county..."/>
          <input type="submit" value="Search"/>
        </form>
        <City cityName={this.state.cityName} lat={this.state.lat} lon={this.state.lon}/>
      </div>
    )
  }
}

export default App

