import {
  Gender,
  PatientDto,
  PatientsDto,
  ResidenceType,
  SmokingStatus,
  WorkType,
} from '@api/stroke-api';

import {
  YES_ID,
  genderChoices,
  residenceTypeChoices,
  smokingStatusChoices,
  workTypeChoices,
} from '../domain/choices';
import { StrokeSchemaType } from '../domain/stroke-form-validation';

function adaptGenderIdToGender(genderId: string): Gender {
  const maybeGender = genderChoices.find((choice) => choice.id === genderId)
    ?.apiValue;
  if (!maybeGender) {
    throw Error('Gender is not valid');
  }
  return maybeGender;
}

function adaptAgeStringifiedToNumber(age: string): number {
  const maybeAge = parseInt(age);
  if (maybeAge < 0) {
    throw Error('Age is not valid');
  }
  return maybeAge;
}

function adaptWorkTypeIdToWorkType(workTypeId: string): WorkType {
  const maybeWorkType = workTypeChoices.find(
    (choice) => choice.id === workTypeId
  )?.apiValue;
  if (!maybeWorkType) {
    throw Error('Work type is not valid');
  }
  return maybeWorkType;
}

function adaptResidenceTypeIdToResidenceType(
  residenceTypeId: string
): ResidenceType {
  const maybeResidenceType = residenceTypeChoices.find(
    (choice) => choice.id === residenceTypeId
  )?.apiValue;
  if (!maybeResidenceType) {
    throw Error('Residence type is not valid');
  }
  return maybeResidenceType;
}

function adaptAvgGlucoseLevelStringifiedToNumber(
  avgGlucoseLevel: string
): number {
  const maybeAvgGlucoseLevel = parseFloat(avgGlucoseLevel);
  if (maybeAvgGlucoseLevel < 0) {
    throw Error('Average glucose level is not valid');
  }
  return maybeAvgGlucoseLevel;
}

function adaptBmiStringifiedToNumber(bmi: string): number {
  const maybeBmi = parseFloat(bmi);
  if (maybeBmi < 0) {
    throw Error('BMI is not valid');
  }
  return maybeBmi;
}

function adaptSmokingStatusIdToSmokingStatus(
  smokingStatusId: string
): SmokingStatus {
  const maybeSmokingStatus = smokingStatusChoices.find(
    (choice) => choice.id === smokingStatusId
  )?.apiValue;
  if (!maybeSmokingStatus) {
    throw Error('Smoking status is not valid');
  }
  return maybeSmokingStatus;
}

function adaptYesNoChoicesToBoolean(yesNoChoice: string): boolean {
  const yesOrNo = yesNoChoice.split('-').at(0);
  if (!yesOrNo) {
    throw Error('Yes or no choice cannot be split');
  }
  return yesOrNo === YES_ID;
}

const adaptFromStrokeSchemaTypeToPatientDto = (
  stroke: StrokeSchemaType
): PatientDto => ({
  gender: adaptGenderIdToGender(stroke.gender),
  age: adaptAgeStringifiedToNumber(stroke.age),
  hypertension: adaptYesNoChoicesToBoolean(stroke.hypertension),
  heart_disease: adaptYesNoChoicesToBoolean(stroke.heartDisease),
  ever_married: adaptYesNoChoicesToBoolean(stroke.everMarried),
  work_type: adaptWorkTypeIdToWorkType(stroke.workType),
  residence_type: adaptResidenceTypeIdToResidenceType(stroke.residenceType),
  avg_glucose_level: adaptAvgGlucoseLevelStringifiedToNumber(
    stroke.avgGlucoseLevel
  ),
  bmi: adaptBmiStringifiedToNumber(stroke.bmi),
  smoking_status: adaptSmokingStatusIdToSmokingStatus(stroke.smokingStatus),
});

// So far we only support one patient
export const adaptFromStrokeSchemaTypeToPatientsDto = (
  stroke: StrokeSchemaType
): PatientsDto => ({
  patients: [adaptFromStrokeSchemaTypeToPatientDto(stroke)],
});
