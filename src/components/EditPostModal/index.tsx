import { useEffect } from 'react';
import Modal from 'react-modal';

import { useButton } from '../../hooks/useButton';
import { useFeed } from '../../hooks/useFeed';

import { Button } from '../Button';

interface PostItem{
  id: number,
  username: string,
  created_datetime: Date,
  title: string,
  content: string
}

interface EditPostModalProps{
  data: PostItem,
  isOpen: boolean,
  onRequestClose: () => void,
}

export function EditPostModal({data, isOpen, onRequestClose}: EditPostModalProps){
  const { isActive, input, textarea, inputEnteredValue, setInputEnteredValue, textareaEnteredValue, setTextareaEnteredValue }= useButton(2);
  const { uEditPost } = useFeed();

  useEffect(() =>{
    setInputEnteredValue(data.title);
    setTextareaEnteredValue(data.content);
    
    // eslint-disable-next-line
  }, [])

  async function handleEditPost(){
    await uEditPost(data.id, {title: inputEnteredValue, content: textareaEnteredValue});
    onRequestClose() 
    
  }
  
  return(
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="react-modal-content"
      overlayClassName="react-modal-overlay"
    >
      <form onSubmit={e => e.preventDefault()}>
        <h1>Edit Post</h1>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" placeholder="Hello world" value={inputEnteredValue} {...input}/>
        <label htmlFor="content">Content</label>
        <textarea id="content" placeholder="Content here" value={textareaEnteredValue} {...textarea}></textarea>
        <Button isActive={isActive} value="SAVE" onClick={handleEditPost}/>
      </form>
    </Modal>
  )
}