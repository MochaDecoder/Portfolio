import SectionHeader from "../sectionHeader";
import Post from "./post";

interface Post {
  slug: string
  [key: string]: string
}

export default function Posts({ posts }: { posts: Post[] }) {
  return (
    <section className='bg-indigo-100 px-6 mt-6'>
      <div className='max-w-4xl mx-auto py-12'>
        <SectionHeader title="Recent Posts" href="#" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Post post={posts[0]} />
          <Post post={posts[1]} />
        </div>
      </div>
    </section>
  );
}