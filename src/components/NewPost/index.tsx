import { useButton } from '../../hooks/useButton';
import { useFeed } from '../../hooks/useFeed';

import { Button } from '../Button'

import './styles.scss'
interface NewPostProps{
  username: string,
  fetchNewPost: () => void,
}

export function NewPost({username, fetchNewPost, ...rest}:NewPostProps){

  const {isActive, input, textarea, inputEnteredValue, setInputEnteredValue, textareaEnteredValue, setTextareaEnteredValue} = useButton(2);
  const {uCreatePost} = useFeed();

  async function handleCreateNewPost(){
    const createResponse = await uCreatePost(username, inputEnteredValue, textareaEnteredValue);
    if(createResponse){
      fetchNewPost();
      setInputEnteredValue('');
      setTextareaEnteredValue('');
    }
  }

  return(
      <form onSubmit={e => e.preventDefault()}>
        <h1>{username}, What's on your mind?</h1>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" placeholder="Give your post a cool title" value={inputEnteredValue} {...input}/>
        <label htmlFor="content">Content</label>
        <textarea id="content" placeholder="Tell us here what's on your mind" value={textareaEnteredValue} {...textarea}></textarea>
        <Button isActive={isActive} value="CREATE" onClick={handleCreateNewPost}/>
      </form>
  )
}
