import Image from 'next/image';
import { Control, useWatch } from 'react-hook-form';
import { moviesData } from './moviesData';
import { RefObject, useRef } from 'react';
import { Button } from './common/Button';

interface INotesData {
  notes: { noteTitle: string; id: string }[];
}
import { DM_Sans } from '@next/font/google';
// If loading a variable font, you don't need to specify the font weight
const outfitFont = DM_Sans({ subsets: ['latin'], weight: '700' });

export function ResultPage({ control }: { control: Control<INotesData> }) {
  const todoItems = useWatch({
    control,
    name: 'notes',
  });

  const ref = useRef<HTMLDivElement>(null);

  return (
    <section className=' h-full border-r-2 py-3 px-3 sm:px-5 bg-slate-50'>
      <Button ref={ref} />
      <div
        ref={ref}
        data-itemname='paper-content'
        className='min-w-[320px] max-w-[557px] h-[500px] sm:h-[788px] border py-10 px-4 sm:px-8 flex flex-col bg-white border-gray-400'
      >
        <h2
          className={
            outfitFont.className +
            ' text-2xl sm:text-4xl font-bold mb-5 sm:mb-8 tracking-tight'
          }
        >
          Checklist
        </h2>
        <div
          data-itemname='todo-item-wrap'
          className='flex flex-col content-between flex-wrap border-yellow-600 items-start sm:h-[618px] overflow-hidden'
        >
          {todoItems.map((item) => {
            return (
              <div
                key={item.id}
                className='flex items-baseline space-x-2 pt-0.5 sm:pt-1 sm:pr-2 border-red-500 w-[150px] sm:w-[240px]'
                data-itemname='todo-item'
              >
                <div className=' border-fuchsia-800 align-top'>
                  <Image
                    src='/images/Rect.svg'
                    alt='rectangle icon'
                    width={9}
                    height={9}
                    className='sm:w-3 sm:h-3'
                  />
                </div>
                <p className='text-gray-500 text-[9px] sm:text-[14px]'>
                  {item.noteTitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <pre>Items: {todoItems.length}</pre>
    </section>
  );
}
