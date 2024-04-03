
'use client'
import { useEffect, useState } from "react"
import GetData from "./GetData"
import DeleteData from "./DeleteData"

export default function ShowData() {
    const [blogs,setBlogs] = useState<[]>([])
    useEffect(() =>{
        const fetchData = async () =>{
            const data =  await GetData()
            setBlogs(data)
        }   
        fetchData()
    },[blogs])


  return (
    <div className="px-5 py-5">This is all blogs

        {blogs&& blogs.map((blog:any,index:any) =>(
            <div key={index}  className="">
                <p className="bg-blue-100 text-2xl mb-2 rounded-md px-1 py-2 ">{blog.blog}</p>
                <DeleteData id={blog.id}/>
            </div>
        ))  }
    </div>

  )
}
