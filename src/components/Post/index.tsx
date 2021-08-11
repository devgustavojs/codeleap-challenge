import Moment from 'react-moment';

import { useState } from 'react';
import { useFeed } from '../../hooks/useFeed';

import { EditPostModal } from '../EditPostModal';
import { DeletePostModal } from '../DeletePostModal';

import {FaTrash, FaEdit} from 'react-icons/fa';

import './styles.scss';
interface PostItem{
  id: number,
  username: string,
  created_datetime: Date,
  title: string,
  content: string,
}
interface PostProps{
  data: PostItem,
  username: string,
  fetchNewPost: () => void,
}

export function Post({data, username, fetchNewPost}:PostProps){
  const {uDeletePost} = useFeed();

  const [isEditPostModalOpen, setIsEditPostModalOpen] = useState(false);
  const [isDeletePostModalOpen, setIsDeletePostModalOpen] = useState(false);

  async function handleInputDelete(){   
    try{
      const deletePostResponse = await uDeletePost(data.id);
      if(deletePostResponse === 204){
        handleCloseDeletePostModal();
      }else{
        alert('Error deleting post');
      }
    }catch(err){
      throw err;
    }

  }

  function handleOpenDeletePostModal(){
    setIsDeletePostModalOpen(true);
  }

  function handleCloseDeletePostModal(){
    fetchNewPost();
    setIsDeletePostModalOpen(false);
  }

  function handleOpenEditPostModal(){
    setIsEditPostModalOpen(true);
  }

  function handleCloseEditPostModal(){
    fetchNewPost();
    setIsEditPostModalOpen(false);
  }
  
  return(
    <>
    <div className="post">
      <header>
        <h1>{data.title}</h1>
        {username === data.username ? 
        <>
          <EditPostModal 
            data={data}
            isOpen={isEditPostModalOpen}
            onRequestClose={handleCloseEditPostModal}
          />
          <DeletePostModal 
            isOpen={isDeletePostModalOpen}
            onRequestClose={handleCloseDeletePostModal}
            handleInputDelete={handleInputDelete}
          />
          <div className="icons">
            <FaTrash onClick={handleOpenDeletePostModal}/>
            <FaEdit onClick={handleOpenEditPostModal}/>
          </div> 
        </>
        : ''}
      </header>
      <div className="postInfos">
        <p className="username">@{data.username}</p>
        <p><Moment fromNow>{data.created_datetime}</Moment></p>
      </div>
      <p className="postContent">
     {data.content}
      </p>
    </div>
    </>
  )
}