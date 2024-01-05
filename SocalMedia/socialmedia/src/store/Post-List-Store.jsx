import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addpost: () => {},
  addInitialPosts: () => {},
  deletepost: () => {},
});

export const PostListProvider = ({ children }) => {
  const postListReducer = (currPostList, action) => {
    let newPostList = currPostList;
    if (action.type === "DELETE_POST") {
      newPostList = currPostList.filter(
        (post) => post.id !== action.payload.postId
      );
    } else if (action.type === "ADD_POST") {
      newPostList = [action.payload, ...currPostList];
    } else if (action.type === "ADD_INITIAL_POST") {
      newPostList = action.payload.posts;
    }
    return newPostList;
  };
  const [postList, dispatchPostist] = useReducer(
    postListReducer,
    DEFAULT_POSTLIST
  );

  const addInitialPosts = (posts) => {
    dispatchPostist({
      type: "ADD_INITIAL_POST",
      payload: {
        posts,
      },
    });
  };
  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    console.log(userId, postTitle, postBody, reactions, tags);
    dispatchPostist({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        USerId: userId,
        tags: tags,
      },
    });
  };
  const deletepost = (postId) => {
    dispatchPostist({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };
  return (
    <PostList.Provider
      value={{ postList, addPost, deletepost, addInitialPosts }}
    >
      {children}
    </PostList.Provider>
  );
};
const DEFAULT_POSTLIST = [
  {
    id: "1",
    title: "go to india",
    body: "this is my first trip for india",
    reactions: 15,
    USerId: "user-12",
    tags: ["trip", "india"],
  },
  {
    id: "2",
    title: "pass ho gye",
    body: "b.tech me pass ho gye bina pde dosto",
    reactions: 80,
    USerId: "user-9",
    tags: ["b.tech", "number1"],
  },
];
