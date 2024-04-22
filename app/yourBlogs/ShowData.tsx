'use client'
import { useEffect} from "react"
import GetData from "./GetData"
import DeleteData from "./DeleteData"
import UpdateData from "./UpdateData"
import { useBlogStore } from "../store/hookStore"


export default function ShowData() {
    const {blogs,setBlogs}:any =useBlogStore()
    useEffect(() =>{
        const fetchData = async () =>{          
            const data =  await GetData()
            setBlogs(data)
        }   
        fetchData()
    },[blogs])


  return (
    <div className="px-5 py-5">
        <p className="text-lime-900">This is all your blogs
        </p>

        {blogs&& blogs.slice().reverse().map((blog:any,index:any) =>(
            <div key={index}  className="">
                <p className="bg-blue-100 text-xl mb-2 rounded-md px-1 py-2 ">{blog.Blog}</p>
                <UpdateData id = {blog.Id}/>
                <DeleteData id={blog.Id}/>
            </div>
        ))  }
    </div>

  )
}
