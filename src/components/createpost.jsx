import { useRef , useContext} from "react";
import { SocialMediaContext } from "../store/socialMediaStore";


function CreatePost() {
  
const {AddPost} = useContext(SocialMediaContext)


const UserIDElement = useRef();
const TitleElement = useRef();
const ContentElement = useRef();
const ReactionsElement = useRef();
const HashtagsElement = useRef();

const HandleSubmit = (event) => {
  event.preventDefault();
  let UserID = UserIDElement.current.value ;
  let Title = TitleElement.current.value ;
  let Content = ContentElement.current.value ;
  let Reactions = ReactionsElement.current.value ;
  let Hashtags = HashtagsElement.current.value ;

  AddPost(UserID,Title,Content,Reactions,Hashtags)

  UserIDElement.current.value = "";
  TitleElement.current.value = "";
  ContentElement.current.value = "";
  ReactionsElement.current.value = "";
  HashtagsElement.current.value = "";

}



  return (
    <form className="s-createPost" onSubmit={HandleSubmit}>
      <div className="mb-3">
        <label htmlFor="UserID" className="form-label">
          Enter your User-Id 
        </label>
        <input
          type="text"
          className="form-control"
          id="UserID"
          placeholder="Your UserID"
          ref={UserIDElement}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="PostTitle" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="PostTitle"
          placeholder="How are you feeling today..."
          ref={TitleElement}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="PostContent" className="form-label">
          Content
        </label>
        <textarea
          type="text"
          className="form-control"
          id="PostContent"
          placeholder="Tell us more about it..."
          rows="4"
          ref={ContentElement}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="Reactions" className="form-label">
          Number of reactions
        </label>
        <input
          type="text"
          className="form-control"
          id="Reactions"
          placeholder="How many people reacted to it"
          ref={ReactionsElement}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="Hashtags" className="form-label">
          Enter your Hashtags
        </label>
        <input
          type="text"
          className="form-control"
          id="Hashtags"
          placeholder="Enter your Hashtags with space"
          ref={HashtagsElement}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default CreatePost;
