
import { userState } from '../../redux/username/username.reducer';

import { useSelector } from 'react-redux';

import { useState } from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useFeed } from '../../hooks/useFeed';

import { Header } from '../../components/Header';
import { NewPost } from '../../components/NewPost';
import { Post } from '../../components/Post';

import './styles.scss'

export function Feed(){
  let history = useHistory()

  const {postsData, uGetPosts} = useFeed();

  const [username, setUsername] = useState('');
  const [allPostsData, setAllPostsData] = useState();

  const storeUsername = useSelector<userState, userState["username"]>(state => state.username);

  async function fetchNewPost(){
    const getPostsResponse = await uGetPosts();
    if(getPostsResponse){
      return true;
    }else{
      return false;
    }
  }

  useEffect(() => {
    if(typeof storeUsername != "string"){
      alert('Please, log in.');
      history.push('/');
    }else{
      setUsername(storeUsername);
      uGetPosts();
    }
    // eslint-disable-next-line
  }, []);

  return(
    <div className="feed">
      <Header />

      <div className="pageContent">
        <NewPost 
          username={username} 
          fetchNewPost={fetchNewPost}
        />
        {postsData?.map(post =>{
          return(
            <Post
              key={post.id} 
              data={post} 
              username={username} 
              fetchNewPost={fetchNewPost}
            />
          )
        })}
      </div>
    </div>
  )
}