import Image from 'next/image';
import { Control, useWatch } from 'react-hook-form';

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

  const arr = Array.from({ length: 40 }, (_, i) => i);
  return (
    <section className='basis-1/2 h-full border-r-2 py-3 px-5'>
      <div
        data-itemName='paper-content'
        className='w-[557px] h-[788px] max-h-[788px] border py-8'
      >
        <h2 className={lexend.className + ' text-2xl font-bold mb-4'}>
          Happiness Catalogue
        </h2>
        <div
          data-itemName='todo-item-parent'
          className='flex flex-col flex-wrap border border-yellow-300 items-start h-[450px] w-[450px]'
        >
          {arr.map((item) => {
            return (
              <div
                key={item.toString()}
                className='flex items-start space-x-1 border w-52'
                data-itemName='todo-item'
              >
                <div>
                  <Image
                    src='/images/rect.svg'
                    alt='rectangle icon'
                    width={13}
                    height={13}
                    className='flex-1'
                  />
                </div>
                <p className='text-gray-500 text-sm'>
                  Going to cycling countryside dasdas dasd
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
