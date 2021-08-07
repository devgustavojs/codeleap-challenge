import { Button } from '../../components/Button'
import './styles.scss'

export function Login(){

  return(
    <div className="login">
      <div className="login-modal">
        <h4>Welcome to CodeLeap network!</h4>
        <p>Please enter your username</p>
        <input type="text" name="username" placeholder="John doe" />
        <Button value="ENTER" />
      </div>
    </div>
  )
}