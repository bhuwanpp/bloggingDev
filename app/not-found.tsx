import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='text-center pt-20 text-xl'>
      <h2 className='pb-2'>Not Found</h2>
      <p className='pb-5'>Could not find requested resource</p>
      <button className='bg-red-300 rounded-md px-2 py-1'>
      <Link href="/">Return Home</Link>
      </button>
    </div>
  )
}