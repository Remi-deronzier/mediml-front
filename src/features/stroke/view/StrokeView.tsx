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
        description="What is the gender of the patient?"
        groupName="gender"
        values={genderChoices}
        label="Gender"
      />
      <AppInput<StrokeSchemaType>
        label="Age"
        commonName="age"
        placeholder="42"
        type="number"
        step={1}
      />
      <StrokeRadioGroup
        description="Does the patient have hypertension?"
        groupName="hypertension"
        label="Hypertension"
        values={hypertensionChoices}
      />
      <StrokeRadioGroup
        description="Does the patient have heart disease?"
        groupName="heartDisease"
        label="Heart disease"
        values={heartDiseaseChoices}
      />
      <StrokeRadioGroup
        description="Has the patient ever been married?"
        groupName="everMarried"
        label="Married"
        values={everMarriedChoices}
      />
      <StrokeRadioGroup
        description="What is the work type of the patient?"
        groupName="workType"
        label="Work type"
        values={workTypeChoices}
      />
      <StrokeRadioGroup
        description="What is the residence type of the patient?"
        groupName="residenceType"
        label="Residence type"
        values={residenceTypeChoices}
      />
      <AppInput<StrokeSchemaType>
        label="Average glucose level"
        commonName="avgGlucoseLevel"
        placeholder="42.42"
        type="number"
      />
      <AppInput<StrokeSchemaType>
        label="BMI"
        commonName="bmi"
        placeholder="42.42"
        type="number"
      />
      <StrokeRadioGroup
        description="Does the patient smoke?"
        groupName="smokingStatus"
        label="Smoking status"
        values={smokingStatusChoices}
      />
    </AppForm>
  );
}
