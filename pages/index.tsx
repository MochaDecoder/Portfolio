import Head from 'next/head'
import IntroHeader from "../components/introduction";
import RecentPosts from "../components/posts/posts";
import FeaturedWork from "../components/works/works";
import { getAllPosts } from './lib/api';

interface Post {
  slug: string
  [key: string]: string
}

export default function Home({ posts }: { posts: Post[] }) {
  return (
    <div>
      <Head>
        <title>NextJS Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <IntroHeader />
      <RecentPosts posts={posts} />
      <FeaturedWork />
    </div>
  )
}

export async function getStaticProps() {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
}