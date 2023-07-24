export const argCount = (args: string[]) : number => args.length - 2;

export const getNum = (index:number, args: string[]) : number => {
    if (!isNaN(Number(args[index]))) return Number(args[index]);
    else throw new Error(`"{args[index]}" is not a number`);
}

export const getNums = (count:number, args: string[]) : number[] => {
    if (count < args.length - 2) throw new Error('Too many arguments');
    if (count > args.length - 2) throw new Error('Not enough arguments');
    var nums:number[] = [];
    for (var i:number = 2; i < args.length; i++)
        nums = nums.concat([getNum(i, args)]);
    return nums;
}

export const logErrors = (fn:Function) => {
    try {
        fn();
    } catch (error: unknown) {
        let errorMessage = 'Something bad happened.'
        if (error instanceof Error) {
            errorMessage += ' Error: ' + error.message;
        }
        console.log(errorMessage);
    }
}
