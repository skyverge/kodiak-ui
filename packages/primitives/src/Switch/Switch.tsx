import * as React from 'react'
import { Box } from '../Box/Box'
import { Label } from '../Label'
import { Input } from '../Input'

function SwitchIndicator({
  checked,
  disabled,
}: {
  checked?: boolean
  disabled?: boolean
}) {
  return (
    <Box
      as="span"
      border="solid"
      borderWidth={1}
      opacity={disabled ? 0.7 : 1}
      backgroundColor={checked ? 'blue.1' : 'grey.5'}
      borderColor={checked ? 'blue.4' : 'grey.5'} // darkest blue
      borderRadius={40}
      display="inline-block"
      height={16}
      ml={-38}
      mr={2}
      position="relative"
      sx={{
        transition: 'background-color 0.1s cubic-bezier(0.4, 1, 0.75, 0.9)',
        ...(disabled && { cursor: 'not-allowed', outline: 'none' }),

        'input:focus ~ &': {
          outline: '2px auto',
          outlineColor: 'blue.2',
          outlineOffset: 2,
        },

        '&::before': {
          background: 'white',
          borderRadius: '50%',
          content: '""',
          display: 'block',
          height: '12px',
          width: '12px',
          position: 'absolute',
          top: '50%',
          left: checked ? 'calc(100% - 13px)' : '1px',
          transform: 'translateY(-50%)',
          transition: 'left 0.1s cubic-bezier(0.4, 1, 0.75, 0.9)',
        },
      }}
      width={28}
    />
  )
}

interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  inline?: boolean
  displayInForm?: boolean
}

export function Switch({
  label,
  inline = false,
  displayInForm = false,
  checked,
  disabled,
  children,
  ...rest
}: SwitchProps) {
  return (
    <Label
      alignItems="center"
      display="inline-flex"
      flexShrink={0}
      sx={{
        cursor: disabled ? 'not-allowed' : 'pointer',
        textTransform: 'none',
      }}
      opacity={disabled ? 0.5 : 1}
      pl={38}
      fontSize={'default'}
      position="relative"
      mr={inline ? 2 : 4}
      mb={inline ? 0 : 4}
      minHeight={displayInForm ? 32 : 'none'}
    >
      <Input
        type="checkbox"
        position="absolute"
        opacity={0}
        left={0}
        top={0}
        zIndex={-1}
        {...rest}
        checked={checked}
      />
      <SwitchIndicator checked={checked} disabled={disabled} />
      {label || children}
    </Label>
  )
}