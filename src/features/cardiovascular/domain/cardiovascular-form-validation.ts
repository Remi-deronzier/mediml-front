import { object, string, z } from 'zod';

import {
  regexForOnlyPositiveFloat,
  regexForOnlyPositiveInteger,
} from '@utils/helpers';

import {
  GenericChoice,
  smokingChoices,
  genderChoices,
  exerciseChoices,
  skinCancerChoices,
  otherCancerChoices,
  depressionChoices,
  arthritisChoices,
  diabetesChoices,
  generalHealthChoices,
  checkupChoices,

} from './choices';

const NON_FLOAT_ERROR_MESSAGE = 'Please enter a positive number';
const FIELD_REQUIRED_ERROR_MESSAGE = 'This field is required';

const buildRadioGroupValidation = (choices: GenericChoice[]) =>
  string().refine((choice) =>
    choices.map((choice) => choice.id).includes(choice)
  );

export const CardiovascularFormSchema = object({
  gender: buildRadioGroupValidation(genderChoices),
  age: string()
    .nonempty(FIELD_REQUIRED_ERROR_MESSAGE)
    .regex(regexForOnlyPositiveInteger, {
      message: 'Please enter a positive integer',
    }),
  generalHealth:buildRadioGroupValidation(generalHealthChoices),
  checkup:buildRadioGroupValidation(checkupChoices),
  exercise: buildRadioGroupValidation(exerciseChoices),
  skinCancer: buildRadioGroupValidation(skinCancerChoices),
  otherCancer: buildRadioGroupValidation(otherCancerChoices),
  depression: buildRadioGroupValidation(depressionChoices),
  diabetes: buildRadioGroupValidation(diabetesChoices),
  arthritis: buildRadioGroupValidation(arthritisChoices),
  smoking: buildRadioGroupValidation(smokingChoices),
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

export type CardiovascularSchemaType = z.infer<typeof CardiovascularFormSchema>;
