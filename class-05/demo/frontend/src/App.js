import react from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Parent from './components/Parent';
import imgUrl from "./assets/juven.jpg";

class App extends react.Component{

  render(){
    
    return(<Parent imgUrl={imgUrl} title="Juventus"/>)
  }
}

export default App;