
interface UpdatedPost{
  title: string,
  content: string
}

export async function editPost(postId: number, newData: UpdatedPost){
  try{
    return fetch(`https://dev.codeleap.co.uk/careers/${postId}/`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify({title: newData.title, content: newData.content}),
    }).then(response =>{return response.status})
  }catch(err){
    throw err;
  } 

}