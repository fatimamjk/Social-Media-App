import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: {},
  addPost: () => {},
  deletePost: () => {},
});
const postListReducer = (currPostList, action) => {

  let newPostList = currPostList;

  if(action.type ==='DELETE_POST'){
    newPostList = currPostList.filter(post => post.id !== action.payload.postID)
  }
  else if ( action.type === 'ADD_POST'){
    newPostList= [action.payload,...currPostList];
  }
  return  newPostList;
};
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );
  const addPost = (Id, titlePost, bodyPost, reactionsPost, tagsPost) => {
   
   dispatchPostList({
    type : "ADD_POST",
    payload:{
      id: Date.now(),
      title: titlePost,
      body: bodyPost,
      reactions: reactionsPost,
      userId:Id,
      tags: tagsPost,
    }
   })
     
  };

  const deletePost = (postID) => {
     dispatchPostList({
      type :"DELETE_POST",
      payload:{
        postID,
      },
     })
  };

  return (
    <PostList.Provider
      value={{ postList: postList, addPost: addPost, deletePost: deletePost }}
    >
      {children}
    </PostList.Provider>
  );
};
const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Islamabad",
    body: "Hi Friends, I am going to Islamabad for my vacations.Hope to enjoy a lot.Peace out",
    reactions: "2",
    userId: "user-4",
    tags: ["vacations", "islamabad", "enjoying"],
  },
  {
    id: "2",
    title: "Geaduated",
    body: "Hi Friends,cant believe i have completed my graduation!!",
    reactions: "21",
    userId: "user-9",
    tags: ["graduated", "enjoying"],
  },
];
export default PostListProvider;
