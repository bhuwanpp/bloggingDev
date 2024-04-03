
export default  function DeleteData({id}:any) {
  const deleteData = async() =>{
    const response = await fetch(`http://localhost:4000/blogs/${id}`,{
        method:'DELETE'
    })
    if(!response.ok){
        console.log('error to delete the data')
        console.log(id)
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
