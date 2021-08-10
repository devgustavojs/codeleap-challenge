
interface UpdatedPost{
  title: string,
  content: string
}

export async function editPost(postId: number, newData: UpdatedPost){
  try{
    fetch(`https://dev.codeleap.co.uk/careers/${postId}/`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify({title: newData.title, content: newData.content}),
    })
    return true;
  }catch{
    return false;
  }

}