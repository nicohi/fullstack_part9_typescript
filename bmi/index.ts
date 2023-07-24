import express from 'express';
import { calculateBmi } from './bmiCalculator';
import { calculateExercises } from './exerciseCalculator';
import { errorHandler } from './middleware';

const app = express();
app.use(express.json());

const missingError = (message:string) : Error => {
  const e = new Error(message);
  e.name = 'MissingError';
  return e;
};

const parameterError = (message:string) : Error => {
  const e = new Error(message);
  e.name = 'ParameterError';
  return e;
};

app.post('/exercises', (req, res) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const target = req.body.target as number;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const hours = req.body.daily_exercises as number[];
    if (!target || !hours) throw missingError('missing parameter');
    if (isNaN(target) ||
        !Array.isArray(hours) ||
        hours.length < 1 ||
        hours.reduce((a,h)=> a || isNaN(Number(h)),false)) throw parameterError('bad data');
    res.send(calculateExercises(hours , target ));
});

app.get('/bmi', (req, res) => {
    const weight:number = Number(req.query.weight);
    const height:number = Number(req.query.height);
    if (isNaN(weight) || isNaN(height)) throw parameterError('weight or height ar NaN');
    const bmi:string = calculateBmi(height, weight);
    res.send({weight,height,bmi});
});

app.get('/hello', (_req, res) => {
    res.send('Hello Full Stack!');
});

app.use(errorHandler);

const PORT = 3002;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
