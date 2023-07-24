const calculateBmiScore = (heightcm: number, weightkg: number) : number => {
    const heightm = heightcm / 100;
    return weightkg / heightm ** 2;
}

const calculateBmi = (heightcm: number, weightkg: number) : string => {
    const score = calculateBmiScore(heightcm, weightkg);
    if (score < 16.0)
        return 'Underweight (Severe thinness)';
    if (16.0 <= score  && score <= 16.9)
        return 'Underweight (Moderate thinness)';
    if (17.0 <= score  && score <= 18.4)
        return 'Underweight (Mild thinness)';
    if (18.5 <= score  && score <= 24.9)
        return 'Normal (healthy weight)';
    if (25.0 <= score  && score <= 29.9)
        return 'Overweight (Pre-obese)';
    if (30.0 <= score  && score <= 34.9)
        return 'Obese (Class I)';
    if (35.0 <= score  && score <= 39.9)
        return 'Obese (Class II)';
    if (40.0 <= score)
        return 'Obese (Class III)';
}


console.log(calculateBmi(180, 74));
