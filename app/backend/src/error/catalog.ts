export enum ErrorTypes {
  InvalidLogin = 'InvalidLogin',
  Inactive = 'Inactive',
  EmailExists = 'EmailExists',
  UserExists = 'UserExists'
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
  },
  EmailExists: {
    error: 'Email already exists',
    httpStatus: 409,
  },
  UserExists: {
    error: 'User already exists',
    httpStatus: 409,
  }
};