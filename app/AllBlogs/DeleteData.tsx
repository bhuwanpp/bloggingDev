
export default  function DeleteData({id}:any) {
  const server = process.env.NEXT_PUBLIC_BACKEND_SERVER_URL
  console.log(server)
  const deleteData = async() =>{
    const response = await fetch(`${server}/blogs/${id}`,{
        method:'DELETE'
    })
    if(!response.ok){
        console.log('error to delete the data',)
    }else{
      console.log('delete successfully')
    }
  }
    
  return (
    <>
    <div className=" px-2 py-1 bg-red-200 mb-1 w-20 text-center rounded-md">
        <button onClick={deleteData}>Delete </button>
    </div>  
    </>
  )
}
