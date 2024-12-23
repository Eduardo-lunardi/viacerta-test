import { NativeStackHeaderProps } from '@react-navigation/native-stack'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { theme } from 'src/constants'

import ChevronLeftIcon from './ChevronLeftIcon'
import Typography from './Typography'

export default function Header(props: NativeStackHeaderProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.navigation.goBack} style={styles.backButton}>
        <ChevronLeftIcon />
      </TouchableOpacity>
      <Typography variant="Heading" color="blue" style={styles.title}>
        {props.options.title}
      </Typography>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.gray,
    paddingHorizontal: 16,
    height: 90,
    width: '100%'
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: theme.colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 16,
    zIndex: 1
  },
  title: {
    zIndex: 0,
    flex: 1,
    textAlign: 'center',
    fontWeight: '600'
  }
})
