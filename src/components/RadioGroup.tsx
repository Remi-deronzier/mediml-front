import { FieldValues, useFormContext } from 'react-hook-form';

import useFormErrorMessage from '@hooks/useFormErrorMessage';

import AppInputError from './InputError';

export interface RadioProps {
  id: string;
  title: string;
}

interface Props<T extends RadioProps, U extends FieldValues> {
  label: string;
  showErrorMessage?: boolean;
  description?: string;
  values: T[];
  defaultValue: T;
  groupName: Extract<keyof U, string>;
}

export default function AppRadioGroup<
  T extends RadioProps,
  U extends FieldValues,
>({
  label,
  values,
  description,
  defaultValue,
  groupName,
  showErrorMessage = true,
}: Props<T, U>) {
  const { register } = useFormContext();
  const maybeErrorMessage = useFormErrorMessage(groupName);

  return (
    <div>
      <label className="text-base font-semibold text-gray-900">{label}</label>
      {description && <p className="text-sm text-gray-500">{description}</p>}
      <fieldset className="mt-4">
        <legend className="sr-only">{label}</legend>
        <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
          {values.map((value) => (
            <div key={value.id} className="flex items-center">
              <input
                id={value.id}
                // register overrides the ref and the name.
                // That's why we don't need to pass them.
                {...register(groupName)}
                value={value.id}
                type="radio"
                defaultChecked={value.id === defaultValue.id}
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <label
                htmlFor={value.id}
                className="ml-3 block text-sm font-medium leading-6 text-gray-900"
              >
                {value.title}
              </label>
            </div>
          ))}
        </div>
        {showErrorMessage && maybeErrorMessage && (
          <AppInputError message={maybeErrorMessage} />
        )}
      </fieldset>
    </div>
  );
}
