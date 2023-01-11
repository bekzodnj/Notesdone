import { useForm, useFieldArray, useWatch } from 'react-hook-form';
import { ResultPage } from './ResultPage';

interface INotesData {
  notes: { noteTitle: string }[];
}
export const FormControl = () => {
  const { register, control, handleSubmit, formState, watch, reset } = useForm({
    defaultValues: {
      notes: [{ noteTitle: '' }],
    },
    mode: 'onBlur',
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'notes',
  });

  const onSubmit = (data: INotesData) => console.log(data);

  const obj = useWatch({
    control,
    name: 'notes',
  });
  return (
    <>
      <section className='basis-1/2 h-full border-r-2 py-3 px-5'>
        <h2>Get creative</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* <img src="images/{ds}" alt="" /> */}
          <ul className='mb-2'>
            {fields.map((item, index) => {
              return (
                <li key={item.id} className='relative [&>button]:hover:visible'>
                  <label id='todo-id' className='absolute left-0 top-2'>
                    {index + 1}.
                  </label>
                  <input
                    {...register(`notes.${index}.noteTitle` as const)}
                    defaultValue={item.noteTitle}
                    placeholder='Enter your todo'
                    className='w-full border-b-2 border-gray-300 pl-6 py-2 focus:outline-none focus:border-indigo-600 '
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
            onClick={() => append({ noteTitle: '' })}
            className='border border-blue-600 rounded-md px-3 py-1 text-blue-600 hover:bg-blue-600 hover:text-white'
          >
            Add new item
          </button>
          <input
            type='submit'
            className='border border-orange-600 rounded-md px-3 py-1 text-orange-600 hover:bg-orange-600 hover:text-white hover:cursor-pointer'
          />
        </form>
      </section>

      <ResultPage control={control} />
    </>
  );
};
