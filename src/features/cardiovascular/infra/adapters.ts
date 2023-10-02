
import { CardiovascularPatientDto, CardiovascularPatientsDto, CardiovascularPredictionsDto,CardiovascularPredictionDto, Checkup, Gender, GeneralHealth } from '@api/cardiovascular/cardiovascular-api';
import {
  YES_ID,
  checkupChoices,
  genderChoices,
  generalHealthChoices,
} from '../domain/choices';
import { CardiovascularSchemaType } from '../domain/cardiovascular-form-validation';

function adaptGenderIdToGender(genderId: string): Gender {
  const maybeGender = genderChoices.find((choice) => choice.id === genderId)
    ?.apiValue;
  if (!maybeGender) {
    throw Error('Gender is not valid');
  }
  return maybeGender;
}

function ageClassifier(age: number): string {
  if (age >= 0 && age <= 24) {
    return '18-24';
  } else if (age >= 25 && age <= 29) {
    return '25-29';
  } else if (age >= 30 && age <= 34) {
    return '30-34';
  } else if (age >= 35 && age <= 39) {
    return '35-39';
  } else if (age >= 40 && age <= 44) {
    return '40-44';
  } else if (age >= 45 && age <= 49) {
    return '45-49';
  } else if (age >= 50 && age <= 54) {
    return '50-54';
  } else if (age >= 55 && age <= 59) {
    return '55-59';
  } else if (age >= 60 && age <= 64) {
    return '60-64';
  } else if (age >= 65 && age <= 69) {
    return '65-69';
  } else if (age >= 70 && age <= 74) {
    return '70-74';
  } else if (age >= 75 && age <= 79) {
    return '75-79';
  } else {
    return '80+';
  }
}

function adaptAgeStringifiedToAgeBin(age: string): string {
  const maybeAge = parseInt(age);
  if (maybeAge < 0) {
    throw Error('Age is not valid');
  }
  return ageClassifier(maybeAge);
}

function adaptCheckupIdToCheckup(checkupId: string): Checkup {
  const maybeCheckupType = checkupChoices.find(
    (choice) => choice.id === checkupId
  )?.apiValue;
  if (!maybeCheckupType) {
    throw Error('Checkup choice is not valid');
  }
  return maybeCheckupType;
}

function adaptGeneralHealthIdToGeneralHealth(
  generalHealthId: string
): GeneralHealth {
  const maybeGeneralHealth = generalHealthChoices.find(
    (choice) => choice.id === generalHealthId
  )?.apiValue;
  if (!maybeGeneralHealth) {
    throw Error('General health coice is not valid');
  }
  return maybeGeneralHealth;
}

function adaptAlcoholConsumptionStringifiedToNumber(
  alcoholConsumption: string
): number {
  const maybeAlcoholConsumption = parseFloat(alcoholConsumption);
  if (maybeAlcoholConsumption < 0) {
    throw Error('Alcohol consumption is not valid');
  }
  return maybeAlcoholConsumption;
}

function adaptFruitConsumptionStringifiedToNumber(
  fruitConsumption: string
): number {
  const maybeFruitConsumption = parseFloat(fruitConsumption);
  if (maybeFruitConsumption < 0) {
    throw Error('Fruit consumption is not valid');
  }
  return maybeFruitConsumption;
}


function adaptGreenVegetablesConsumptionStringifiedToNumber(
  greenVegetablesConsumption: string
): number {
  const maybeGreenVegetablesConsumption = parseFloat(greenVegetablesConsumption);
  if (maybeGreenVegetablesConsumption < 0) {
    throw Error('Green vegetables consumption is not valid');
  }
  return maybeGreenVegetablesConsumption;
}

function adaptFriedPotatoConsumptionStringifiedToNumber(
  friedPotatoConsumption: string
): number {
  const maybeFriedPotatoConsumption = parseFloat(friedPotatoConsumption);
  if (maybeFriedPotatoConsumption < 0) {
    throw Error('Fried potato consumption is not valid');
  }
  return maybeFriedPotatoConsumption;
}


function adaptHeightStringifiedToNumber(height: string): number {
  const maybeHeight = parseFloat(height);
  if (maybeHeight < 0) {
    throw Error('Height is not valid');
  }
  return maybeHeight;
}

function adaptWeightStringifiedToNumber(weight: string): number {
  const maybeWeight = parseFloat(weight);
  if (maybeWeight < 0) {
    throw Error('Weight is not valid');
  }
  return maybeWeight;
}

const calculateBMI = (weight: string, height:string) => {
  const bmiValue = Number(weight) / (Number(height) * Number(height));
  if (bmiValue < 0) {
    throw Error('BMI is not valid');
  }
  return bmiValue;
};

function adaptYesNoChoicesToBoolean(yesNoChoice: string): boolean {
  const yesOrNo = yesNoChoice.split('-').at(0);
  if (!yesOrNo) {
    throw Error('Yes or no choice cannot be split');
  }
  return yesOrNo === YES_ID;
}

const adaptFromCardiovascularSchemaTypeToCardiovascularPatientDto = (
  cardiovascular: CardiovascularSchemaType
): CardiovascularPatientDto => ({
  gender: adaptGenderIdToGender(cardiovascular.gender),
  age: adaptAgeStringifiedToAgeBin(cardiovascular.age),
  checkup: adaptCheckupIdToCheckup(cardiovascular.checkup),
  general_health:adaptGeneralHealthIdToGeneralHealth(cardiovascular.generalHealth),
  alcohol_consumption: adaptAlcoholConsumptionStringifiedToNumber(cardiovascular.alcoholConsumption),
  fruit_consumption: adaptFruitConsumptionStringifiedToNumber(cardiovascular.fruitConsumption),
  fried_potato_consumption: adaptFriedPotatoConsumptionStringifiedToNumber(cardiovascular.friedPotatoConsumption),
  green_vegetable_consumption: adaptGreenVegetablesConsumptionStringifiedToNumber(cardiovascular.greenVegetablesConsumption),
  height: adaptHeightStringifiedToNumber(cardiovascular.height),
  weight: adaptWeightStringifiedToNumber(cardiovascular.weight),
  bmi: calculateBMI(cardiovascular.weight,cardiovascular.height),
  exercise: adaptYesNoChoicesToBoolean(cardiovascular.exercise),
  skin_cancer: adaptYesNoChoicesToBoolean(cardiovascular.skinCancer),
  other_cancer: adaptYesNoChoicesToBoolean(cardiovascular.otherCancer),
  depression: adaptYesNoChoicesToBoolean(cardiovascular.depression),
  diabetes: adaptYesNoChoicesToBoolean(cardiovascular.diabetes),
  arthritis: adaptYesNoChoicesToBoolean(cardiovascular.arthritis),
  smoking: adaptYesNoChoicesToBoolean(cardiovascular.smoking),


});

// So far we only support one patient
export const adaptFromCardiovascularSchemaTypeToCardiovacularPatientsDto = (
  cardiovascular: CardiovascularSchemaType
): CardiovascularPatientsDto => ({
  patients: [adaptFromCardiovascularSchemaTypeToCardiovascularPatientDto(cardiovascular)],
});

export const adaptFromCardiovascularPredictionsDtoToBoolean = (
  cardiovascularPredictionsDto: CardiovascularPredictionsDto
): boolean => {
  // So far we only support one prediction
  const prediction = cardiovascularPredictionsDto.predictions.at(0);
  if (!prediction) {
    throw Error('Prediction is not valid');
  }

  return prediction === CardiovascularPredictionDto.cardiovascular;
};
