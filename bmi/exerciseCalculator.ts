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

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2))
