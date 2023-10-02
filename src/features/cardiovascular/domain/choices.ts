import {
  Gender,
  Checkup,
  GeneralHealth,
} from '@api/cardiovascular/cardiovascular-api';

import { RadioProps } from '../../../components/RadioGroup';

export interface GenericChoice extends RadioProps {
  isDefault?: boolean;
}
export interface GenderChoice extends GenericChoice {
  apiValue: Gender;
}
export interface YesNoChoice extends GenericChoice {}
export interface GeneralHealtChoice extends GenericChoice {
  apiValue: GeneralHealth;
}
export interface CheckupChoice extends GenericChoice {
  apiValue: Checkup;
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
  }
];

export const YES_ID = 'Yes';
export const NO_ID = 'NO';

const yesNoChoices: YesNoChoice[] = [
  {
    id: YES_ID,
    title: 'Yes',
    isDefault: true,
  },
  {
    id: NO_ID,
    title: 'No',
  },
];

const buildYesNoRadioChoices = (groupName: string) =>
  yesNoChoices.map((choice) => ({
    ...choice,
    id: `${choice.id}-${groupName}`,
  }));

export const exerciseChoices: YesNoChoice[] =
  buildYesNoRadioChoices('exercise');
export const skinCancerChoices: YesNoChoice[] =
  buildYesNoRadioChoices('skin-cancer');
export const otherCancerChoices: YesNoChoice[] =
  buildYesNoRadioChoices('other-cancer');
export const depressionChoices: YesNoChoice[] =
  buildYesNoRadioChoices('depression');
export const arthritisChoices: YesNoChoice[] =
  buildYesNoRadioChoices('arthritis');
export const diabetesChoices: YesNoChoice[] =
  buildYesNoRadioChoices('diabetes');
export const smokingChoices: YesNoChoice[] =
  buildYesNoRadioChoices('smoking');


export const checkupChoices: CheckupChoice[] = [
  {
    id: 'never',
    title: 'Never',
    isDefault: true,
    apiValue: Checkup.Never
  },
  {
    id: 'Within_the_past_5_years',
    title: 'Within the past 5 years',
    isDefault: false,
    apiValue: Checkup.Within_the_past_5_years
  },
  {
    id: 'Within_the_past_2_years',
    title: 'Within the past 2 years',
    isDefault: false,
    apiValue: Checkup.Within_the_past_2_years
  },
  {
    id: 'Within_the_past_year',
    title: 'Within the past year',
    isDefault: false,
    apiValue: Checkup.Within_the_past_year
  },
  {
    id: '5_or_more_years_ago',
    title: '5 or more years ago',
    isDefault: false,
    apiValue: Checkup['5_or_more_years_ago']
  },
];

export const generalHealthChoices: GeneralHealtChoice[] = [
  {
    id: 'poor',
    title: 'Poor',
    isDefault: true,
    apiValue: GeneralHealth.Poor
  },
  {
    id: 'fair',
    title: 'Fair',
    isDefault: false,
    apiValue: GeneralHealth.Fair
  },
  {
    id: 'good',
    title: 'Good',
    isDefault: false,
    apiValue: GeneralHealth.Good
  },
  {
    id: 'very_good',
    title: 'Very good',
    isDefault: false,
    apiValue: GeneralHealth.Very_Good
  },
  {
    id: 'excellent',
    title: 'Excellent',
    isDefault: false,
    apiValue: GeneralHealth.Excellent
  },
]
