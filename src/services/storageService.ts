import AsyncStorage from '@react-native-async-storage/async-storage'
import { TCreateAccountDataStep } from 'src/types'

const STORAGE_KEY = 'storage_create_account'

const getStore = async (): Promise<TCreateAccountDataStep | undefined> => {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEY)
    return data ? JSON.parse(data) : null
  } catch (e) {
    // Error Handling
  }
}

const updateStore = async (
  value: Partial<TCreateAccountDataStep>
): Promise<void> => {
  try {
    const existingData = await getStore()
    const updatedData = { ...existingData, ...value }
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedData))
  } catch (e) {
    // Error Handling
  }
}

const deleteStore = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem(STORAGE_KEY)
  } catch (e) {
    // Error Handling
  }
}

export const storageService = {
  updateStore,
  getStore,
  deleteStore
}
