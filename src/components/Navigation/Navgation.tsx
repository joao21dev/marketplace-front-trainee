import { Box, Link , Text} from "@chakra-ui/react";
import theme from "../../theme/theme";

export function Navigation (){
    return (
         <Box
          as="nav"
          display="flex"
          alignItems="center"
          gap="1rem"
          fontFamily={`${theme.fontFamily }`}
          fontWeight={`${theme.fontWeights.bold }`}
          fontSize={`${theme.fontSizes.sm }`}
          lineHeight={`${theme.lineHeights.base }`}
          letterSpacing={`${theme.letterSpacings.widest }`}
        >
            <Link>INICIO</Link>
            <Link>PRODUTOS</Link>
            <Link>PERFIL</Link>
            <Link>SOBRE</Link>
        </Box>
    )
}