import { privateAxios } from "./Helper";
import { myAxios } from "./Helper";

// create post function
export const createPost = (postData) => {
  console.log(postData);
  return privateAxios
    .post(
      `/api/user/${postData.userId}/category/${postData.categoryId}/posts`,
      postData
    )
    .then((response) => response.data);
};

// get all posts
export const loadAllPosts = () => {
  return myAxios.get(`api/posts`).then((response) => response.data);
};
