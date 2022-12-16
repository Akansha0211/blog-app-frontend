import React from "react";
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
  return (
    <Base>
      <Container>
        <Row className="mt-4">
          <Col sm={{ size: 6, offset: 3 }}>
            <Card color="dark" inverse>
              <CardHeader>
                <h3> Fill information to Register !!</h3>
              </CardHeader>
              <CardBody>
                {/* creating form */}

                <Form>
                  {/* Name field */}
                  <FormGroup>
                    <label for="name">Enter Name</label>
                    <Input type="text" placeholder="Enter Here..." id="name" />
                  </FormGroup>

                  {/* email field */}
                  <FormGroup>
                    <label for="email">Enter Email</label>
                    <Input
                      type="email"
                      placeholder="Enter Here..."
                      id="email"
                    />
                  </FormGroup>

                  {/* password field */}
                  <FormGroup>
                    <label for="password">Enter Password</label>
                    <Input
                      type="password"
                      placeholder="Enter Here..."
                      id="password"
                    />
                  </FormGroup>

                  {/* Text Area */}
                  <FormGroup>
                    <label for="about">Enter Password</label>
                    <Input
                      type="textarea"
                      placeholder="Enter Here..."
                      id="about"
                      style={{ height: "250px" }}
                    />
                  </FormGroup>

                  <Container className="text-center">
                    <Button outline color="light">
                      Register
                    </Button>
                    <Button color="secondary" className="ms-2" type="reset">
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
