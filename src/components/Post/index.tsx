import Moment from 'react-moment';

import { useState } from 'react';
import { useFeed } from '../../hooks/useFeed';

import { EditPostModal } from '../EditPostModal';

import {FaTrash, FaEdit} from 'react-icons/fa';

import './styles.scss';
import { DeletePostModal } from '../DeletePostModal';
interface PostItem{
  id: number,
  username: string,
  created_datetime: Date,
  title: string,
  content: string
}
interface PostProps{
  data: PostItem,
  username: string,
  fetchNewPost: () => void,
}

export function Post({data, username, fetchNewPost, ...rest}:PostProps){
  const {uDeletePost} = useFeed();

  const [isEditPostModalOpen, setIsEditPostModalOpen] = useState(false);
  const [isDeletePostModalOpen, setIsDeletePostModalOpen] = useState(false);

  async function handleInputDelete(){    
    await uDeletePost(data.id)
    handleCloseDeletePostModal()
  }

  function handleOpenDeletePostModal(){
    setIsDeletePostModalOpen(true);
  }

  async function handleCloseDeletePostModal(){
    await fetchNewPost();
    setIsDeletePostModalOpen(false);
  }

  function handleOpenEditPostModal(){
    setIsEditPostModalOpen(true);
  }

  async function handleCloseEditPostModal(){
    await fetchNewPost();
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