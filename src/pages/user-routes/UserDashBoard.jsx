import React from "react";
import { Container } from "reactstrap";
import AddPost from "../../components/AddPost";
import Base from "../../components/Base";

const UserDashBoard = () => {
  return (
    <div>
      <Base>
        <Container>
          <AddPost />
        </Container>
      </Base>
    </div>
  );
};

export default UserDashBoard;
