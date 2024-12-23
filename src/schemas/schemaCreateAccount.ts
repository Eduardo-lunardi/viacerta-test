import {
  TCreateAccountCPF,
  TCreateAccountEmail,
  TCreateAccountName,
  TCreateAccountPassword
} from 'src/types'
import { object, ObjectSchema, string } from 'yup'

export const createAccountCPFSchema: ObjectSchema<TCreateAccountCPF> = object({
  cpf: string()
    .required('CPF obrigatório')
    .test('is-valid-cpf', 'Informe um CPF válido', (value) => {
      if (!value) return false

      const cleanedCPF = value.replace(/\D/g, '')
      if (cleanedCPF.length !== 11) return false

      if (/^(\d)\1+$/.test(cleanedCPF)) return false

      const calcDigit = (base: string, factor: number) =>
        [...base].reduce(
          (sum, num, idx) => sum + parseInt(num) * (factor - idx),
          0
        ) % 11

      const baseCPF = cleanedCPF.slice(0, 9)
      const digit1 = (
        calcDigit(baseCPF, 10) < 2 ? 0 : 11 - calcDigit(baseCPF, 10)
      ).toString()
      const digit2 = (
        calcDigit(baseCPF + digit1, 11) < 2
          ? 0
          : 11 - calcDigit(baseCPF + digit1, 11)
      ).toString()

      return cleanedCPF.endsWith(digit1 + digit2)
    })
}).required()

export const createAccountNameSchema: ObjectSchema<TCreateAccountName> = object(
  {
    name: string()
      .required('Nome obrigatório')
      .min(3, ' Mínimo de 3 caracteres')
  }
).required()

export const createAccountEmailSchema: ObjectSchema<TCreateAccountEmail> =
  object({
    email: string()
      .required('E-mail obrigatório')
      .email('Informe um E-MAIL válido')
  }).required()

export const createAccountPasswordSchema: ObjectSchema<TCreateAccountPassword> =
  object({
    password: string()
      .required('Senha obrigatório')
      .min(8, 'A senha deve ter pelo menos 8 caracteres')
      .matches(/[a-z]/, 'A senha deve conter pelo menos uma letra minúscula')
      .matches(/[A-Z]/, 'A senha deve conter pelo menos uma letra maiúscula')
      .matches(/[\W_]/, 'A senha deve conter pelo menos um caractere especial')
  }).required()
