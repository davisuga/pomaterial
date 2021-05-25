import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native";
import Svg, { Circle, Path } from "react-native-svg";
import Animated, {
  useSharedValue,
  useAnimatedProps,
} from "react-native-reanimated";

import {
  flex,
  Container,
  Header,
  Label,
  Content,
  Title,
  Row,
  Button,
  BigButton,
  TabBar,
  SelectedTabIndicator,
} from "./styles";

const AnimatedPath = Animated.createAnimatedComponent(Path);

const brown = "#31302F";
const lightYellow = "#e8e3c1";
const yellow = "#FDE888";
const darkBrow = "#1c1a1c";

const currentTheme = {
  bg: darkBrow,
  surface: brown,
  primary: lightYellow,
  accent: yellow,
};
export const { primary, accent, bg, surface } = currentTheme;

export default function App() {
  const [clockActive, setClockActive] = useState(false);
  const radius = useSharedValue(50);

  const animatedProps = useAnimatedProps(() => {
    // draw a circle
    const path = `
    M 100, 100
    m -${radius.value}, 0
    a ${radius.value},${radius.value} 0 1,0 ${radius.value * 2},0
    a ${radius.value},${radius.value} 0 1,0 ${-radius.value * 2},0
    `;
    return {
      d: path,
    };
  });

  const [title, setTitle] = useState("Pasta");
  let [fontsLoaded] = useFonts({
    ProductSans: require("./assets/ProductSans.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <SafeAreaView style={flex}>
      <StatusBar backgroundColor={bg} />
      <Container>
        <Header>
          <Label>Timer</Label>
        </Header>
        <Content>
          <Title value={title} onChange={setTitle} />
          <Svg>
            <AnimatedPath animatedProps={animatedProps} fill="black" />
          </Svg>
          <Row>
            <Button>
              <MaterialCommunityIcons
                name="trash-can-outline"
                size={20}
                color={surface}
              />
            </Button>
            <BigButton>
              <MaterialCommunityIcons name="pause" size={30} color={surface} />
            </BigButton>
            <Button>
              <MaterialCommunityIcons name="plus" size={20} color={surface} />
            </Button>
          </Row>
        </Content>
        <TabBar>
          <MaterialCommunityIcons name="alarm" size={20} color={primary} />
          <MaterialCommunityIcons
            name="clock-outline"
            size={20}
            color={primary}
          />
          <SelectedTabIndicator>
            <MaterialCommunityIcons
              name="timer-sand-full"
              size={20}
              color={surface}
            />
          </SelectedTabIndicator>
          <MaterialCommunityIcons
            name="timer-outline"
            size={20}
            color={primary}
          />
          <MaterialCommunityIcons
            name="bed-outline"
            size={20}
            color={primary}
          />
        </TabBar>
      </Container>
    </SafeAreaView>
  );
}
