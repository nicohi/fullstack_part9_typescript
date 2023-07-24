import { getNums, logErrors, argCount } from './utils';

interface Result {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

const calculateExercises = (hours: number[], target: number) : Result => {
    const periodLength = hours.length;
    const trainingDays = hours.reduce((acc,h)=>acc+(h>0 ? 1 : 0), 0);
    const success = hours.reduce((acc,h)=>acc && h >= target, true);
    const rating = Math.max(1, 3 - periodLength + trainingDays - (success ? 0 : 1) );
    const ratingDescription = (['could be better', 'good', 'excellent'])[Math.floor(rating-1)];
    const average = hours.reduce((acc,h)=>acc+h, 0) / periodLength;
    return {
        periodLength,
        trainingDays,
        success,
        rating,
        ratingDescription,
        target,
        average,
    };
}

logErrors(() => {
    const argc = argCount(process.argv);
    if (argc < 2) throw new Error('Too few arguments');
    const [target, ...hours] = getNums(argc, process.argv);

    console.log(calculateExercises(hours, target));
})
