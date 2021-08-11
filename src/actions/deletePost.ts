export async function deletePost(id: number){
  try{
    return fetch(`https://dev.codeleap.co.uk/careers/${id}/`, {
      method: 'DELETE',
    }).then(response => {
      return response.status;
    });
  }catch(err){
    throw err;
  }
}