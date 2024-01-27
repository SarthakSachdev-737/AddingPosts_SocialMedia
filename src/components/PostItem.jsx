import { MdDelete } from "react-icons/md";
import {SocialMediaContext} from "../store/socialMediaStore";
import { useContext } from "react";


function PostItem({ Post }) {

  let {DeletePost} = useContext(SocialMediaContext);

  return (
    <div className="card s-post">
      <div className="card-body">
        <h5 className="card-title">{Post.title}</h5>
        <p className="card-text">{Post.body}</p>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger s-delBadge " onClick={()=>(DeletePost(Post.id))}>
        <MdDelete />
        </span>
        <div className="s-tags">
          {Post.tags.map((tag) => (
            <span className="badge text-bg-primary s-tag">{tag}</span>
          ))}
        </div>
        <div className="alert alert-success s-reactions" role="alert">
          {`This post is reacted by ${Post.reactions} people`}
        </div>
      </div>
    </div>
  );
}

export default PostItem;
