import React, { useContext } from 'react'
import Post from './Post.jsx'
import { PostList as PostListData } from '../store/post-list-store.jsx'

function PostList() {
   const {postList}= useContext(PostListData)
   
    return (
        <>
        {postList.length === 0 && <WelcomeMessage />}
        {postList.map((post)=>(<Post key={post.id} post={post}/>))}

        </>
    )
}

export default PostList
