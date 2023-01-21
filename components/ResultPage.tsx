import Image from 'next/image';
import { Control, useWatch } from 'react-hook-form';
import { moviesData } from './moviesData';

interface INotesData {
  notes: { noteTitle: string }[];
}

import { Lexend } from '@next/font/google';
// If loading a variable font, you don't need to specify the font weight
const lexend = Lexend({ subsets: ['latin'] });

let childRender = 0;
export function ResultPage({ control }: { control: Control<INotesData> }) {
  const value = useWatch({
    control,
    name: 'notes',
  });

  const arr = Array.from({ length: 24 }, (_, i) => i);

  return (
    <section className='basis-1/2 h-full border-r-2 py-3 px-5'>
      <div
        data-itemname='paper-content'
        className='w-[557px] h-[788px] max-h-[788px] border py-8 px-8 flex flex-col'
      >
        <h2 className={lexend.className + ' text-2xl font-bold mb-4'}>
          Marvel Movies Checklist
        </h2>
        <div
          data-itemname='todo-item-wrap'
          className='flex flex-col content-between flex-wrap border-yellow-600 items-start h-[650px] overflow-hidden'
        >
          {moviesData.map((item) => {
            return (
              <div
                key={item.id}
                className='flex items-baseline space-x-2 pt-1 pr-2 border-red-500 w-[240px]'
                data-itemname='todo-item'
              >
                <div className='shrink-0 border-fuchsia-800'>
                  <Image
                    src='/images/rect.svg'
                    alt='rectangle icon'
                    width={13}
                    height={13}
                  />
                </div>
                <p className='text-gray-500 align-middle  border-cyan-400 text-[14px]'>
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <pre>
        child render count: {childRender} {JSON.stringify(value)}
      </pre>
    </section>
  );
}
