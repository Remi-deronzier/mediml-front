import { GenericChoice } from '@features/stroke/domain/choices';
import { CardiovascularSchemaType } from '@features/cardiovascular/domain/cardiovascular-form-validation';

import AppRadioGroup from '@components/RadioGroup';

interface Props {
  groupName: Extract<keyof CardiovascularSchemaType, string>;
  label: string;
  description: string;
  values: GenericChoice[];
}

export default function StrokeRadioGroup({
  groupName,
  label,
  values,
  description,
}: Props) {
  return (
    <AppRadioGroup<GenericChoice, CardiovascularSchemaType>
      label={label}
      description={description}
      values={values}
      defaultValue={
        values.find((choice) => choice.isDefault === true) ?? values[0] // use [] instead of at() because we know that the array is not empty thanks to the check in the RadioGroup component
      }
      groupName={groupName}
      isMandatory
    />
  );
}
