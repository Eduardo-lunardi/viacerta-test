import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { View } from 'react-native'
import { Button, Input, Typography } from 'src/components'
import { createAccountEmailSchema } from 'src/schemas'
import { storageService } from 'src/services'
import { TCreateAccountEmail } from 'src/types'

interface IEmailStepProps {
  onSubmit: () => void
}

export default function EmailStep(props: IEmailStepProps) {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { isValid }
  } = useForm({
    resolver: yupResolver(createAccountEmailSchema),
    defaultValues: { email: '' },
    mode: 'onChange'
  })

  React.useEffect(() => {
    const loadProgress = async () => {
      try {
        const savedData = await storageService.getStore()
        if (savedData && savedData.email) {
          setValue('email', savedData.email, { shouldValidate: true })
        }
      } catch (error) {
        console.error('Erro ao carregar progresso do armazenamento:', error)
      }
    }

    loadProgress()
  }, [])

  async function onSubmit(values: TCreateAccountEmail) {
    storageService.updateStore({ ...values, step: 3 })
    props.onSubmit()
  }

  return (
    <View style={{ gap: 24 }}>
      <View>
        <Typography variant="Heading">
          Para notificações, informe seu
        </Typography>
        <Typography variant="Heading" color="orange">
          E-MAIL
        </Typography>
      </View>
      <Controller
        name="email"
        control={control}
        render={({ field, fieldState }) => (
          <Input
            autoFocus
            value={field.value}
            autoCapitalize="none"
            keyboardType="email-address"
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
      />
    </View>
  )
}
