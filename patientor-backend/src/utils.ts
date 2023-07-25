import { NewPatient, Gender, Entry } from './types';

const isGender = (param: string): param is Gender => {
  return Object.values(Gender).map(v => v.toString()).includes(param);
};

const isString = (text: unknown): text is string => {
  return typeof text === 'string' || text instanceof String;
};

const isEntry = (entry: unknown): entry is Entry => {
  // TODO properly
  return entry === entry;
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const parseString = (str: unknown): string => {
  if (!str || !isString(str)) {
      throw new Error('Incorrect or missing string: ' + str);
  }
  return str;
};

const parseGender = (gender: unknown): Gender => {
  if (!gender || !isString(gender) || !isGender(gender)) {
      throw new Error('Incorrect or missing gender: ' + gender);
  }
  return gender;
};

const parseDate = (date: unknown): string => {
  if (!date || !isString(date) || !isDate(date)) {
      throw new Error('Incorrect or missing date: ' + date);
  }
  return date;
};

const parseEntries = (es: unknown): Entry[] => {
  if (!es || !Array.isArray(es) || es.reduce((a:boolean,e)=> a || !isEntry(e),false)) {
      throw new Error('Not an array of entries: ' + es);
  }
  return es as Entry[];
};

export const toNewPatient = (object: unknown): NewPatient => {
  if ( !object || typeof object !== 'object' ) {
    throw new Error('Incorrect or missing data');
  }

  if ('name' in object && 'dateOfBirth' in object && 'ssn' in object &&
      'gender' in object && 'occupation' in object && 'entries' in object)  {
    const newPatient: NewPatient = {
      name: parseString(object.name),
      dateOfBirth: parseDate(object.dateOfBirth),
      ssn: parseString(object.ssn),
      gender: parseGender(object.gender),
      occupation: parseString(object.occupation),
      entries: parseEntries(object.entries),
    };

    return newPatient;
  }

  throw new Error('Incorrect data: some fields are missing');
};
