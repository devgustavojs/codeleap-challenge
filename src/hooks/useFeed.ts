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
  const [postsData, setPostsData] = useState<PostItem[]>([]);

  async function uCreatePost(username: string, title: string, content: string){
    const createResponse: Promise<PostItem> | any = await createPost(username, title, content);
    setPostsData([createResponse, ...postsData]);
    return postsData;
  }

  async function uDeletePost(postId: number) {
    const deleteResponse = await deletePost(postId);

    return deleteResponse;
  }

  async function uEditPost(postId: number, newData: editItem){
    const editResponse = await editPost(postId, newData);

    return editResponse
  }

  return {
    postsData,
    setPostsData,
    uCreatePost,
    uEditPost,
    uDeletePost,
  }
  
}