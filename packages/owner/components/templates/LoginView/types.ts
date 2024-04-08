export interface LoginDetails {
  email: string
  password: string
}

export interface LoginViewProps {
  handleLogin: (data: LoginDetails) => Promise<void>
  loading: boolean
}
