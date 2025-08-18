import { createContext, useReducer } from "react";

export  const PostList=createContext({
    postList: [],
    addPost: (post) => {},
    deletePost: (postId) => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
    if(action.type==='DELETE_POST'){
        newPostList=newPostList.filter(post=>post.id!==action.payload.postId)
     }else if(action.type==='ADD_POST'){
        newPostList=[ action.payload,...newPostList];
     }
    return newPostList;
    }

function PostListProvider({ children }) {
const[postList,dispatchPostList]= useReducer(
    postListReducer,
    []
);
    const addPost = (userId,postTittle,PostBody,Tags,reaction) => {
        dispatchPostList({
            type: "ADD_POST",
            payload: {
        id:Date.now(), 
        title:postTittle,
        body:PostBody,
        reaction:reaction, 
        userId:userId,
        tags: Tags,
            },    
        });
        
    }
    const deletePost = (postId) => {
       dispatchPostList({
            type: "DELETE_POST",
            payload: {
                postId
            },    
        });
        
    }
    return(
        <PostList.Provider value={
           { postList,
            addPost,
            deletePost}
         } >{children}</PostList.Provider>
    )
}

export default PostListProvider;