import { createContext, useReducer } from "react";

export  const PostList=createContext({
    postList: [],
    addPost: () => {},
    addInitialPosts:()=>{},
    deletePost: () => {},

});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
    if(action.type==='DELETE_POST'){
        newPostList=newPostList.filter((post)=>post.id!==action.payload.postId)
     }else if(action.type==='ADD-INITIAL_POSTS'){
        newPostList=action.payload.posts;
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
     const addInitialPosts = (posts) => {
        dispatchPostList({
         type: "ADD-INITIAL_POSTS",
         payload: {
                  posts,
            },    
        });
        
    }
    const deletePost = (postId) => {
       dispatchPostList({
            type: "DELETE_POST",
            payload: {
                postId,
            },    
        });
        
    }
    return(
        <PostList.Provider value={
           { postList,
            addPost,
            addInitialPosts,
            deletePost}
         } >{children}</PostList.Provider>
    )
}

export default PostListProvider;