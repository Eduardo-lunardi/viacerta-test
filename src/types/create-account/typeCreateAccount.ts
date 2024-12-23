export type TCreateAccountCPF = {
  cpf: string
}

export type TCreateAccountName = {
  name: string
}

export type TCreateAccountEmail = {
  email: string
}

export type TCreateAccountPassword = {
  password: string
}

export type TCreateAccountDataStep = TCreateAccountCPF &
  TCreateAccountName &
  TCreateAccountEmail &
  TCreateAccountPassword & {
    step: number
  }
