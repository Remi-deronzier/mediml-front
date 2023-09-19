import { ComponentProps } from 'react';
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  UseFormReturn,
} from 'react-hook-form';

interface Props<T extends FieldValues>
  extends Omit<ComponentProps<'form'>, 'onSubmit'> {
  form: UseFormReturn<T>;
  onSubmit?: SubmitHandler<T>;
  fieldsetClassName?: string;
}

export default function AppForm<T extends FieldValues>({
  form,
  onSubmit,
  children,
  fieldsetClassName = '',
  ...props
}: Props<T>) {
  return (
    <FormProvider {...form}>
      <form
        onSubmit={onSubmit ? form.handleSubmit(onSubmit) : undefined}
        {...props}
        className="w-full"
      >
        <fieldset
          className={fieldsetClassName}
          disabled={form.formState.isSubmitting}
        >
          {children}
        </fieldset>
      </form>
    </FormProvider>
  );
}
