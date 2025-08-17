import React, { useContext, useRef } from "react";
import PostListProvider from "../store/post-list-store";
import { PostList } from "../store/post-list-store";

function CreatePost() {

 const {addPost}= useContext(PostList)

  const userIdElement = useRef();
  const postTittleElement= useRef();
  const postBodyElement = useRef();
  const postTagsElement = useRef();
  const postReactionElement = useRef();

  const handleSubmit=(e)=>{
      event.preventDefault();
      const userId=userIdElement.current.value;
      const postTittle=postTittleElement.current.value;
      const PostBody=postBodyElement.current.value;
      const Tags=postTagsElement.current.value.split(" ");
      const reaction=postReactionElement.current.value;
      userIdElement.current.value = "";
      postTittleElement.current.value = "";
      postBodyElement.current.value = "";
      postTagsElement.current.value = "";
      postReactionElement.current.value = "";

      addPost(userId,postTittle,PostBody,Tags,reaction)
  }
  return (
    <form className="createpost" onSubmit={handleSubmit}>
       <div className="mb-3">
        <label htmlFor="userId" className="form-label">
         Enter User ID
        </label>
        <input
          type="text"
          ref={userIdElement}
          className="form-control"
          id="userId"
          placeholder="Enter user ID"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tittle" className="form-label">
          Post Tittle
        </label>
        <input
          type="text"
          ref={postTittleElement}
          className="form-control"
          id="tittle"
          placeholder="Enter post tittle"
        />
      </div>
       <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          ref={postBodyElement}
          rows="3"
          className="form-control"
          id="body"
          placeholder="Enter post content"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Tags
        </label>
        <input
          type="text"
          ref={postTagsElement}
          className="form-control"
          id="tags"
          placeholder="Enter tags separated by commas"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reaction" className="form-label">
          Reaction Count
        </label>
        <input
          type="text"
          ref={postReactionElement}
          className="form-control"
          id="reaction"
          placeholder="peple reacted to this post"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Create Post
      </button>
    </form>
  );
}

export default CreatePost;
