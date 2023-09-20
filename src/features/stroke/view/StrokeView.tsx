import useZodForm from '@hooks/useZodForm';

import Button from '@components/Button';
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
    <div className="mx-auto max-w-xl py-16">
      <h1 className="mb-2 text-4xl font-bold">Stroke prediction</h1>
      <p className="mb-8 text-gray-500">
        Fill this form to predict if a patient is likely to have a stroke.
        <strong className="font-semibold italic text-gray-700">
          &nbsp; All fields are mandatory.
        </strong>
      </p>
      <AppForm form={form} fieldsetClassName="space-y-8">
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
          isMandatory
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
          isMandatory
        />
        <AppInput<StrokeSchemaType>
          label="BMI"
          commonName="bmi"
          placeholder="42.42"
          type="number"
          isMandatory
        />
        <StrokeRadioGroup
          description="Does the patient smoke?"
          groupName="smokingStatus"
          label="Smoking status"
          values={smokingStatusChoices}
        />
        <div className="flex justify-end">
          <Button
            label="Submit"
            isLoading={form.formState.isSubmitting}
            type="submit"
            // TODO: Implement submit handler.
            onClick={() => {}}
          />
        </div>
      </AppForm>
    </div>
  );
}
