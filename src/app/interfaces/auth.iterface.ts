export interface AuthRegisterDto {
  email: string;
  password: string;
}

export interface AuthCredentialsDto {
  email: string;
  password: string;
}

export interface CognitoUserSession {
  accessToken: any;
  refreshToken: any;
}
