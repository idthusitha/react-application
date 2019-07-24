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

    render() {
        return (
            <Container >
                <Card>
                    <Card.Header as="h5">Login</Card.Header>
                    <Card.Body>
                        <Form>
                            <Row className="text-center">
                                <Form.Group as={Row} controlid="formBasicEmail">
                                    <Col sm="6">
                                        <Form.Label>Email address</Form.Label>
                                    </Col>
                                    <Col sm="12">
                                        <Form.Control controlid="email" type="email" placeholder="Enter email" name="email" id="email" defaultValue={this.state.email} onChange={(e) => this.handleOnChange(e)} />
                                    </Col>
                                    <Col sm="12">
                                        <Form.Text className="text-muted"> We'll never share your email with anyone else.</Form.Text>
                                    </Col>
                                </Form.Group>
                            </Row>
                            <Row>
                                <Col sm="12">
                                    <Form.Group as={Row} controlid="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control controlid="password" type="password" placeholder="Password" name="password" id="password" defaultValue={this.state.password} onChange={(e) => this.handleOnChange(e)} />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm="12">
                                    <Form.Group as={Row} controlid="formBasicChecbox">
                                        <Form.Check type="checkbox" label="Check me out" name="checkMeOut" id="checkMeOut" defaultValue={this.state.checkMeOut} onChange={(e) => this.handleOnChange(e)} />
                                    </Form.Group>
                                    <Button variant="primary" type="submit"> Submit</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        );
    }
}

export default LoginUserComponent;