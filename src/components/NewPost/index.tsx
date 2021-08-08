import { useButton } from '../../hooks/useButton';

import { Button } from '../Button'

import './styles.scss'

//inputEnteredValue textareaEnteredValue
export function NewPost(){
  const {isActive, input, textarea} = useButton(2);

  return(
      <form>
        <h1>What's on your mind?</h1>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" placeholder="Hello world" {...input}/>
        <label htmlFor="content">Content</label>
        <textarea id="content" placeholder="Content here" {...textarea}></textarea>
        <Button isActive={isActive} value="CREATE"/>
      </form>
  )
}