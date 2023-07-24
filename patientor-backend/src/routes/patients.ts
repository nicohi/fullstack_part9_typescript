import express from 'express';
import patientService from '../services/patientService';
import { toNewPatient } from '../utils';

const router = express.Router();

router.get('/', (_req, res) => {
    const data = patientService.getPublicEntries();
    res.send(data);
});

router.post('/', (req, res) => {
    try {
        const data = patientService.addPatient(toNewPatient(req.body));
        res.send(data);
    } catch (error: unknown) {
        let errorMessage = 'Something went wrong.';
        if (error instanceof Error) {
            errorMessage += ' Error: ' + error.message;
        }
        res.status(400).send(errorMessage);
  }
});

export default router;
