import Image from "next/image";
import FirstPage from "./components/FirstPage";
import Link from "next/link";
import ShowData from "./yourBlogs/ShowData";
import FirstShow from "./yourBlogs/FirstShow";

export default function Home() {
  return (
    <main className="px-5 py-2">
        <p className="pb-5 text-lime-900 text-xl">This is blogging for dev</p>
      <div className="nav flex gap-10 py-2">
      <Link href="/yourBlogs">
        <p className="bg-blue-200 px-2 py-1 rounded-md text-xl">
        Your blogs
        </p>
        </Link>
      <Link href="/write">
        <p className="bg-green-200 px-2 py-1 text-xl rounded-md">Write</p></Link>
      </div>
      <p className="text-center">All Blogs</p>
      <FirstShow/>
    </main>
  );
}
