export interface User {
  id: number;
  Dni: string;
  password: string;
}

export interface Token {
  Token: string,
  Message: string,
  User: string
}
