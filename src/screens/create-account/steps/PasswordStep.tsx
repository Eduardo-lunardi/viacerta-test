import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { View } from 'react-native'
import { Button, InputPassword, Typography } from 'src/components'
import { createAccountPasswordSchema } from 'src/schemas'
import { storageService } from 'src/services'
import { TCreateAccountPassword } from 'src/types'

interface INameStepProps {
  onSubmit: () => void
  loading: boolean
}

export default function PasswordStep(props: INameStepProps) {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { isValid }
  } = useForm({
    resolver: yupResolver(createAccountPasswordSchema),
    defaultValues: {
      password: ''
    },
    mode: 'onChange'
  })

  React.useEffect(() => {
    const loadProgress = async () => {
      try {
        const savedData = await storageService.getStore()
        if (savedData && savedData.password) {
          setValue('password', savedData.password, { shouldValidate: true })
        }
      } catch (error) {
        console.error('Erro ao carregar progresso do armazenamento:', error)
      }
    }

    loadProgress()
  }, [])

  async function onSubmit(values: TCreateAccountPassword) {
    await storageService.updateStore({ ...values, step: 4 })
    props.onSubmit()
  }

  return (
    <View style={{ gap: 24 }}>
      <View>
        <Typography variant="Heading">Para segurança, crie uma</Typography>
        <Typography variant="Heading" color="orange">
          SENHA
        </Typography>
      </View>
      <Controller
        name="password"
        control={control}
        render={({ field, fieldState }) => (
          <InputPassword
            autoFocus
            value={field.value}
            onChangeText={field.onChange}
            error={fieldState.error?.message}
            onSubmitEditing={handleSubmit(onSubmit)}
          />
        )}
      />
      <Button
        text="PRÓXIMA"
        disabled={!isValid}
        onPress={handleSubmit(onSubmit)}
        loading={props.loading}
      />
    </View>
  )
}
