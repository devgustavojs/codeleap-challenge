export interface userState{
  username: string
}

const initialValue= {
  username: ""
}

type Action ={
  type: string,
  payload: string,
}

export function userReducer(state: userState = initialValue, action : Action){
  switch(action.type){
    case "SET":
      return state.username = action.payload
    default:
        return state
  }
}