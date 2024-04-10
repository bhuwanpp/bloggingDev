import Link from "next/link"

export default function UpdateData({id}:{id:number}) {
  return (
    <div className="pb-4 pt-2">
    
       <Link href={{
        pathname:"/Update",
        query:{id},
       }} className="bg-green-200 rounded-md  px-2 py-2 mb-10  text-md hover:bg-green-300 duration-500">Update

       </Link>
    </div>
  )
}
