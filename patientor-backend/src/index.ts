import express from 'express';

import pingRouter from './routes/ping';
import diagnosisRouter from './routes/diagnoses';

const app = express();
app.use(express.json());

app.use('/api/ping', pingRouter);
app.use('/api/diagnoses', diagnosisRouter);

const PORT = 3001;


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
