
'use client'
import { useEffect } from "react"
import GetData from "./GetData"
import { useBlogStore } from "../store/hookStore"

export default function FirstShow() {
    const {blogs,setBlogs}:any=useBlogStore()
    useEffect(() =>{
        const fetchData = async () =>{
            const data =  await GetData()
            setBlogs(data)
        }   
        fetchData()
    },[blogs])


  return (
    <div className=" py-5">
        <p className="text-lg text-lime-900 pb-3">Reading 👩🏻‍💻 -&gt; open your  mind</p>

        {blogs&& blogs.slice().reverse().map((blog:any,index:any) =>(
            <div key={index}  className="">
                <p className="bg-blue-100 text-xl mb-2 rounded-md px-1 py-2 ">{blog.Blog}</p>
            </div>
        ))  }
    </div>

  )
}
