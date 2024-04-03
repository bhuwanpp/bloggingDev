import Image from "next/image";
import FirstPage from "./components/FirstPage";
import Link from "next/link";

export default function Home() {
  return (
    <main className="px-2 py-2">This is blogging platform
      <br />
      <Link href="/AllBlogs">all blogs</Link>
      <FirstPage/>
    </main>
  );
}
