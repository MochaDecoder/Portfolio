
import { getAllWork, getWorkBySlug, WorkType } from '@/lib/api';

export async function getStaticPaths() {
  const works = getAllWork();

  return {
    paths: works.map((work: WorkType) => {
      return {
        params: {
          slug: work.slug,
        },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const work = getWorkBySlug(params.slug);
  console.log(work)
  return {
    props: work,
  };
}

export default function WorkPage(work: WorkType) {
  console.log(work)
  return (
    <section className='px-6'>
      <div className='max-w-4xl mx-auto py-12'>
        <div className='mx-auto'>
          <div>{work.title}</div>
          {/* <h1>{frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: md.render(content) }} /> */}
        </div>
      </div>
    </section>
  )
}