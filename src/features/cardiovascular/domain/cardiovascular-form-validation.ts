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
    }),//Add refine with passing the value into a bin
  exercise: buildRadioGroupValidation(hypertensionChoices),
  skinCancer: buildRadioGroupValidation(heartDiseaseChoices),
  otherCancer: buildRadioGroupValidation(everMarriedChoices),
  depression: buildRadioGroupValidation(workTypeChoices),
  diabetes: buildRadioGroupValidation(residenceTypeChoices),
  arthritis: buildRadioGroupValidation(residenceTypeChoices),
  smokingHistory: buildRadioGroupValidation(residenceTypeChoices),
  alcoholConsumption: string()
    .nonempty(FIELD_REQUIRED_ERROR_MESSAGE)
    .regex(regexForOnlyPositiveFloat, {
      message: NON_FLOAT_ERROR_MESSAGE,
    }),
  height: string()
    .nonempty(FIELD_REQUIRED_ERROR_MESSAGE)
    .regex(regexForOnlyPositiveFloat, {
      message: NON_FLOAT_ERROR_MESSAGE,
    }),
  weight: string()
    .nonempty(FIELD_REQUIRED_ERROR_MESSAGE)
    .regex(regexForOnlyPositiveFloat, {
      message: NON_FLOAT_ERROR_MESSAGE,
    }),
  fruitConsumption: string()
    .nonempty(FIELD_REQUIRED_ERROR_MESSAGE)
    .regex(regexForOnlyPositiveFloat, {
      message: NON_FLOAT_ERROR_MESSAGE,
    }),
  greenVegetablesConsumption: string()
    .nonempty(FIELD_REQUIRED_ERROR_MESSAGE)
    .regex(regexForOnlyPositiveFloat, {
      message: NON_FLOAT_ERROR_MESSAGE,
    }),
  friedPotatoConsumption: string()
    .nonempty(FIELD_REQUIRED_ERROR_MESSAGE)
    .regex(regexForOnlyPositiveFloat, {
      message: NON_FLOAT_ERROR_MESSAGE,
    }),
});

export type StrokeSchemaType = z.infer<typeof StrokeFormSchema>;
