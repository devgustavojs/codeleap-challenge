export async function createPost(username: string, title : string, content : string){
  try{
    return fetch('https://dev.codeleap.co.uk/careers/', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method:"POST", 
      body: JSON.stringify({username: username, title: title, content: content})
    })
    .then(response => response.json)
    .then((data) => {
      return data;
    })
  }catch(err){
    throw err;
  }
}