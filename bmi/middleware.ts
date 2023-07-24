import Express from 'express';

export const errorHandler = (error:Error, _request:Express.Request, response:Express.Response, next:Express.NextFunction):unknown  => {
  console.error(error.message);
  if (error.name === 'ParameterError')
    return response.status(400).send({ error: 'malformatted parameters' });
  if (error.name === 'MissingError')
    return response.status(400).send({ error: 'parameters missing' });
  return next(error);
};
