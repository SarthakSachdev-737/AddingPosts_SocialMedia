import { createContext, useEffect, useReducer, useState } from "react";

export const SocialMediaContext = createContext({
  PostList: [],
  AddPost: () => {},
  DeletePost: () => {},
});

const SocialMediaReducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  if(action.type === "ADD_POST"){
    newPostList = [action.payload , ...currentPostList]
  }
  else if(action.type === "DEL_POST"){
    newPostList = currentPostList.filter((Post)=>(Post.id !== action.payload))
  }
  else if(action.type === "ADD_INITIAL_POST"){
    newPostList = action.payload;
  }
  return newPostList;
};

function SocialMediaContextProvider({ children }) {
  let [PostList, dispatchPostList] = useReducer(SocialMediaReducer, []);
  let [fetching , setFetching] = useState(false);

  useEffect(()=>{
  setFetching(true);
  fetch('https://dummyjson.com/posts')
  .then(res => res.json())
  .then(obj => {
    setFetching(false);
    return AddInitialPost(obj.posts)
  });
  },[])




  const AddPost = (UserID,Title,Content,Reactions,Hashtags) => {
    const AddAction = {
      type : "ADD_POST",
      payload : {
        id:Date.now(),
        title:Title,
        body:Content,
        reactions:Reactions,
        userID:UserID,
        tags:Hashtags.split(" ")
  
      }
    }
    dispatchPostList(AddAction);
  };

  const AddInitialPost = (InitialPosts) => {
    const AddAction = {
      type : "ADD_INITIAL_POST",
      payload : InitialPosts
    }
    dispatchPostList(AddAction);
  };

  const DeletePost = (DelId) => {
    const delAction = {
      type : "DEL_POST",
      payload : DelId
    };
    dispatchPostList(delAction);
  };

  return (
    <SocialMediaContext.Provider value={{ PostList, AddPost, DeletePost , fetching}}>
      {children}
    </SocialMediaContext.Provider>
  );
}

export default SocialMediaContextProvider;
