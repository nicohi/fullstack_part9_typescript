import express from 'express';
import cors from 'cors';

import pingRouter from './routes/ping';
import diagnosisRouter from './routes/diagnoses';
import patientRouter from './routes/patients';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/ping', pingRouter);
app.use('/api/diagnoses', diagnosisRouter);
app.use('/api/patients', patientRouter);

const PORT = 3001;


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
