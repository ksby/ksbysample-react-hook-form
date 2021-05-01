/* eslint-disable react/jsx-props-no-spreading */
import { FC } from 'react';
import { useForm } from 'react-hook-form';

type Gender = 'female' | 'male' | 'other';

type FormValues = {
  firstName: string;
  gender: Gender;
};

const RegisterFields: FC = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: FormValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
      <div>
        <input
          type="text"
          {...register('firstName')}
          className="max-w-sm w-full border-gray-300 rounded-md text-sm"
        />
      </div>
      <div>
        <select
          {...register('gender')}
          className="border-gray-300 rounded-md text-sm"
        >
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>
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

export default RegisterFields;
