import { useState } from "react";

import { createPost } from "../actions/createPost";

import { deletePost } from "../actions/deletePost";

import { editPost } from "../actions/editPost";

interface PostItem{
  id: number,
  username: string,
  created_datetime: Date,
  title: string,
  content: string
}

interface editItem{
  title: string,
  content: string
}
export function useFeed(){
  const [postsData, setPostsData] = useState<PostItem[]>();
  
  async function uGetPosts() {
    try{
      fetch('https://dev.codeleap.co.uk/careers/')
      .then(response => response.json())
      .then((data) => { setPostsData(data.results)});
      return true;
     }catch(err){
       console.log(err)
       return false;
     }
  }

  async function uCreatePost(username: string, title: string, content: string){
    const createResponse = await createPost(username, title, content);
    if(createResponse){
      uGetPosts();
    }
    return createResponse;
  }

  async function uDeletePost(postId: number) {
    const deleteResult = await deletePost(postId);

    if(deleteResult){
      uGetPosts();
    };
    return deleteResult;
  }

  async function uEditPost(postId: number, newData: editItem){
    const editResponse = await editPost(postId, newData);

    if(editResponse){
      uGetPosts();
    }

    return editResponse
  }

  return {
    postsData,
    setPostsData,
    uGetPosts,
    uCreatePost,
    uEditPost,
    uDeletePost,
  }
  
}