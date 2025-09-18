import { PayStatusEnum } from "./users/enums";

export interface LoginDataInterface {
  email: string;
  password: string;
}

export interface UserInfoInterface {
  id: number;
  email: string;
  pay_status: PayStatusEnum;
}
