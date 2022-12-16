import { Box, Flex, Text } from "@chakra-ui/react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";




import ProductAddToCart from "../components/ProductCard/ProductCard";
import { apiUrl } from "../env";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { selectCount } from "../store";

export default function Home() {
  const count = useAppSelector(selectCount)
  const dispatch = useAppDispatch()

  console.log(apiUrl)

  return (
    <>
      <Box minHeight="100vh" display="flex" flexDirection="column">
        <Box flexGrow="1">
        <Header/>
        </Box>

        <Box flex="1 0 auto">
          <Flex alignItems='center' maxW='full' flexWrap='wrap'>
          <ProductAddToCart/>
          <ProductAddToCart/>
          <ProductAddToCart/>
          <ProductAddToCart/>
            
          </Flex>
        </Box>


        <Hero />
        <Footer />
      </Box>
    </>
  )
}
