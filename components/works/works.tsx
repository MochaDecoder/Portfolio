import SectionHeader from '../sectionHeader';
import Work from './work';

interface Work {
  title: string
  image: string
  year: string
  category: string
  description: string
  [key: string]: string
}

export default function Works({ works }: { works: Work[] }) {
  return (
    <section className='px-6'>
      <div className='max-w-4xl mx-auto py-12'>
        <SectionHeader title='Featured work' href='#' />
        <div className='flex flex-col gap-2'>
          {works.map((workItem) => (
            <Work key={workItem.title} item={workItem} />
          ))}
          ;
        </div>
      </div>
    </section>
  );
}