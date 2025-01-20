export type formData = {
  email: string,
  password: string
  course?: number | null
}

export type emailField = {
  email: string
}

export type codeField = {
  code: number
}

export type passwordField = {
  password: string
}

export type resetData = {
  code: number,
  email: string
}

export type resetPasswordData = {
  email: string,
  password: string,
}