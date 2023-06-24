import Head from 'next/head';
import Post from '../components/posts/post';

export default function Blogs() {
  return (
    <div>
      <Head>
        <title>NextJS Blog</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section className='px-6'>
        <div className='max-w-4xl mx-auto'>
          <h1 className='text-3xl font-bold mb-6'>Blog</h1>
          <Post className='border-b-2' />
          <Post className='border-b-2' />
          <Post className='border-b-2' />
          <Post className='border-b-2' />
        </div>
      </section>
    </div>
  );
}