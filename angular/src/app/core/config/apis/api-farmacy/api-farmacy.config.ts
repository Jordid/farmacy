import { apiFarmacyEnvironment } from "src/environments/environment.prod";

export const ApiFarmacyEnv = {
  baseUrl: apiFarmacyEnvironment.hasOwnProperty('baseUrl')
    ? apiFarmacyEnvironment.baseUrl
    : null,
};
