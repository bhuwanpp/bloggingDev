'use client'

import { Suspense, useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import GetData from "../yourBlogs/GetData"
export  default function Update(){
  return(
    <Suspense fallback={<div>Loading...</div>}>
      <UpdateContent/>
    </Suspense>
  )
}

function UpdateContent() {
  const [updateBlog,setUpdateBlog] = useState('')
  const params = useSearchParams()
    const id = params.get('id')
    useEffect(() =>{
        const fetchData = async () =>{          
            const data =  await GetData()
            data.forEach((blog:any) =>{
              if(blog.Id.toString() === id){
              setUpdateBlog(blog.Blog)
              }
            })
        }   
        fetchData()
    },[id])

  const server = process.env.NEXT_PUBLIC_BACKEND_SERVER_URL
  const router = useRouter()
  const updateData= async() =>{
    const response = await fetch(`${server}/blogs/${id}`,{
        method:'PUT',
        body:JSON.stringify({blog:updateBlog}),
        headers:{'Content-type':'application/json'}
    })
    console.log(response.status)
    if(!response.ok){
        console.log('error to update the data')
        console.log('check',server,id)
    }if(response.ok){
      console.log('update successfully')
      router.push('/yourBlogs')
    }
  }
  return (
    <div className="pb-4 pt-2 px-10">
        <p className="text-md text-lime-900">You and change or update</p>
        <br />
        <textarea value={updateBlog} onChange={(e) => setUpdateBlog(e.target.value)} 
         className="border border-black h-32 w-96 outline-none p-2" ></textarea>
        <br />
        <div className="div  pl-20 py-2">
        <button onClick={updateData} className="bg-blue-200 rounded-md text-xl  px-3 py-1 hover:bg-blue-300">
            Save
        </button>
        </div>

    </div>
  )
}
