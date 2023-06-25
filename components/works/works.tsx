import SectionHeader from '../sectionHeader';
import Work from './work';
import { WorkType } from '@/lib/api';

export default function Works({ works }: { works: WorkType[] }) {
  return (
    <section className='px-6'>
      <div className='max-w-4xl mx-auto py-12'>
        <SectionHeader title='Featured work' href='#' />
        <div className='flex flex-col gap-2'>
          {works.map((workItem) => (
            <Work key={workItem.title} item={workItem} />
          ))}
        </div>
      </div>
    </section>
  )
}