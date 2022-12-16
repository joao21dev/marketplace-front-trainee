import { Box, Flex, Link, Text, theme } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { SubmitHandler } from 'react-hook-form/dist/types'
import PersonButton from '../button'
import PersonInput from '../Input'

interface LoginFormProps {}

interface IFormInput {
  email: String
  password: String
}

export const LoginForm: React.FC<LoginFormProps> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormInput>({
    defaultValues: {
      email: '',
      password: ''
    }
  })
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex flexDirection={'column'} gap={'1.5rem'} width={'100%'}>
          <Flex flexDirection={'column'} gap={'1rem'}>
            <PersonInput
              placeholder="exemplo@email.com"
              label={'Email'}
              error={errors?.email?.message?.toString()}
              register={{
                ...register('email', {
                  required: 'Email obrigatório',
                  pattern: {
                    message: 'Insira um email válido',
                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
                  }
                })
              }}
            />

            <PersonInput
              placeholder={'********'}
              label={'Senha'}
              error={errors?.password?.message?.toString()}
              isPasswordInput
              register={{
                ...register('password', {
                  required: { message: 'Senha obrigatória', value: true }
                })
              }}
            />
            <Link>
              <Text ml={'0.5rem'} fontSize={theme.fontSizes.sm} opacity="0.7">
                Esqueceu a senha?
              </Text>
            </Link>
          </Flex>
          <Flex width={'100%'} justifyContent="center">
            <PersonButton type="submit" themeName="secondary">
              Entrar
            </PersonButton>
          </Flex>
        </Flex>
      </form>
    </>
  )
}
