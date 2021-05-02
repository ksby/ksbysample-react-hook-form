/* eslint-disable react/jsx-props-no-spreading */
import { FC } from 'react';
import { useForm } from 'react-hook-form';

type FormValues = {
  firstName: string;
  lastName: string;
  age: number;
};

const ApplyValidation: FC = () => {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit = (data: FormValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
      <div>
        <input
          type="text"
          {...register('firstName', { required: true, maxLength: 20 })}
          className="max-w-sm w-full border-gray-300 rounded-md text-sm"
        />
      </div>
      <div>
        <input
          type="text"
          {...register('lastName', { pattern: /^[A-Za-z]+$/i })}
          className="max-w-sm w-full border-gray-300 rounded-md text-sm"
        />
      </div>
      <div>
        <input
          type="number"
          {...register('age', { min: 18, max: 99 })}
          className="max-w-sm w-full border-gray-300 rounded-md text-sm"
        />
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

export default ApplyValidation;
