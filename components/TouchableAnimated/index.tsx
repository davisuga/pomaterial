import React, { ReactNode } from "react";
import { TouchableOpacityProps } from "react-native";

import { TapGestureHandler } from "react-native-gesture-handler";
import { Container } from "./styles";

interface TouchableAnimatedProps {
  children: ReactNode;
}

function TouchableAnimated({
  children,
  ...props
}: TouchableAnimatedProps & TouchableOpacityProps) {
  return (
    <TapGestureHandler>
      <Container {...props}></Container>
    </TapGestureHandler>
  );
}

export default TouchableAnimated;
