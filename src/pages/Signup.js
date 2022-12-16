import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Container,
  Form,
  FormGroup,
  Input,
  Button,
  Row,
  Col,
} from "reactstrap";
import Base from "../components/Base";
import "bootstrap/dist/css/bootstrap.min.css";

const Signup = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
  });
  const [error, setError] = useState({
    errors: {},
    isError: false,
  });

  // handle chnage
  const handleChange = (event, property) => {
    // dynamic setting the value
    setData({ ...data, [property]: event.target.value });
  };

  // reseting the form
  const resetData = () => {
    setData({
      name: "",
      email: "",
      password: "",
      about: "",
    });
  };

  // submit the form
  const submitForm = (event) => {
    event.preventDeafult();
    console.log(data);
    // data validate
    // call server api for sending the data
  };

  return (
    <Base>
      <Container>
        <Row className="mt-4">
          {JSON.stringify(data)}

          <Col sm={{ size: 6, offset: 3 }}>
            <Card color="dark" inverse>
              <CardHeader>
                <h3> Fill information to Register !!</h3>
              </CardHeader>
              <CardBody>
                {/* creating form */}

                <Form onSubmit={submitForm}>
                  {/* Name field */}
                  <FormGroup>
                    <label for="name">Enter Name</label>
                    <Input
                      type="text"
                      placeholder="Enter Here..."
                      id="name"
                      onChange={(e) => handleChange(e, "name")}
                      value={data.name}
                    />
                  </FormGroup>

                  {/* email field */}
                  <FormGroup>
                    <label for="email">Enter Email</label>
                    <Input
                      type="email"
                      placeholder="Enter Here..."
                      id="email"
                      onChange={(e) => handleChange(e, "email")}
                      value={data.email}
                    />
                  </FormGroup>

                  {/* password field */}
                  <FormGroup>
                    <label for="password">Enter Password</label>
                    <Input
                      type="password"
                      placeholder="Enter Here..."
                      id="password"
                      onChange={(e) => handleChange(e, "password")}
                      value={data.password}
                    />
                  </FormGroup>

                  {/* Text Area */}
                  <FormGroup>
                    <label for="about">Enter About</label>
                    <Input
                      type="textarea"
                      placeholder="Enter Here..."
                      id="about"
                      style={{ height: "250px" }}
                      onChange={(e) => handleChange(e, "about")}
                      value={data.about}
                    />
                  </FormGroup>

                  <Container className="text-center">
                    <Button outline color="light">
                      Register
                    </Button>
                    <Button
                      onClick={resetData}
                      color="secondary"
                      className="ms-2"
                      type="reset"
                    >
                      Reset
                    </Button>
                  </Container>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Base>
  );
};
export default Signup;
