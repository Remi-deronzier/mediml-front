import useZodForm from '@hooks/useZodForm';

import AppForm from '@components/Form';
import AppInput from '@components/Input';

import {
  everMarriedChoices,
  genderChoices,
  heartDiseaseChoices,
  hypertensionChoices,
  residenceTypeChoices,
  smokingStatusChoices,
  workTypeChoices,
} from '../domain/choices';
import {
  StrokeFormSchema,
  StrokeSchemaType,
} from '../domain/stroke-form-validation';
import StrokeRadioGroup from './components/StrokeRadioGroup';

export default function StrokeView() {
  const form = useZodForm({
    schema: StrokeFormSchema,
    mode: 'all',
  });

  return (
    <AppForm form={form}>
      <StrokeRadioGroup
        groupName="gender"
        values={genderChoices}
        label="Gender"
      />
      <AppInput<StrokeSchemaType>
        label="Age"
        commonName="age"
        placeholder="Age of the patient"
        type="number"
        step={1}
      />
      <StrokeRadioGroup
        groupName="hypertension"
        label="Hypertension"
        values={hypertensionChoices}
      />
      <StrokeRadioGroup
        groupName="heartDisease"
        label="Heart disease"
        values={heartDiseaseChoices}
      />
      <StrokeRadioGroup
        groupName="everMarried"
        label="Married"
        values={everMarriedChoices}
      />
      <StrokeRadioGroup
        groupName="workType"
        label="Work type"
        values={workTypeChoices}
      />
      <StrokeRadioGroup
        groupName="residenceType"
        label="Residence type"
        values={residenceTypeChoices}
      />
      <AppInput<StrokeSchemaType>
        label="Average glucose level"
        commonName="avgGlucoseLevel"
        placeholder="Average glucose level of the patient"
        type="number"
      />
      <AppInput<StrokeSchemaType>
        label="BMI"
        commonName="bmi"
        placeholder="BMI of the patient"
        type="number"
      />
      <StrokeRadioGroup
        groupName="smokingStatus"
        label="Smoking status"
        values={smokingStatusChoices}
      />
    </AppForm>
  );
}
