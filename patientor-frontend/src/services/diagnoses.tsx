import axios from "axios";
import { Diagnosis, PatientFormValues } from "../types";

import { apiBaseUrl } from "../constants";

const getAll = async () => {
  const { data } = await axios.get<Diagnosis[]>(
    `${apiBaseUrl}/diagnoses`
  );

  return data;
};

const create = async (object: PatientFormValues) => {
  const { data } = await axios.post<Diagnosis>(
    `${apiBaseUrl}/diagnoses`,
    object
  );

  return data;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAll, create
};
