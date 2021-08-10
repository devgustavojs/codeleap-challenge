
export async function createPost(username: string, title : string, content : string){
  try{
    fetch('https://dev.codeleap.co.uk/careers/', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method:"POST", 
      body: JSON.stringify({username: username, title: title, content: content})
    })
    return true;
  }catch{
    return false;
  }

}