export interface LoginForm {
  username: string;
  password: string;
}

export interface JoinForm extends LoginForm {
  nickname: string;
}

export interface ResPostAuth {
  token: string;
}

export interface ResGetInfo {
  count: {
    mail: number;
    mailBox: number;
  };
}
