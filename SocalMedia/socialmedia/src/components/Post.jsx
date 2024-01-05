import { useContext } from "react";
import { MdDeleteForever } from "react-icons/md";
import { PostList } from "../store/Post-List-Store";
const Post = ({ post }) => {
  const { deletepost } = useContext(PostList);
  return (
    <>
      <div className="card m-3 bg-dark text-white" style={{ width: "30rem" }}>
        <div className="card-body">
          <h5 className="card-title">
            {post.title}
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning"
              onClick={() => deletepost(post.id)}
            >
              <MdDeleteForever />
              <span className="visually-hidden">unread messages</span>
            </span>
          </h5>
          <p className="card-text">{post.body}</p>
          {post.tags.map((tag) => (
            <span className="badge text-bg-secondary m-1" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className="alert alert-dark m-2" role="alert">
          This post has been reacted by {post.reactions}
        </div>
      </div>
    </>
  );
};
export default Post;
