/* eslint-disable react/jsx-props-no-spreading, jsx-a11y/label-has-associated-control */
import React, { FC } from 'react';
import { Path, useForm, UseFormRegister } from 'react-hook-form';

type FormValues = {
  'First Name': string;
  Age: number;
};

type InputProps = {
  label: Path<FormValues>;
  register: UseFormRegister<FormValues>;
  required: boolean;
};

const Input = ({ label, register, required }: InputProps) => (
  <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start">
    <label className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
      {label}
    </label>
    <div className="mt-1 sm:mt-0 sm:col-span-2">
      <input
        type="text"
        {...register(label, { required })}
        className="block max-w-lg w-full border-gray-300 rounded-md text-sm"
      />
    </div>
  </div>
);

const Select = React.forwardRef<
  HTMLSelectElement,
  { label: string } & ReturnType<UseFormRegister<FormValues>>
>(({ onChange, onBlur, name, label }, ref) => (
  <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start">
    <label className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
      {label}
    </label>
    <div className="mt-1 sm:mt-0 sm:col-span-2">
      <select
        name={name}
        ref={ref}
        onChange={onChange}
        onBlur={onBlur}
        className="block max-w-xs w-full border-gray-300 rounded-md text-sm"
      >
        <option value="20">20</option>
        <option value="30">30</option>
      </select>
    </div>
  </div>
));

const IntegratingAnExistingForm: FC = () => {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit = (data: FormValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
      <Input label="First Name" register={register} required />
      <Select label="Age" {...register('Age')} />

      <div className="pt-2 flex justify-start">
        <input
          type="submit"
          className="py-2 px-4 border border-transparent bg-indigo-600 text-white text-sm rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        />
      </div>
    </form>
  );
};

export default IntegratingAnExistingForm;
