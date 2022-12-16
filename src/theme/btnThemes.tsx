import { ChevronRightIcon } from "@chakra-ui/icons";
import theme from "./theme";

export const themes = {
  primary: {
    colorScheme: theme.colors.black,
    variant:'outline',
    _hover: {
      background: theme.colors.black,
      color: theme.colors.white,
    }
  },
  secondary: {
    backgroundColor: theme.colors.orange['500'],
    color: theme.colors.white,
    variant:'solid',
    _hover: {
      background: theme.colors.orange['400'],
      color: theme.colors.white,
    }
  },
  tertiary: {
    backgroundColor: 'transparent',
    color: theme.colors.black,
    variant:'solid',
    rightIcon: <ChevronRightIcon fontSize={theme.fontSizes.md} color={theme.colors.orange['500']}/> ,
    _hover: {
      color: theme.colors.orange['500'],
    }
  }
}