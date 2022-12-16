import {
    Flex,
    Circle,
    Box,
    Image,
    Badge,
    useColorModeValue,
    Icon,
    chakra,
    Tooltip,
    Text,
    Button,
  } from '@chakra-ui/react';
  import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
  import { FiShoppingCart } from 'react-icons/fi';
  import theme from "../../theme/theme";
  
  const data = {
    isNew: true,
    imageURL:
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
    name: 'XX99 Mark II Headphones',
    description: 'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
    category:'NEW PRODUCT',
    price: 1.850,
    rating: 4.1,
    numReviews: 34,
  };
  
  
  
  
  
  function ProductAddToCart() {
    return (
      <Flex p={10} maxW='350px' w="full"  alignItems="center" justifyContent="center">
        <Box
          bg={useColorModeValue('white', 'gray.800')}
          maxW="sm"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative">
            
          <Image
            src={data.imageURL}
            alt={`Picture of ${data.name}`}
            roundedTop="lg"
          />
  
          <Box display='flex' flexDirection='column' alignItems='center' p="6">
            
            <Flex mt="1" gap="24px" flexDirection="column" alignContent="center">
                     
            <Text align='center' letterSpacing='wide_xl' color={theme.colors.orange[500]}>{data.category}</Text>
              
                <Text 
                textTransform="uppercase"
                fontSize='28px'
                fontWeight="bold"
                fontFamily={theme.fontFamily}
                letterSpacing={theme.letterSpacings.productNameSpace}
                as="h4"
                lineHeight="normal"
                align="center"
                >

                {data.name}

                </Text>
               
                <Text align='center'
                fontFamily={theme.fontFamily} 
                fontWeight='500'
                fontSize='md'
                lineHeight='6'>
                
                  {data.description}
                  </Text>

                  
                  <Text 
                  fontFamily={theme.fontFamily}
                  fontSize='3xl'
                  fontWeight='black'
                  align='center'>$  
                {data.price.toFixed(3)}

                </Text>

                <Button
                color='white'
                _hover={{
                  background:'black'
                }}
                
                h='3em'
                borderRadius='0'
                bg={theme.colors.orange[500]}
                >SEE PRODUCT</Button>
               
             
              
            </Flex>
  
           
          </Box>
        </Box>
      </Flex>
    );
  }
  
  export default ProductAddToCart;