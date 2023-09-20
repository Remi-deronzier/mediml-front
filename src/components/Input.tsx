import { ComponentProps } from 'react';
import { FieldValues, useFormContext } from 'react-hook-form';

import { cva } from 'class-variance-authority';

import useFormErrorMessage from '@hooks/useFormErrorMessage';

import Asterisk from './Asterisk';
import AppInputError from './InputError';

interface Props<T extends FieldValues> extends ComponentProps<'input'> {
  label: string;
  placeholder?: string;
  type?: string;
  commonName: Extract<keyof T, string>;
  showErrorMessage?: boolean;
  isMandatory?: boolean;
}

const inputStyles = cva(
  'block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200 sm:text-sm sm:leading-6',
  {
    variants: {
      shouldShowError: {
        true: 'text-red-900 ring-red-300 placeholder:text-red-300 focus:ring-red-500',
        false:
          'text-gray-900 ring-gray-300 placeholder:text-gray-400  focus:ring-indigo-600',
      },
    },
  }
);

export default function AppInput<T extends FieldValues>({
  label,
  placeholder,
  type,
  commonName,
  showErrorMessage = true,
  isMandatory = false,
  ...props
}: Props<T>) {
  const { register } = useFormContext();

  const maybeErrorMessage = useFormErrorMessage(commonName);

  return (
    <div>
      <label
        htmlFor={commonName}
        className="text-base font-semibold text-gray-900"
      >
        {label}
        {isMandatory && <Asterisk />}
      </label>
      <div className="mt-2">
        <input
          type={type}
          // register overrides the ref and the name.
          // That's why we don't need to pass them.
          {...register(commonName)}
          id={commonName}
          className={inputStyles({
            shouldShowError:
              maybeErrorMessage !== undefined && maybeErrorMessage !== '',
          })}
          placeholder={placeholder}
          {...props}
        />
        {showErrorMessage && maybeErrorMessage && (
          <AppInputError message={maybeErrorMessage} />
        )}
      </div>
    </div>
  );
}
