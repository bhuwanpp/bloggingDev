import Link from "next/link";
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'


export default function Navbar() {
  return (
    <div className="main flex justify-between bg-blue-200  px-5 items-center">
    <div className="left file:px-5 py-5">
      
        <Link href="/" className="bg-rose-300 text-lg px-3 py-2 rounded-lg"> Home</Link>
    </div>
    <div className="right pr-10">
       <header>
            <SignedOut>
              <div className="sign bg-green-200 text-xl px-3 py-1 rounded-md">
              <SignInButton />
              </div>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>

    </div>

    </div>

  )
}
