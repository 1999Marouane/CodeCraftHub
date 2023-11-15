import React from 'react'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import './Main.css'
import logo  from'../images/3135715.png'

const Main = () => {
    console.log(logo);
    return (
        <div>
            <Container className='main'>
                <Row>
                    <Col className='COL1'>
                        <div> <h3>  Bloom Institute of Technology </h3></div>
                        <div> <p>module-project-manipulating-arrays-JMandiangu544 created by GitHub Classroom</p> </div>
                        <div className='links'>
                            <span>O</span>
                            <span>O</span>
                            <span>O</span>

                        </div>
                        <div>
                            <span> <span>22</span> project</span>
                            <span> <span>100</span> followers </span>
                        </div>
                    </Col>
                    <Col>
                        <div><img className='photo' src={logo} alt="Logo" /></div>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default Main