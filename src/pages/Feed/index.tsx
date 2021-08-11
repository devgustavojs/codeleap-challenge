
import { userState } from '../../redux/username/username.reducer';

import { useSelector } from 'react-redux';

import { useState } from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { Header } from '../../components/Header';
import { NewPost } from '../../components/NewPost';
import { Post } from '../../components/Post';
import { LoadMorePosts } from '../../components/LoadMorePosts';
import { EndOfPosts } from '../../components/EndOfPosts';

import './styles.scss'

interface PostItem {
  id: number,
  username: string,
  created_datetime: Date,
  title: string,
  content: string,
}


export function Feed(){
  let history = useHistory();
  
  const [username, setUsername] = useState('');
  const [allPostsData, setAllPostsData] = useState<PostItem[]>([]);
  
  const [nextPage, setNextPage] = useState('');

  const storeUsername = useSelector<userState, userState["username"]>(state => state.username);

  async function fetchNewPost(){
      try{
        fetch('https://dev.codeleap.co.uk/careers/')
        .then(response => response.json())
        .then((data) => {
          setAllPostsData(data.results);
          setNextPage(data.next.replace("http", "https"));
        });
      }catch(err){
         throw err;
      }
  }

  async function fetchNextPage(nextData: string){
    try{
      fetch(nextData)
      .then(response => response.json())
      .then(data => {
        setNextPage(data.next.replace("http", "https"));
        setAllPostsData([...allPostsData, ...data.results]);
      })
    }catch(err){
      throw err;
    }
  }


  useEffect(() => {
    if(typeof storeUsername != "string"){
      alert('Please, log in.');
      history.push('/');
    }else{
      setUsername(storeUsername);
      fetchNewPost();
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
        {allPostsData.map(post =>{
          return(
            <Post
              key={post.id} 
              data={post}
              username={username} 
              fetchNewPost={fetchNewPost}
            />
          )
        })}
        {nextPage ? <LoadMorePosts key={0} fetchNextPage={() => {fetchNextPage(nextPage)}} /> : <EndOfPosts/>}
      </div>
      
    </div>
  )
}