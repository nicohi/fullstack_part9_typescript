import express from 'express';
import patientService from '../services/patientService';
import { NewPatient } from '../types';

const router = express.Router();

router.get('/', (_req, res) => {
    const data = patientService.getPublicEntries();
    res.send(data);
});

router.post('/', (req, res) => {
    const data = patientService.addPatient(req.body as NewPatient);
    res.send(data);
});

export default router;
