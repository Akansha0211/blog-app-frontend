import React from "react";
import { useEffect } from "react";
import { loadAllPosts } from "../services/post-service";

function NewFeed() {
  useEffect(() => {
    // load all the posts from the server
    loadAllPosts()
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <h1>This is new Feed component</h1>
    </div>
  );
}

export default NewFeed;
