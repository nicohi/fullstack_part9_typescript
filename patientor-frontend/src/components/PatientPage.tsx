import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import patientService from "../services/patients";
import diagnosisService from "../services/diagnoses";
import { Patient, Diagnosis } from "../types";

import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import TransgenderIcon from '@mui/icons-material/Transgender';

const PatientPage = () => {
  const { id } = useParams();

  const [patient, setPatient] = useState<Patient>();
  const [diagnoses, setDiagnoses] = useState<Diagnosis[]>([]);

  useEffect(() => {
    const fetchPatient = async () => {
      const p = await patientService.getById(id as string);
      setPatient(p);
    };
    void fetchPatient();
    const fetchDiagnoses = async () => {
      const ds = await diagnosisService.getAll();
      setDiagnoses(ds);
    };
    void fetchDiagnoses();
  }, []);

  if (!patient) return (<div>Not found</div>);

  return (
    <div>
      <h3>{patient.name}{patient.gender === 'male' ? <MaleIcon/> :
                         patient.gender === 'female' ? <FemaleIcon/> :
                         <TransgenderIcon/> }</h3>
      <div>ssn: {patient.ssn}</div>
      <div>occupation: {patient.occupation}</div>
      <h4>entries</h4>
      {patient.entries.map(entry => (
        <>
        <div>{entry.date} <i>{entry.description}</i></div>
          <ul>
            {entry.diagnosisCodes ? entry.diagnosisCodes.map(e => {
              let d = diagnoses.find(d => d.code === e);
              let t = e + ' ';
              if (d === undefined)
                  t = t + 'unknown';
              else
                  t = t + d.name;
              return <li>{t}</li>;
            }) : null }
          </ul>
        </>
      ))}
    </div>
  );
}

export default PatientPage;
