import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { View } from 'react-native'
import { Button, CPFInput, Typography } from 'src/components'
import { createAccountCPFSchema } from 'src/schemas'
import { storageService } from 'src/services'
import { TCreateAccountCPF } from 'src/types'

interface ICPFStepProps {
  onSubmit: () => void
}

export default function CPFStep(props: ICPFStepProps) {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { isValid }
  } = useForm({
    resolver: yupResolver(createAccountCPFSchema),
    defaultValues: { cpf: '' },
    mode: 'onChange'
  })

  React.useEffect(() => {
    const loadProgress = async () => {
      try {
        const savedData = await storageService.getStore()
        if (savedData && savedData.cpf) {
          setValue('cpf', savedData.cpf, { shouldValidate: true })
        }
      } catch (error) {
        console.error('Erro ao carregar progresso do armazenamento:', error)
      }
    }

    loadProgress()
  }, [])

  async function onSubmit(values: TCreateAccountCPF) {
    storageService.updateStore({ ...values, step: 2 })
    props.onSubmit()
  }

  return (
    <View style={{ gap: 24 }}>
      <View>
        <Typography variant="Heading">Digite seu</Typography>
        <Typography variant="Heading" color="orange">
          CPF
        </Typography>
      </View>
      <Controller
        name="cpf"
        control={control}
        render={({ field, fieldState }) => (
          <CPFInput
            value={field.value}
            onChangeText={field.onChange}
            error={fieldState.error?.message}
            onSubmitEditing={handleSubmit(onSubmit)}
          />
        )}
      />
      <Button text="PRÓXIMA" disabled={!isValid} onPress={handleSubmit(onSubmit)} />
    </View>
  )
}
