import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { View } from 'react-native'
import { Button, Input, Typography } from 'src/components'
import { createAccountNameSchema } from 'src/schemas'
import { storageService } from 'src/services'
import { TCreateAccountName } from 'src/types'

interface INameStepProps {
  onSubmit: () => void
}

export default function NameStep(props: INameStepProps) {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { isValid }
  } = useForm({
    resolver: yupResolver(createAccountNameSchema),
    defaultValues: { name: '' },
    mode: 'onChange'
  })

  React.useEffect(() => {
    const loadProgress = async () => {
      try {
        const savedData = await storageService.getStore()
        if (savedData && savedData.name) {
          setValue('name', savedData.name, { shouldValidate: true })
        }
      } catch (error) {
        console.error('Erro ao carregar progresso do armazenamento:', error)
      }
    }

    loadProgress()
  }, [])

  async function onSubmit(values: TCreateAccountName) {
    storageService.updateStore({ ...values, step: 2 })
    props.onSubmit()
  }

  return (
    <View style={{ gap: 24 }}>
      <View>
        <Typography variant="Heading">Tudo certo, agora informe seu</Typography>
        <Typography variant="Heading" color="orange">
          Nome
        </Typography>
      </View>
      <Controller
        name="name"
        control={control}
        render={({ field, fieldState }) => (
          <Input
            value={field.value}
            onChangeText={field.onChange}
            error={fieldState.error?.message}
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
