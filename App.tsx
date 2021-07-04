import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import Icon from "./components/Icon";
import { SafeAreaView, StyleSheet } from "react-native";
import Svg, { Circle, Path } from "react-native-svg";
import Animated, {
  useSharedValue,
  useAnimatedProps,
  withSpring,
  useAnimatedStyle,
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
import { currentTheme } from "./theme";

const AnimatedPath = Animated.createAnimatedComponent(Path);
const { primary, accent, bg, surface } = currentTheme;
const styles = StyleSheet.create({
  box: {
    backgroundColor: "#0002",
    flexShrink: 1,
    justifyContent: `center`,
    alignItems: "center",
  },
});

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

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: radius.value }],
    };
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  const animateBall = () => {
    radius.value = withSpring(Math.random() * 100);
  };

  return (
    <SafeAreaView style={flex}>
      <StatusBar backgroundColor={bg} />
      <Container>
        <Header>
          <Label>Timer</Label>
        </Header>

        <Content>
          {/* <Animated.View style={[styles.box, animatedStyles]} /> */}
          <Title value={title} onChange={setTitle} />
          <Svg style={[styles.box]}>
            <AnimatedPath animatedProps={animatedProps} fill={accent} />
          </Svg>
          <Row>
            <Button>
              <Icon name="trash-can-outline" size={"sm"} color={surface} />
            </Button>
            <BigButton>
              <Icon name="pause" size={"md"} color={surface} />
            </BigButton>
            <Button>
              <Icon name="plus" size={"sm"} color={surface} />
            </Button>
          </Row>
        </Content>
        <TabBar>
          <Icon
            onPress={animateBall}
            name="alarm"
            size={"sm"}
            color={primary}
          />
          <Icon
            onPress={animateBall}
            name="clock-outline"
            size={"sm"}
            color={primary}
          />
          <SelectedTabIndicator onPress={animateBall}>
            <Icon
              onPress={animateBall}
              name="timer-sand-full"
              size={"sm"}
              color={surface}
            />
          </SelectedTabIndicator>
          <Icon name="timer-outline" size={"sm"} color={primary} />
          <Icon name="bed-outline" size={"sm"} color={primary} />
        </TabBar>
      </Container>
    </SafeAreaView>
  );
}
