import express from 'express';
import patientService from '../services/patientService';
import { toNewPatient } from '../utils';

const router = express.Router();

router.get('/', (_req, res) => {
    const data = patientService.getPublicEntries();
    res.send(data);
});

router.post('/', (req, res) => {
    const data = patientService.addPatient(toNewPatient(req.body));
    res.send(data);
});

export default router;
