import Image from "next/image";
import Introduction from "./components/introduction";
import Posts from "./components/posts/posts";

export default function Home() {
  return (
    <section className="flex flex-col gap-20">
      <Introduction />
      <Posts />
    </section>
  )
}
