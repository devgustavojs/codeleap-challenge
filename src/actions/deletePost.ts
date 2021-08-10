export async function deletePost(id: number){
  try{
    fetch(`https://dev.codeleap.co.uk/careers/${id}/`, {
      method: 'DELETE',
    })
    return true;
  }catch(err){
    return false;
  }

}