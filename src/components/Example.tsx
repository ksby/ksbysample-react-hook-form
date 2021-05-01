/* eslint-disable react/jsx-props-no-spreading */
import { FC } from 'react';
import { useForm } from 'react-hook-form';

type Inputs = {
  example: string;
  exampleRequired: string;
};

const Example: FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit = (data: Inputs) => console.log(data);

  console.log(watch('example'));

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="divide-y space-y-2 divide-white"
    >
      <div>
        <input
          type="text"
          defaultValue="test"
          {...register('example')}
          className="max-w-sm w-full border-gray-300 rounded-md text-sm"
        />
      </div>
      <div>
        <input
          type="text"
          {...register('exampleRequired', { required: true })}
          className="block max-w-sm w-full border-gray-300 rounded-md text-sm"
        />
        {errors.exampleRequired && (
          <span className="block mt-2 w-full text-sm text-red-700">
            This field is required
          </span>
        )}
      </div>

      <div className="pt-2 flex justify-start">
        <input
          type="submit"
          className="py-2 px-4 border border-transparent bg-indigo-600 text-white text-sm rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        />
      </div>
    </form>
  );
};

export default Example;
