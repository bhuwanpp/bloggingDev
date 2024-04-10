import Link from "next/link";

export default function Navbar() {
  return (
    <div className="px-5 py-5">
        <p className="pb-5 text-lime-900 text-xl">This is blogging for dev</p>
        <Link href="/" className="bg-rose-300 text-lg px-3 py-2 rounded-lg"> Home</Link>
    </div>
  )
}
