import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Button } from '../../components/Button'

import { useButton } from '../../hooks/useButton'

import './styles.scss'

export function Login(){
  let history = useHistory()

 const {isActive, inputEnteredValue, input} = useButton(1);

 const dispatch = useDispatch();

 function handleSetUsername(){
   if(isActive){
    dispatch({type: "SET", payload: inputEnteredValue});
    history.push('/feed');
   }
   else{
     return;
   }
 }
  return(
      <div className="login">
        <div className="login-modal">
          <h4>Welcome to CodeLeap network!</h4>
          <p>Please enter your username</p>
          <input type="text" name="username" placeholder="John doe" {...input} />
          <Button value="ENTER" isActive={isActive} onClick={handleSetUsername}/>
        </div>
      </div>
  )
}