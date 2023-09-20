import { object, string, z } from 'zod';

import {
  regexForOnlyPositiveFloat,
  regexForOnlyPositiveInteger,
} from '@utils/helpers';

import {
  RadioChoice,
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

const buildGenericRadioGroupValidation = (choices: RadioChoice[]) =>
  string().refine((choice) =>
    choices.map((choice) => choice.id).includes(choice)
  );

export const StrokeFormSchema = object({
  gender: buildGenericRadioGroupValidation(genderChoices),
  age: string()
    .nonempty(FIELD_REQUIRED_ERROR_MESSAGE)
    .regex(regexForOnlyPositiveInteger, {
      message: 'Please enter a positive integer',
    }),
  hypertension: buildGenericRadioGroupValidation(hypertensionChoices),
  heartDisease: buildGenericRadioGroupValidation(heartDiseaseChoices),
  everMarried: buildGenericRadioGroupValidation(everMarriedChoices),
  workType: buildGenericRadioGroupValidation(workTypeChoices),
  residenceType: buildGenericRadioGroupValidation(residenceTypeChoices),
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
  smokingStatus: buildGenericRadioGroupValidation(smokingStatusChoices),
});

export type StrokeSchemaType = z.infer<typeof StrokeFormSchema>;
