import { useContext } from "react";
import { useRef } from "react";
import { PostList } from "../store/post-list-store";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const navigate = useNavigate()
  const {addPost}=useContext(PostList); 
  const userIdElement = useRef();
  const userTitleElement = useRef();
  const userBodyElement = useRef();
  const userReactionsElement = useRef();
  const userTagsElement = useRef();

  const handleSubmit=(event)=>{
   event.preventDefault();
   
   const userId = userIdElement.current.value;
   const title = userTitleElement.current.value;
   const body = userBodyElement.current.value;
   const reactions = userReactionsElement.current.value;
   const tags = userTagsElement.current.value.split(" ");


    userIdElement.current.value ="";
    userTitleElement.current.value="";
    userBodyElement.current.value="";
    userReactionsElement.current.value="";
    userTagsElement.current.value="";


    addPost(userId, title, body, reactions, tags);

    navigate("/")



  }

  return (
    
      <form className="create-post"   onSubmit={handleSubmit}>

      <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            Enter User Id here
          </label>
          <input
            type="text"
            ref={userIdElement}
            className="form-control"
            id="userId"
            placeholder="Your user Id"
           />
          
        </div>


        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            ref={userTitleElement}
            className="form-control"
            id="title"
            placeholder="How are you feeling today....."
           />
          
        </div>


        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post Content
          </label>
          <textarea
            type="text"
            ref={userBodyElement}
            rows="4"
            className="form-control"
            id="body"
            placeholder="tell us more about it"
           />
          
        </div>


        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">
            Number of reactions
          </label>
          <input
            type="text"
            ref={userReactionsElement}
            className="form-control"
            id="reactions"
            placeholder="How many people reacted to this post"
           />
          
        </div>




        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Enter hashtags here
          </label>
          <input
            type="text"
            ref={userTagsElement}
            className="form-control"
            id="tags"
            placeholder="Please enter tags using space"
           />
          
        </div>
        
        <button type="submit" className="btn btn-primary">
           Post
        </button>
      </form>
    
  );
};

export default CreatePost;
