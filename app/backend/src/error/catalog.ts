export enum ErrorTypes {
  InvalidLogin = 'InvalidLogin',
  Inactive = 'Inactive'
}

type ErrorResponseObject = { 
  error: string;
  httpStatus: number
};

export type ErrorCatalog = {
  [key in ErrorTypes]: ErrorResponseObject
};

export const errorCatalog: ErrorCatalog = {
  InvalidLogin: {
    error: 'Email or password incorrect',
    httpStatus: 404,
  },
  Inactive: {
    error: 'You need to activate your account via the link sent in the email',
    httpStatus: 401,
  }
};