import {
  useForm,
  useFieldArray,
  useWatch,
  SubmitHandler,
} from 'react-hook-form';
import { ResultPage } from './ResultPage';

import { useRef } from 'react';

interface INotesData {
  notes: { noteTitle: string }[];
}

interface ISingleNote {
  singleNoteText: string;
}

export const FormControl = () => {
  const { register, control, handleSubmit, formState } = useForm({
    defaultValues: {
      notes: [{ noteTitle: '', id: 'id12_12345' }],
    },
    mode: 'onBlur',
  });

  // multiple note inputs
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'notes',
  });
  const onSubmit = (data: INotesData) => console.log(data);

  // single note
  const {
    register: registerSingle,
    handleSubmit: handleSubmitSingle,
    setValue,
  } = useForm<ISingleNote>();

  const onSubmitSingle: SubmitHandler<ISingleNote> = (data) => {
    // console.log(data);
    append(
      {
        noteTitle: data.singleNoteText,
        id: generateUniqueKey(data.singleNoteText),
      },
      { shouldFocus: false }
    );
    setValue('singleNoteText', '');
  };

  const generateUniqueKey = (pre: string) => {
    return `${pre}_${new Date().getTime()}`;
  };

  return (
    <>
      <section className='basis-1/2 h-full border-r-2 py-3 px-5 bg-slate-50'>
        <div className='relative mb-4'>
          <form onSubmit={handleSubmitSingle(onSubmitSingle)}>
            <label id='todo-id' className='absolute left-1 top-3'>
              {'🪄'}
            </label>
            <input
              {...registerSingle('singleNoteText')}
              defaultValue={''}
              placeholder='Type and press Enter'
              className='w-full border border-gray-300 pl-8 py-3 focus:outline-none focus:border-blue-400 rounded transition-colors duration-200'
              maxLength={65}
            />
          </form>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* <img src="images/{ds}" alt="" /> */}
          <h2>Entered notes</h2>
          <ul className='mb-2'>
            {fields.map((item, index) => {
              return (
                <li
                  key={item.id}
                  className='relative [&>button]:hover:visible mb-1 '
                >
                  <label
                    id='todo-id'
                    className='absolute left-2 top-3 tabular-nums text-sm'
                  >
                    {index + 1}.
                  </label>
                  <input
                    {...register(`notes.${index}.noteTitle` as const)}
                    defaultValue={item.noteTitle}
                    placeholder='Edit your note'
                    className='w-full border border-gray-300 pl-10 py-2 focus:outline-none focus:border-blue-600 rounded transition-colors duration-200'
                    maxLength={65}
                  />
                  <button
                    type='button'
                    onClick={() => remove(index)}
                    className='h-full w-10 absolute right-0 top-0 text-gray-500 border rounded-full bg-gray-100 invisible'
                  >
                    &#10006;
                  </button>
                </li>
              );
            })}
          </ul>
          <button
            type='button'
            onClick={() =>
              append({ noteTitle: '', id: generateUniqueKey('pre') })
            }
            className='border border-blue-600 rounded-md px-3 py-1 text-blue-600 hover:bg-blue-600 hover:text-white'
          >
            Add new item
          </button>
        </form>
        <hr className='my-8' />
      </section>

      <ResultPage control={control} />
    </>
  );
};
