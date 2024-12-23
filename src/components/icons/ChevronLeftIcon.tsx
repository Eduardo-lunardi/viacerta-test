import Svg, { Path, SvgProps } from 'react-native-svg'
import { theme } from 'src/constants'

export default function ChevronLeftIcon(props: SvgProps) {
  return (
    <Svg width="24" height="24" viewBox="0 0 320 512" {...props}>
      <Path
        d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
        fill={theme.colors.orange}
      />
    </Svg>
  )
}
