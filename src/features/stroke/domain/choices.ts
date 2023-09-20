import { RadioProps } from '../../../components/RadioGroup';

export interface RadioChoice extends RadioProps {
  isDefault?: boolean;
}

export const genderChoices: RadioChoice[] = [
  {
    id: 'male',
    title: 'Male',
    isDefault: true,
  },
  {
    id: 'female',
    title: 'Female',
  },
  {
    id: 'other',
    title: 'Other',
  },
];

const yesNoChoices: RadioChoice[] = [
  {
    id: 'yes',
    title: 'Yes',
    isDefault: true,
  },
  {
    id: 'no',
    title: 'No',
  },
];

const buildYesNoRadioChoices = (groupName: string) =>
  yesNoChoices.map((choice) => ({
    ...choice,
    id: `${groupName}-${choice.id}`,
  }));

export const heartDiseaseChoices: RadioChoice[] =
  buildYesNoRadioChoices('heart-disease');
export const hypertensionChoices: RadioChoice[] =
  buildYesNoRadioChoices('hypertension');
export const everMarriedChoices: RadioChoice[] =
  buildYesNoRadioChoices('ever-married');

export const workTypeChoices: RadioChoice[] = [
  {
    id: 'children',
    title: 'Children',
    isDefault: true,
  },
  {
    id: 'govt-job',
    title: 'Government job',
  },
  {
    id: 'never-worked',
    title: 'Never worked',
  },
];

export const residenceTypeChoices: RadioChoice[] = [
  {
    id: 'rural',
    title: 'Rural',
    isDefault: true,
  },
  {
    id: 'urban',
    title: 'Urban',
  },
];

export const smokingStatusChoices: RadioChoice[] = [
  {
    id: 'formerly-smoked',
    title: 'Formerly smoked',
    isDefault: true,
  },
  {
    id: 'never-smoked',

    title: 'Never smoked',
  },
  {
    id: 'smokes',
    title: 'Smokes',
  },
  {
    id: 'unknown',
    title: 'Unknown',
  },
];
