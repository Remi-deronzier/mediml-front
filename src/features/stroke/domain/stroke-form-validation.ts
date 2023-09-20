import { object, string, z } from 'zod';

import {
  regexForOnlyPositiveFloat,
  regexForOnlyPositiveInteger,
} from '@utils/helpers';

import {
  GenericChoice,
  everMarriedChoices,
  genderChoices,
  heartDiseaseChoices,
  hypertensionChoices,
  residenceTypeChoices,
  smokingStatusChoices,
  workTypeChoices,
} from './choices';

const NON_FLOAT_ERROR_MESSAGE = 'Please enter a positive number';
const FIELD_REQUIRED_ERROR_MESSAGE = 'This field is required';

const buildRadioGroupValidation = (choices: GenericChoice[]) =>
  string().refine((choice) =>
    choices.map((choice) => choice.id).includes(choice)
  );

export const StrokeFormSchema = object({
  gender: buildRadioGroupValidation(genderChoices),
  age: string()
    .nonempty(FIELD_REQUIRED_ERROR_MESSAGE)
    .regex(regexForOnlyPositiveInteger, {
      message: 'Please enter a positive integer',
    }),
  hypertension: buildRadioGroupValidation(hypertensionChoices),
  heartDisease: buildRadioGroupValidation(heartDiseaseChoices),
  everMarried: buildRadioGroupValidation(everMarriedChoices),
  workType: buildRadioGroupValidation(workTypeChoices),
  residenceType: buildRadioGroupValidation(residenceTypeChoices),
  avgGlucoseLevel: string()
    .nonempty(FIELD_REQUIRED_ERROR_MESSAGE)
    .regex(regexForOnlyPositiveFloat, {
      message: NON_FLOAT_ERROR_MESSAGE,
    }),
  bmi: string()
    .nonempty(FIELD_REQUIRED_ERROR_MESSAGE)
    .regex(regexForOnlyPositiveFloat, {
      message: NON_FLOAT_ERROR_MESSAGE,
    }),
  smokingStatus: buildRadioGroupValidation(smokingStatusChoices),
});

export type StrokeSchemaType = z.infer<typeof StrokeFormSchema>;
