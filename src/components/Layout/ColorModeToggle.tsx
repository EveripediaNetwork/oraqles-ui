import React from 'react'
import { IconButton, IconButtonProps, useColorMode } from '@chakra-ui/react'
import { RiSunFill, RiMoonFill } from 'react-icons/ri'

const ColorToggleButton = (props: Omit<IconButtonProps, 'aria-label'>) => {
  const { colorMode, toggleColorMode } = useColorMode()

  const ColorModeIcon = colorMode === 'light' ? RiMoonFill : RiSunFill

  return (
    <IconButton
      aria-label="Color mode"
      icon={<ColorModeIcon />}
      onClick={toggleColorMode}
      variant="outline"
      size="md"
      {...props}
    />
  )
}

export default ColorToggleButton
