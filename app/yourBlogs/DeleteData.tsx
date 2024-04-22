
export default  function DeleteData({id}:any) {
  const server = process.env.NEXT_PUBLIC_BACKEND_SERVER_URL
  const deleteData = async() =>{
    const response = await fetch(`${server}/blogs/${id}`,{
        method:'DELETE'
    })
    if(!response.ok){
        console.log('error to delete the data',)
        console.log(id)
    }else{
      console.log('delete successfully')
    }
  }
    
  return (
    <>
    <div >
        <button className="px-3 text-base py-1 bg-red-200 hover:bg-red-300 mb-1 
         text-center rounded-md" onClick={deleteData}>Delete </button>
        
    </div>  
    </>
  )
}
