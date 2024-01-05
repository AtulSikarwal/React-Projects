import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as postListData } from "../store/Post-List-Store";
import WelcomeMsg from "./Welcome";
import LoadingSpineer from "./LoadingSpineer";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(postListData);
  const [fetching, setFatching] = useState(false);

  useEffect(() => {
    setFatching(true);

    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFatching(false);
      });
  }, []);

  return (
    <>
      {fetching && <LoadingSpineer />}
      {!fetching && postList.length === 0 && <WelcomeMsg />}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};
export default PostList;
