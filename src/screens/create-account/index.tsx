import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, FormContainer, Typography } from 'src/components'
import { api, storageService } from 'src/services'
import { TStackScreenProps } from 'src/types'

import CPFStep from './steps/CPFStep'
import EmailStep from './steps/EmailStep'
import NameStep from './steps/NameStep'
import PasswordStep from './steps/PasswordStep'

export default function CreateAccount({
  navigation
}: TStackScreenProps<'CreateAccount'>) {
  const [currentStep, setCurrentStep] = React.useState(1)
  const [storageStep, setStorageStep] = React.useState(1)
  const [isResumePromptVisible, setResumePromptVisible] = React.useState(false)
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    const loadProgress = async () => {
      const savedData = await storageService.getStore()
      if (savedData?.step) {
        setResumePromptVisible(true)
        setStorageStep(savedData?.step)
      }
    }

    loadProgress()
  }, [])

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', (e) => {
      if (currentStep === 1) {
        return
      } else {
        e.preventDefault()
        setCurrentStep((prevStep) => prevStep - 1)
      }
    })
    return unsubscribe
  }, [navigation, currentStep])

  function handleContinue() {
    setResumePromptVisible(false)
    setCurrentStep(storageStep)
  }

  function handleRestart() {
    setResumePromptVisible(false)
    storageService.deleteStore()
    setCurrentStep(1)
  }

  async function onSubmit() {
    try {
      setLoading(true)
      const data = await storageService.getStore()
      delete data?.step
      await api.post('/users', data)
      await storageService.deleteStore()
      setCurrentStep(1)
      setStorageStep(1)
      navigation.navigate('Success')
    } catch (error) {
      console.error('Erro ao criar usuário:', error)
      throw error
    } finally {
      setLoading(false)
    }
  }

  return (
    <FormContainer>
      {isResumePromptVisible ? (
        <View style={styles.modalContent}>
          <Typography variant="Body" style={styles.modalText}>
            Você já iniciou o processo de criação de conta. Deseja continuar de
            onde parou ou começar novamente?
          </Typography>
          <View style={styles.buttonContainer}>
            <Button
              variant="secondary"
              text="Recomeçar"
              onPress={handleRestart}
            />
            <Button text="Continuar" onPress={handleContinue} />
          </View>
        </View>
      ) : (
        <>
          {currentStep === 1 && <CPFStep onSubmit={() => setCurrentStep(2)} />}
          {currentStep === 2 && <NameStep onSubmit={() => setCurrentStep(3)} />}
          {currentStep === 3 && (
            <EmailStep onSubmit={() => setCurrentStep(4)} />
          )}
          {currentStep === 4 && (
            <PasswordStep onSubmit={onSubmit} loading={loading} />
          )}
        </>
      )}
    </FormContainer>
  )
}

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalText: {
    marginBottom: 20
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 16
  }
})
