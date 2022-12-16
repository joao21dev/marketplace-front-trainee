import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Divider,
  Box,
  Center
} from '@chakra-ui/react'
import { useState } from 'react'
import theme from '../../theme/theme'
import { LoginForm } from '../LoginForm/LoginForm'
import { SignUpForm } from '../SignUpForm/SignUpForm'

interface AuthModalProps {}

export const AuthModal: React.FC<AuthModalProps> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isLogin, setIsLogin] = useState<Boolean>(true)

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent display={'flex'} flexDirection={'column'} gap={'1.5rem'}>
          <ModalHeader>
            <Box
              display={'flex'}
              gap={'1rem'}
              fontFamily={theme.fontFamily}
              fontWeight={theme.fontWeights.bold}
            >
              <Button
                onClick={() => setIsLogin(true)}
                fontSize={'1.3rem'}
                isActive={isLogin ? true : false}
                _hover={{
                  bg: theme.colors.orange['400'],
                  transition: '0.5s'
                }}
                _active={{
                  bg: theme.colors.orange['500'],
                  color: theme.colors.white,
                  transition: '0.5s'
                }}
              >
                LOGIN
              </Button>
              <Center height={'inherit'}>
                <Divider
                  orientation="vertical"
                  width={'2px'}
                  backgroundColor={theme.colors.black}
                />
              </Center>
              <Button
                onClick={() => setIsLogin(false)}
                fontSize={'1.3rem'}
                isActive={!isLogin ? true : false}
                _hover={{
                  bg: theme.colors.orange['400'],
                  transition: '0.5s'
                }}
                _active={{
                  bg: theme.colors.orange['500'],
                  color: theme.colors.white,
                  transition: '0.5s'
                }}
              >
                REGISTRAR
              </Button>
            </Box>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>{isLogin ? <LoginForm /> : <SignUpForm />}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
