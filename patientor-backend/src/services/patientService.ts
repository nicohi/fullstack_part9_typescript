import patientData from '../../data/patients';
import { Patient, PublicPatient, NewPatient } from '../types';
import { v1 as uuid } from 'uuid';

const getEntries = () : Patient[] => {
    return patientData;
};

const findById = (id: string): Patient | undefined => {
  const entry = patientData.find(p => p.id === id);
  return entry;
};

const getPublicEntries = () : PublicPatient[] => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return patientData.map(({ ssn, ...tail }) => ({  ...tail }));
};

const addPatient = (p: NewPatient) => {
    const patient:Patient = { ...p, id: uuid() };
    patientData.push(patient);
    return patient;
};

export default {
  getEntries,
  findById,
  getPublicEntries,
  addPatient
};
