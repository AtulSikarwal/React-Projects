import { useContext, useRef } from "react";
import { PostList } from "../store/Post-List-Store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);
  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";
    addPost(userId, postTitle, postBody, reactions, tags);
  };

  return (
    <>
      <form className=" m-5" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            ENTER THE USER ID
          </label>
          <input
            type="text"
            ref={userIdElement}
            className="form-control"
            placeholder="Enter the USERID"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            POST TITLE
          </label>
          <input
            type="text"
            ref={postTitleElement}
            className="form-control"
            placeholder="Enter the TITLE"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post Content
          </label>
          <textarea
            type="text"
            ref={postBodyElement}
            rows="4"
            className="form-control"
            id="body"
            placeholder="Tell us more about it"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Numbers of Reactions
          </label>
          <input
            type="text"
            ref={reactionsElement}
            className="form-control"
            placeholder="How many people react on this post"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Enter your hashtags here
          </label>
          <input
            type="text"
            ref={tagsElement}
            className="form-control"
            id="tags"
            placeholder="Please enter tags using space"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          post
        </button>
      </form>
    </>
  );
};
export default CreatePost;
