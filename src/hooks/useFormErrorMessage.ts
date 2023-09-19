import { useFormContext } from 'react-hook-form';

const useFormErrorMessage = (fieldName: string): string | undefined => {
  const {
    formState: { errors },
  } = useFormContext();

  const error = errors[fieldName];

  const maybeMessage = error?.message;

  const shouldShowError = typeof maybeMessage === 'string';

  return shouldShowError ? maybeMessage : undefined;
};

export default useFormErrorMessage;
