import patientData from '../../data/patients';
import { Patient, PublicPatient } from '../types';

const getEntries = () : Patient[] => {
    return patientData;
};

const getPublicEntries = () : PublicPatient[] => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return patientData.map(({ ssn, ...tail }) => ({  ...tail }));
};

const addPatient = (_data: Patient[]) => {
    return null;
};

export default {
  getEntries,
  getPublicEntries,
  addPatient
};
