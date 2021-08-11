import { FaArrowDown } from 'react-icons/fa'

import './styles.scss'

interface LoadMorePostsProps{
  fetchNextPage: () => void,
}

export function LoadMorePosts({fetchNextPage} : LoadMorePostsProps){

  return (
    <button className="loadPosts" onClick={fetchNextPage}>
      LOAD MORE POSTS 
      <FaArrowDown />
    </button>
  )
}