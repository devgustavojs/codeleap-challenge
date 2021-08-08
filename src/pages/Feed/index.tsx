import { useHistory } from 'react-router-dom';

import { userState } from '../../redux/username/username.reducer';

import { useSelector } from 'react-redux';

import { Header } from '../../components/Header';
import { NewPost } from '../../components/NewPost';
import { Post } from '../../components/Post';

import './styles.scss'

export function Feed(){
  let history = useHistory();

  let username = "";

  const storeUsername = useSelector<userState, userState["username"]>(state => state.username);

  if(typeof storeUsername != "string"){
    alert('Please, log in.');
    history.push('/');
  }else{
    username = storeUsername;
  }

  return(
    <div className="feed">
      <Header />
      <div className="pageContent">
        <NewPost />
        <Post />
        <p>{username}</p>
      </div>
    </div>
  )
}