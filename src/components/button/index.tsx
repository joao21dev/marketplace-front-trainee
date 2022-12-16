import { Button } from "@chakra-ui/react";
import React, { ButtonHTMLAttributes } from "react";
import { themes } from "../../theme/btnThemes";
import theme from "../../theme/theme";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  themeName: 'primary' | 'secondary' | 'tertiary'
}

const PersonButton: React.FC<Props> = (
  ({ className, themeName, ...rest }) => {

    return (
      <Button
        borderRadius='0'
        padding='0.9rem 1.9rem'
        width='160px'
        margin={theme.space['4']}
        fontSize={theme.fontSizes.sm}
        fontWeight={theme.fontWeights.bold}
        textTransform='uppercase'
        letterSpacing={theme.letterSpacings.wider}
        className={className}
        {...themes[themeName]}
        {...rest}
      />
    );
  }
);

export default PersonButton;

