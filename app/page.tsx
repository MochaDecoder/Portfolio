import Image from "next/image";
import Introduction from "./components/introduction";
import Posts from "./components/posts/posts";
import Works from "./components/works/works";

export default function Home() {
  return (
    <section className="flex flex-col gap-20">
      <Introduction />
      <Posts />
      <Works />
    </section>
  )
}
