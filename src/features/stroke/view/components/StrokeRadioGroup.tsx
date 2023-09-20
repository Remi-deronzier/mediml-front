import { RadioChoice } from '@features/stroke/domain/choices';
import { StrokeSchemaType } from '@features/stroke/domain/stroke-form-validation';

import AppRadioGroup from '@components/RadioGroup';

interface Props {
  groupName: Extract<keyof StrokeSchemaType, string>;
  label: string;
  description: string;
  values: RadioChoice[];
}

export default function StrokeRadioGroup({
  groupName,
  label,
  values,
  description,
}: Props) {
  return (
    <AppRadioGroup<RadioChoice, StrokeSchemaType>
      label={label}
      description={description}
      values={values}
      defaultValue={
        values.find((choice) => choice.isDefault === true) ?? values[0]
      }
      groupName={groupName}
      isMandatory
    />
  );
}
