import PostItem from "./PostItem";
import { SocialMediaContext } from "../store/socialMediaStore";
import { useContext } from "react";
import NoPostMsg from "./NoPostMsg";
import LoadingSpinner from "./loadingSpinner";

function PostItems() {

  let {PostList} = useContext(SocialMediaContext);
  let {fetching} = useContext(SocialMediaContext);

  return (
    <>
    {fetching  && <LoadingSpinner></LoadingSpinner>}
    {!fetching && (PostList.length === 0 && <NoPostMsg/>)}
    {!fetching && (PostList.map((Post)=>(<PostItem Post={Post} key={Post.id}></PostItem>)))}
    </>
  )
}

export default PostItems;
