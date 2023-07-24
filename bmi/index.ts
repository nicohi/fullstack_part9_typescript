import express from 'express';
import { calculateBmi } from './bmiCalculator';
import { errorHandler } from './middleware';

const app = express();

const parameterError = (message:string) : Error => {
  const e = new Error(message);
  e.name = 'ParameterError';
  return e;
};

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
