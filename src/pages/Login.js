import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormGroup,
  Label,
  Row,
  Input,
  Button,
} from "reactstrap";
import Base from "../components/Base";

const Login = () => {
  return (
    <Base>
      <Container>
        <Row className="mt-4">
          <Col sm={{ size: 6, offset: 3 }}>
            <Card color="dark" inverse>
              <CardHeader>
                <h3>Login Here !!</h3>
              </CardHeader>
              <CardBody>
                <Form>
                  {/* email field */}
                  <FormGroup>
                    <Label for="email">Enter Email</Label>
                    <Input type="email" id="email"></Input>
                  </FormGroup>
                  <FormGroup>
                    <Label for="password">Enter Password</Label>
                    <Input type="password" id="password"></Input>
                  </FormGroup>
                  <Container className="text-center">
                    <Button outline color="light">
                      Login
                    </Button>
                    <Button className="ms-2" color="secondary" type="reset">
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
export default Login;
