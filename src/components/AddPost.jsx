import { useEffect, useRef, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Container,
  Form,
  Input,
  Label,
} from "reactstrap";

import { loadAllCategories } from "../services/category-service";
import JoditEditor from "jodit-react";
import { createPost as doCreatePost } from "../services/post-service";
import { getCurrentUserDetail } from "../auth/index";

const AddPost = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [categories, setCategories] = useState([]);

  const [user, setUser] = useState(undefined);

  const [post, setPost] = useState({
    title: "",
    content: "",
    categoryId: "",
  });

  useEffect(() => {
    setUser(getCurrentUserDetail());
    loadAllCategories()
      .then((data) => {
        console.log(data);
        setCategories(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // field chnaged function
  const fieldChanged = (event) => {
    // console.log(event);
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  const contentFieldChnage = (data) => {
    setPost({ ...post, content: data });
  };

  // create post function

  const createPost = (event) => {
    event.preventDefault();
    if (post.title.trim() === "") {
      alert("post title is required !!");
      return;
    }
    if (post.content.trim() === "") {
      alert("post content is required !!");
      return;
    }
    if (post.categoryId === "") {
      alert("select some category");
      return;
    }

    // submit the form on server

    post["userId"] = user.id;
    doCreatePost(post)
      .then((data) => {
        alert("post created");
        console.log(post);
      })
      .catch((error) => {
        alert("error");
        console.log(error);
      });
  };
  return (
    <div className="wrapper">
      <Card className="shadow border-0 mt-3 ">
        <CardBody>
          {JSON.stringify(post)}
          <h3>What's going on in your mind</h3>
          <Form onSubmit={createPost}>
            <div className="my-3">
              <Label for="title">Post title</Label>
              <Input
                type="text"
                id="title"
                placeholder="Enter here..."
                name="title"
                onChange={fieldChanged}
              />
            </div>
            <div className="my-3">
              <Label for="content">Post Content</Label>
              {/* <Input
                type="textarea"
                id="content"
                placeholder="Enter here..."
                style={{ height: "300px" }}
              /> */}
              <JoditEditor
                ref={editor}
                value={post.content}
                onChange={contentFieldChnage}
              />
            </div>

            <div className="my-3">
              <Label for="category">Post Category</Label>
              <Input
                type="select"
                id="category"
                placeholder="select"
                className="rounded-0"
                name="categoryId"
                onChange={fieldChanged}
                defaultValue={0}
              >
                <option disabled value={0}>
                  Select category
                </option>
                {categories.map((category) => (
                  <option value={category.categoryId} key={category.categoryId}>
                    {category.categoryTitle}
                  </option>
                ))}
              </Input>
            </div>

            <Container className="text-center">
              <Button type="submit" className="rounded-0" color="primary">
                Create Post
              </Button>
              <Button className="rounded-0 ms-2" color="danger">
                Reset Content
              </Button>
            </Container>
          </Form>
          {content}
        </CardBody>
      </Card>
    </div>
  );
};
export default AddPost;
