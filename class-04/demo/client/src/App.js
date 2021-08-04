import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      userName:"",
      major:"",
      showData:false
    }
  }

  nameHandler=(e)=>{
    // console.log(e.target.value);
    this.setState({
      userName:e.target.value
    })
    console.trace();
  }
  majorHandler=(e)=>{
    // console.log(e.target.value);
    this.setState({
      major:e.target.value
    })
    console.log(this.state.major);
  }
  submitHandler=(e)=>{
    e.preventDefault();
    this.setState({
      showData:true
    })
  }
  render() {
    return (
      <>
      <form onSubmit={(e)=>{this.submitHandler(e)}}>
        <input type="text" placeholder="name" onChange={(e)=>{this.nameHandler(e)}}/>
        <input type="text" placeholder="Major" onChange={(e)=>{this.majorHandler(e)}}/>
        <input type="submit" value="submit"/>
      </form>
      {
        this.state.showData?<>
        <h1>{this.state.userName}</h1>
        <h1>{this.state.major}</h1>
        </>:<h1>No data shown</h1>
      }

      </>
    )
  }
}

export default App
