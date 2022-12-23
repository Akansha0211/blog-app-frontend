import {
  Button,
  Card,
  CardBody,
  Container,
  Form,
  Input,
  Label,
} from "reactstrap";

const AddPost = () => {
  return (
    <div className="wrapper">
      <Card className="shadow">
        <CardBody>
          <h3>What's going on in your mind</h3>
          <Form>
            <div className="my-3">
              <Label for="title">Post title</Label>
              <Input type="text" id="title" placeholder="Enter here..." />
            </div>
            <div className="my-3">
              <Label for="content">Post Content</Label>
              <Input
                type="textarea"
                id="content"
                placeholder="Enter here..."
                style={{ height: "300px" }}
              />
            </div>

            <div className="my-3">
              <Label for="category">Post Category</Label>
              <Input type="select" id="category">
                <option>Java Programming</option>
                <option>Flask and Django</option>
                <option>Switch roles in IT</option>
              </Input>
            </div>

            <Container className="text-center">
              <Button className="rounded-0" color="primary">
                Create Post
              </Button>
              <Button className="rounded-0 ms-2" color="danger">
                Reset Content
              </Button>
            </Container>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};
export default AddPost;
