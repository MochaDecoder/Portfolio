
import ResponsiveCarousel from '@/components/carousel';
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
  return {
    props: work,
  };
}

export default function WorkPage(work: WorkType) {
  return (
    <section className='px-6'>
      <div className='max-w-4xl mx-auto py-12'>
        <div className='mx-auto'>
          <div className='font-mono text-2xl font-bold'>{work.title}</div>
          <div className='font-mono text-gray-500'>{work.description}</div>
          <ResponsiveCarousel imageList={work.imageList} />
        </div>
      </div>
    </section>
  )
}