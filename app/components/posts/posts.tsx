import Post from "./post";
import SectionHeader from "../sectionHeader";

export default function Posts() {
  return (
    <section className='bg-indigo-100 px-6'>
      <div className='max-w-4xl mx-auto py-12'>
        <SectionHeader title="Recent Posts" href="#" />
        <div className="grid grid-cols-2 gap-6">
          <Post />
          <Post />
        </div>
      </div>
    </section>
  );
}