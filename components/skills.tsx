import { Skill } from '@/lib/api';
import SectionHeader from './sectionHeader';
// @ts-ignore
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

export default function FeaturedSkill({ skills }: { skills: Skill[] }) {
  return (
    <section className='px-6'>
      <div className='max-w-4xl mx-auto py-12'>
        <SectionHeader title='My Skills' href='/skills' />
        <div className='flex flex-col gap-2'>
          {skills.map((skill, i) => (
            i < 4 && <div key={i} className='flex flex-row justify-between items-center'>
              <div className='w-[200px]'>
                <h3 className='text-xl font-semibold'>{skill.title}</h3>
              </div>
              <Progress theme={{
                success: {
                  symbol: '😁',
                  color: 'rgb(15, 228, 180)'
                },
                error: {
                  symbol: '🧐',
                  color: 'rgb(250, 220, 220)'
                },
                active: {
                  symbol: '🥺',
                  color: 'rgb(230, 240, 25)'
                },
              }} percent={skill.percent} status={skill.status} />
            </div>
          ))
          }
        </div>
      </div>
    </section>
  )
}