import {
  Gender,
  ResidenceType,
  SmokingStatus,
  WorkType,
} from '@api/stroke/stroke-api';

import { RadioProps } from '../../../components/RadioGroup';

export interface GenericChoice extends RadioProps {
  isDefault?: boolean;
}
export interface GenderChoice extends GenericChoice {
  apiValue: Gender;
}
export interface YesNoChoice extends GenericChoice {}
export interface WorkTypeChoice extends GenericChoice {
  apiValue: WorkType;
}
export interface ResidenceTypeChoice extends GenericChoice {
  apiValue: ResidenceType;
}
export interface SmokingStatusChoice extends GenericChoice {
  apiValue: SmokingStatus;
}

export const genderChoices: GenderChoice[] = [
  {
    id: 'male',
    title: 'Male',
    apiValue: Gender.Male,
    isDefault: true,
  },
  {
    id: 'female',
    title: 'Female',
    apiValue: Gender.Female,
  },
  {
    id: 'other',
    title: 'Other',
    apiValue: Gender.Other,
  },
];

export const YES_ID = 'yes';

const yesNoChoices: YesNoChoice[] = [
  {
    id: YES_ID,
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
    id: `${choice.id}-${groupName}`,
  }));

export const heartDiseaseChoices: YesNoChoice[] =
  buildYesNoRadioChoices('heart-disease');
export const hypertensionChoices: YesNoChoice[] =
  buildYesNoRadioChoices('hypertension');
export const everMarriedChoices: YesNoChoice[] =
  buildYesNoRadioChoices('ever-married');

export const workTypeChoices: WorkTypeChoice[] = [
  {
    id: 'govt-job',
    title: 'Government job',
    isDefault: true,
    apiValue: WorkType.Govt_jov,
  },
  {
    id: 'children',
    title: 'Children',
    apiValue: WorkType.children,
  },
  {
    id: 'never-worked',
    title: 'Never worked',
    apiValue: WorkType.Never_worked,
  },
  {
    id: 'private',
    title: 'Private',
    apiValue: WorkType.Private,
  },
  {
    id: 'self-employed',
    title: 'Self-employed',
    apiValue: WorkType['Self-employed'],
  },
];

export const residenceTypeChoices: ResidenceTypeChoice[] = [
  {
    id: 'rural',
    title: 'Rural',
    isDefault: true,
    apiValue: ResidenceType.Rural,
  },
  {
    id: 'urban',
    title: 'Urban',
    apiValue: ResidenceType.Urban,
  },
];

export const smokingStatusChoices: SmokingStatusChoice[] = [
  {
    id: 'formerly-smoked',
    title: 'Formerly smoked',
    isDefault: true,
    apiValue: SmokingStatus.formerly_smoked,
  },
  {
    id: 'never-smoked',
    title: 'Never smoked',
    apiValue: SmokingStatus.never_smoked,
  },
  {
    id: 'smokes',
    title: 'Smokes',
    apiValue: SmokingStatus.smokes,
  },
  {
    id: 'unknown',
    title: 'Unknown',
    apiValue: SmokingStatus.Unknown,
  },
];
