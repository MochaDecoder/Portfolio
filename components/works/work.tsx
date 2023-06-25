import Image from 'next/image';
import { WorkType } from "@/lib/api";

export default function Work({ item }: { item: WorkType }) {
  return (
    <article className='flex items-center border-b-2 py-6'>
      <Image src={item.image} className='w-1/3 mr-6 rounded-lg' alt="work picture" width={500}
        height={335} />
      <div>
        <h3 className='text-2xl mb-2 font-medium'>{item.title}</h3>
        <span className='text-gray-600 mb-4 block'>
          <time className='bg-blue-800 text-white px-5 py-1.5 mr-4 rounded-xl'>
            {item.year}
          </time>
          {item.category}
        </span>
        <p className='line-clamp-3'>{item.description}</p>
      </div>
    </article>
  )
}