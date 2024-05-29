export interface LoginFormValues {
  username: string;
  password: string;
}

export interface RegisterFormValues {
  username: string;
  name: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface SignInRequest {
  username: string;
  password: string;
}

export interface SignUpRequest {
  username: string;
  name: string;
  lastName: string;
  email: string;
  password: string;
}


export interface SignInResponse {
  token: string;
}
