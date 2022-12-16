import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Spacer,
  Text,
  Tooltip
} from '@chakra-ui/react'
import React from 'react'
import theme from '../../theme/theme'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  placeholder: string
  error?: string
  register: object
  isPasswordInput?: boolean
}

const PersonInput: React.FC<Props> = ({
  placeholder,
  label,
  error,
  className,
  register,
  isPasswordInput
}) => {
  const [show, setShow] = React.useState(isPasswordInput ? false : true)

  const handleClick = () => setShow(!show)

  return (
    <Flex flexDirection="column" width={'100%'}>
      <Flex minWidth="max-content">
        <Box>
          <Text
            mb="9px"
            fontSize={theme.fontSizes.xs}
            color={error ? theme.colors.red['600'] : theme.colors.black}
            fontWeight={theme.fontWeights.bold}
          >
            {label}
          </Text>
        </Box>

        <Spacer />

        <Box>
          <Text
            mb="9px"
            fontSize={theme.fontSizes.xs}
            color={error ? theme.colors.red['600'] : theme.colors.black}
            fontWeight={theme.fontWeights.medium}
          >
            {error}
          </Text>
        </Box>
      </Flex>

      <InputGroup>
        <Input
          placeholder={placeholder}
          _placeholder={{ opacity: 0.4, color: theme.colors.black }}
          type={show ? 'text' : 'password'}
          className={className}
          size="md"
          width={'100%'}
          border="1px solid #CFCFCF"
          borderRadius="8px"
          focusBorderColor={theme.colors.orange['500']}
          isInvalid={Boolean(error)}
          errorBorderColor={theme.colors.red['600']}
          {...register}
        />
        {isPasswordInput && (
          <InputRightElement>
            <Tooltip
              hasArrow
              label={show ? 'Ocultar' : 'Mostrar'}
              backgroundColor={theme.colors.orange[500]}
            >
              <Button size={'sm'} onClick={handleClick}>
                {show ? <ViewOffIcon /> : <ViewIcon />}
              </Button>
            </Tooltip>
          </InputRightElement>
        )}
      </InputGroup>
    </Flex>
  )
}

export default PersonInput
