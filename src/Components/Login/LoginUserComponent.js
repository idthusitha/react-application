import React, { Component } from "react";
import { Row, Col, Form, Button, Container, Card } from 'react-bootstrap';

class LoginUserComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            checkMeOut: false            
        }

    }
    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
        //console.log("changedJSON" + this.state);
    }
    loginUser = () => {
        alert("loginUser")
    }

    registerUser = () => {       
        //this.props.history.push('?screen=RegisterUser')       
        window.location.href = "?screen=RegisterUser";
        //return <Redirect to='?screen=RegisterUser' />        
    }

    clock = () => {               
        window.location.href = "?screen=Clock";        
    }
   

    render() {
        return (            
            <Container >                
                <Row className="justify-content-md-center">
                    <Card>
                        <Card.Header as="h5">User Login</Card.Header>
                        <Card.Body>
                            <Form>
                                <Row>
                                    <Col>
                                        <Form.Group as={Row} controlid="formBasicEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control controlid="email" type="email" placeholder="Enter email" name="email" id="email" defaultValue={this.state.email} onChange={(e) => this.handleOnChange(e)} />
                                            <Form.Text className="text-muted"> We'll never share your email with anyone else.</Form.Text>
                                        </Form.Group>
                                    </Col>

                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group as={Row} controlid="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control controlid="password" type="password" placeholder="Password" name="password" id="password" defaultValue={this.state.password} onChange={(e) => this.handleOnChange(e)} />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group as={Row} controlid="formBasicChecbox">
                                            <Form.Check type="checkbox" label="Check me out" name="checkMeOut" id="checkMeOut" defaultValue={this.state.checkMeOut} onChange={(e) => this.handleOnChange(e)} />
                                        </Form.Group>
                                        <Button variant="primary" onClick={this.loginUser} type="submit"> Submit</Button> &nbsp;&nbsp;
                                        <Button variant="success" onClick={this.registerUser} type="button"> Register</Button> &nbsp;&nbsp;
                                        <Button variant="success" onClick={this.clock} type="button"> Clock</Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        );
    }
}

export default LoginUserComponent;