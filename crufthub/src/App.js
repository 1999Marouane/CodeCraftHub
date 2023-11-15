import './App.css';
import Container from 'react-bootstrap/Container';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Main from './Component/Main';
import Project from './Component/Project';
import Managment from './Component/Managment';
import Haiderr from './Component/Haiderr';
function App() {
  return (
    <div className="App">
        <Container className='Container'>
      <Row className='haider'>
         <Col > <Haiderr/> </Col>
      </Row>
      <Row className='main'>
        <Main/>
      </Row>
      
      <Row className='dashbord'>
        <Managment/>
      </Row>
      <Row className='project'>
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </Row>
    </Container>
     
    </div>
  );
}

export default App;
