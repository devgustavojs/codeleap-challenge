import {FaTrash, FaEdit} from 'react-icons/fa';

import './styles.scss'

export function Post(){

  return(
    <div className="post">
      <header>
        <h1>My First Post at CodeLeap Network</h1>
        <div className="icons">
          <FaTrash />
          <FaEdit />
        </div>
      </header>
      <div className="postInfos">
        <p className="username">@Victor</p>
        <p>25 minutes ago</p>
      </div>
      <p className="postContent">
      Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula mattis placerat. Duis vel nibh at velit scelerisque suscipit. Duis lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat.
      </p>
    </div>
  )
}