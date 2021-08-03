import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import DisplayCard from './components/DisplayCard';
import { Container, Row, Col } from 'react-bootstrap';
import data from "./components/data.json";

export class App extends Component {
  render() {
    const studentsList=data
    // const newStudentsList=studentsList.map(student=>{
    //   if(student.age>18){
    //     return student
    //   }else{
    //     return undefined
    //   }
      
    // })
    // console.log(newStudentsList);
    return (
      <Container>
        <Row>
          {
            studentsList.map(student=>{
               return (
                  student.age>18 &&
                  <Col>
                  <DisplayCard title={student.title} name={student.name} age={student.age}/>
                  </Col>
                )
              
            })
            
          }

        </Row>
      </Container>
    )
  }
}

export default App

