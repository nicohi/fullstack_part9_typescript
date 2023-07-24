export const errorHandler = (error:Error, _request:unknown, response:any, next:Function)  => {
  console.error(error.message)
  if (error.name === 'ParameterError')
    return response.status(400).send({ error: 'malformatted parameters' })

  next(error)
}
