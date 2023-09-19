import { UseFormProps, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { TypeOf, ZodSchema } from 'zod';

interface UseZodFormProps<T extends ZodSchema> extends UseFormProps<TypeOf<T>> {
  schema: T;
}

const useZodForm = <T extends ZodSchema>({
  schema,
  ...formConfig
}: UseZodFormProps<T>) =>
  useForm({
    ...formConfig,
    resolver: zodResolver(schema),
  });

export default useZodForm;
