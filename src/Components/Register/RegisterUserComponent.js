import React, { Component } from "react";
import { Row, Col, Form, Button, Container, Card } from 'react-bootstrap';
import MultipleAutoComplete from "../Common/MultipleAutoComplete"
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

class RegisterUserComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {            
            email: '',
            password: '',
            countryId: '',
            countryList: this.props.countryList,
            checkMeOut: false
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.countryList.length > 0) {
            this.setState({
                countryList: nextProps.countryList,
            })
        }
    }
    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    loginUser = () => {
        alert("loginUser")
    }

    onCountryChange = (e) => {
        let countryIdTemp = "";
        for (let i = 0; i < e.length; i++) {
            countryIdTemp += (e[i].key + (i < e.length - 1 ? "," : ""));
        }
        this.setState({
            countryId: countryIdTemp
        });
    }

    notifyError = (message) => {
        toast.error(message, {
            position: "top-right",
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false
        });
    }

    notifySuccess = (successMessage) => {
        toast.success(successMessage, {
            position: "top-right",
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false
        });
    }

    validateSubmit = () => {
        let isValidated = true;
        this.setState({ mannualValidation: true });

        if (this.state.email === '') {
            this.notifyError("Email can not be empty!");
            isValidated = false;
        }
        return isValidated;
    }


    submitData = () => {
        if (this.validateSubmit()) {
            alert("sumited");
        }
    }



    render() {
        const { validated } = this.state;
        return (            
            <Container >
                <ToastContainer />
                <Row className="justify-content-md-center">
                    <Card>
                        <Card.Header as="h5">User Registration Page</Card.Header>
                        <Card.Body>
                            <Form
                                noValidate
                                validated={validated}
                            >
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control required controlid="email" type="email" placeholder="Enter email" name="email" id="email" defaultValue={this.state.email} onChange={(e) => this.handleOnChange(e)} />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control controlid="password" type="password" placeholder="Password" name="password" id="password" defaultValue={this.state.password} onChange={(e) => this.handleOnChange(e)} />
                                    </Form.Group>
                                </Form.Row>

                                <Form.Group controlId="formGridAddress1">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control placeholder="1234 Main St" />
                                </Form.Group>

                                <Form.Group controlId="formGridAddress2">
                                    <Form.Label>Address 2</Form.Label>
                                    <Form.Control placeholder="Apartment, studio, or floor" />
                                </Form.Group>

                                <Form.Group controlId="formGridAddress2">
                                    <Form.Label>Country</Form.Label>

                                    <MultipleAutoComplete
                                        labelKey={"country"}
                                        options={this.state.countryList}
                                        placeholder={"Select Country(s)"}
                                        onChange={(e) => this.onCountryChange(e)}
                                    />

                                </Form.Group>

                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridCity">
                                        <Form.Label>City</Form.Label>
                                        <Form.Control />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridState">
                                        <Form.Label>State</Form.Label>
                                        <Form.Control as="select">
                                            <option>Choose...</option>
                                            <option>...</option>
                                        </Form.Control>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridZip">
                                        <Form.Label>Zip</Form.Label>
                                        <Form.Control />
                                    </Form.Group>
                                </Form.Row>

                                <Form.Group id="formGridCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>

                                <Button variant="primary" onClick={this.submitData}>Submit</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        );
    }
}

export default RegisterUserComponent;