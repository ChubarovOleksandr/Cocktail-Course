export interface EmailInterface {
  email: string;
}

export interface ResetCodeInterface {
  email: string;
  code: string;
}

export interface ResetPasswordInterface {
  email: string;
  new_password: string;
}
