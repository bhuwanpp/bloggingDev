'use client'
import { useRouter } from "next/navigation"
import { useRef, useState } from "react"

export default function FirstPage() {
    const [saveShow ,setSaveShow] = useState<boolean>(false)
    const [value,setValue]  = useState<string>('')
    const inputRef:any = useRef<HTMLInputElement>(null)
    const router = useRouter()
    const handleChange = (event:any)=>{
         const val = event.target.value
         console.log(val)
         setValue(val)
         if (val.length>0){
            setSaveShow(true)
         }else{
            setSaveShow(false)
         }

    }
    const handleButton = () =>{
        const input:any = inputRef.current
            if(input.focus()){
                setSaveShow(true)
            }
    }
    const handleSave = async(e:any) =>{
        e.preventDefault()
        const server = process.env.NEXT_PUBLIC_BACKEND_SERVER_URL
        const response = await fetch(`${server}/blogs`,{
            method:'POST',
            body:JSON.stringify({blog:value}),
            headers:{
                'Content-Type':'application/json'
            }
        })
        if(response.ok){
            setValue('')
            router.push('/yourBlogs')
        }else{
            console.log('error to posting data')
        }
        const result = response.json()
    }

  return (
    <div>
        <div className="button text-center py-10">
        <button onClick={handleButton} className=" bg-blue-200 text-xl rounded-md px-2 py-1"> Write</button>
        </div>
        <div className="input px-20 py-10">
        <textarea onChange={handleChange}  value={value} ref={inputRef} className=" bg-gray-100 focus:bg-gray-150 focus:border
         border-gray-700 rounded-md
         h-96 w-full resize-none  outline-none p-2  tracking-wide" />
        </div>
        <div className="button text-center ">
            {saveShow&&
        <button onClick={handleSave} className=" bg-blue-200 text-xl rounded-md px-2 py-1"> Save
             </button>
            }
        </div>
    </div>
  )
}
