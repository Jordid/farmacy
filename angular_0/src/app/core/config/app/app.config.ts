import { appEnvironment } from '../../../../environments/environment';

export const AppEnv = {
  appCode: appEnvironment.hasOwnProperty('appCode')
    ? appEnvironment.appCode
    : null,
};
