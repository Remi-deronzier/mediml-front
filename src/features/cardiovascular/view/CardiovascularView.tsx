import { useState } from 'react';

import useZodForm from '@hooks/useZodForm';

import Button from '@components/Button';
import AppForm from '@components/Form';
import AppInput from '@components/Input';
import Toaster from '@components/toaster';

import {
  exerciseChoices,
  genderChoices,
  skinCancerChoices,
  otherCancerChoices,
  depressionChoices,
  arthritisChoices,
  diabetesChoices,
  smokingChoices,
  checkupChoices,
  generalHealthChoices
} from '../domain/choices';
import {
  CardiovascularFormSchema,
  CardiovascularSchemaType,
} from '../domain/cardiovascular-form-validation';
import PatientWithCardiovascularModal from './components/PatientWithCardiovascularModal';
import PatientWithoutCardiovascularModal from './components/PatientWithoutCardiovascularModal';
import CardiovascularRadioGroup from './components/CardiovascularRadioGroup';
import { adaptFromCardiovascularPredictionsDtoToBoolean, adaptFromCardiovascularSchemaTypeToCardiovacularPatientsDto } from '../infra/adapters';
import { predictPredictPost } from '@api/cardiovascular/cardiovascular-api';
import Header from '@app/Header';
import Footer from '@app/Footer';

export default function CardiovascularView() {
  const form = useZodForm({
    schema: CardiovascularFormSchema,
    mode: 'all',
  });
  const [globalError, setGlobalError] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [hasCardiovascular, setHasCardiovascular] = useState(false);

  const handleSubmit = async (data: CardiovascularSchemaType) => {
    try {
      // Reset state
      setGlobalError(false);
      setShowModal(false);
      setHasCardiovascular(false);

      const cardiovascularPatientsDto = adaptFromCardiovascularSchemaTypeToCardiovacularPatientsDto(data)
      const cardiovascularPredictionsDto = await predictPredictPost(cardiovascularPatientsDto)

      setHasCardiovascular(
        adaptFromCardiovascularPredictionsDtoToBoolean(cardiovascularPredictionsDto)
      )
      setShowModal(true);

      // Reset form
      console.log(data)
      console.log(cardiovascularPatientsDto)
      form.reset();
    } catch (error) {
      console.log(error)
      setGlobalError(true);
    }
  };


  return (
    <>
    <Header/>

    <div className="mx-auto max-w-3xl py-16">
      <Toaster
        title="Error"
        message="We're sorry, something went wrong"
        type="error"
        shouldShow={globalError}
      />
      {hasCardiovascular ? (
        <PatientWithCardiovascularModal show={showModal} />
      ) : (
        <PatientWithoutCardiovascularModal show={showModal} />
      )}
      <h1 className="mb-2 text-4xl font-bold">Cardiovascular disease prediction</h1>
      <p className="mb-8 text-gray-500">
        Fill this form to predict if a patient is likely to have a cardiovascular disease.
        <strong className="font-semibold italic text-gray-700">
          &nbsp; All fields are mandatory.
        </strong>
      </p>
      <AppForm
        form={form}
        fieldsetClassName="space-y-8"
        onSubmit={handleSubmit}
      >
        <CardiovascularRadioGroup
          description="What is the gender of the patient?"
          groupName="gender"
          values={genderChoices}
          label="Gender"
        />
        <CardiovascularRadioGroup
          description="What is the general health of the patient?"
          groupName="generalHealth"
          label="General health"
          values={generalHealthChoices}
        />
        <CardiovascularRadioGroup
          description="When did the patient get the last checkup?"
          groupName="checkup"
          label="Checkup"
          values={checkupChoices}
        />
        <AppInput<CardiovascularSchemaType>
          label="Age"
          commonName="age"
          placeholder="42"
          type="number"
          step={1}
          isMandatory
        />
        <CardiovascularRadioGroup
          description="Does the patient have exercise frequently?"
          groupName="exercise"
          label="Exercise"
          values={exerciseChoices}
        />
        <CardiovascularRadioGroup
          description="Did the patient have skin cancer?"
          groupName="skinCancer"
          label="Skin cancer"
          values={skinCancerChoices}
        />
        <CardiovascularRadioGroup
          description="Did the patient have other kinds of cancer?"
          groupName="otherCancer"
          label="Other cancer"
          values={otherCancerChoices}
        />
        <CardiovascularRadioGroup
          description="Does the patient have depression?"
          groupName="depression"
          label="Depression"
          values={depressionChoices}
        />
        <CardiovascularRadioGroup
          description="Does the patient have diabetes?"
          groupName="diabetes"
          label="Diabetes"
          values={diabetesChoices}
        />
        <CardiovascularRadioGroup
          description="Does the patient have arthritis?"
          groupName="arthritis"
          label="Arthritis"
          values={arthritisChoices}
        />
        <CardiovascularRadioGroup
          description="Does the patient have an smoking history?"
          groupName="smoking"
          label="Smoking history"
          values={smokingChoices}
        />
        <AppInput<CardiovascularSchemaType>
          label="Heigth"
          commonName="height"
          placeholder="1.75"
          type="number"
          step={0.01}
          isMandatory
        />
        <AppInput<CardiovascularSchemaType>
          label="Weight"
          commonName="weight"
          placeholder="70.5"
          type="number"
          step={0.1}
          isMandatory
        />
        <AppInput<CardiovascularSchemaType>
          label="How many fruits does the patient consume per week?"
          commonName="fruitConsumption"
          placeholder="35"
          type="number"
          step={1}
          isMandatory
        />
        <AppInput<CardiovascularSchemaType>
          label="How many green vegetables does the patient consume per week?"
          commonName="greenVegetablesConsumption"
          placeholder="35"
          type="number"
          step={1}
          isMandatory
        />
        <AppInput<CardiovascularSchemaType>
          label="How many alcohol units does the patient consume per week?"
          commonName="alcoholConsumption"
          placeholder="0"
          type="number"
          step={1}
          isMandatory
        />
        <AppInput<CardiovascularSchemaType>
          label="How many fried potatoes does the patient consume per week?"
          commonName="friedPotatoConsumption"
          placeholder="15"
          type="number"
          step={1}
          isMandatory
        />


        <div className="flex justify-end">
          <Button
            label="Submit"
            isLoading={form.formState.isSubmitting}
            type="submit"
          />
        </div>
      </AppForm>
    </div>
    <Footer />
    </>
  );
}
