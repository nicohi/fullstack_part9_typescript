import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import patientService from "../services/patients";
import { Patient } from "../types";

import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import TransgenderIcon from '@mui/icons-material/Transgender';

const PatientPage = () => {
  const { id } = useParams();

  const [patient, setPatient] = useState<Patient>();

  useEffect(() => {
    const fetchPatient = async () => {
      const p = await patientService.getById(id as string);
      setPatient(p);
    };
    void fetchPatient();
  }, []);

  if (!patient) return (<div>Not found</div>);

  return (
    <div>
      <h3>{patient.name}{patient.gender === 'male' ? <MaleIcon/> :
                         patient.gender === 'female' ? <FemaleIcon/> :
                         <TransgenderIcon/> }</h3>
      <div>ssn: {patient.ssn}</div>
      <div>occupation: {patient.occupation}</div>
    </div>
  );
}

export default PatientPage;
