import { myAxios } from "./Helper";

// create post function
export const createPost = (postData) => {
  console.log(postData);
  return myAxios
    .post(
      `/user/${postData.userId}/category/${postData.categoryId}/posts`,
      postData
    )
    .then((response) => response.data);
};
