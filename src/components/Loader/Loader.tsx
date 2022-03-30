import { RotatingSquare } from 'react-loader-spinner'

import { LoaderProps } from './types'

export const Loader: React.FC<LoaderProps> = ({
  visible = true,
  color = 'black',
}) => {
  return (
    <RotatingSquare
      ariaLabel="rotating-square"
      visible={visible}
      color={color}
    />
  )
}
