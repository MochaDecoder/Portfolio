import MarkdownIt from 'markdown-it'

import { getAllPosts, getPostBySlug } from '@/lib/api';

export async function getStaticPaths() {
  const posts = getAllPosts();

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  return {
    props: post,
  };
}

export default function PostPage({ frontmatter, content }: { frontmatter: { title: string }, content: string }) {
  const md = new MarkdownIt();
  return (
    <section className='px-6'>
      <div className='max-w-4xl mx-auto py-12'>
        <div className='mx-auto'>
          <h1>{frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: md.render(content) }} />
        </div>
      </div>
    </section>
  )
}