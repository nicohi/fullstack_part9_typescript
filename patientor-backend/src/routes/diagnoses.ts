import express from 'express';
import diagnosisService from '../services/diagnosisService';
import { Diagnosis } from '../types';

const router = express.Router();

router.get('/', (_req, res) => {
    const data = diagnosisService.getEntries();
    res.send(data);
});

router.post('/', (req, res) => {
    const data = diagnosisService.addDiagnosis(req.body as Diagnosis[]);
    res.send(data);
});

export default router;
