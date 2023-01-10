export enum ApplicationHeaderEnum {
  WEB = 'WEB',
}

export type ApplicationHeaderType = ApplicationHeaderEnum.WEB;

export const ApplicationHeaderArray = [ApplicationHeaderEnum.WEB];

export const ApplicationHeaderInfo = [
  {
    [ApplicationHeaderEnum.WEB]: {
      name: 'Web',
    },
  },
];
