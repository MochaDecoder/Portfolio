import fs from 'fs'
import matter from 'gray-matter'

export async function generateStaticParams() {
  const files = fs.readdirSync('./public/mockup');

  return files.map((fileName) => ({
    slug: fileName.replace('.md', '')
  }));
}

async function getPostPage(slug: string) {
  const fileName = fs.readFileSync(`./public/mockup/${slug}.md`, 'utf-8');
  const { data: frontmatter, content } = matter(fileName);
  return {
    frontmatter,
    content
  }
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPostPage(params.slug)
  return (
    <section className='px-6'>
      <div className='max-w-4xl mx-auto py-12'>
        <div className='mx-auto'>
          <h1>{post.frontmatter.title}</h1>
          <div>{post.content}</div>
        </div>
      </div>
    </section>
  )
}