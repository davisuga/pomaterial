import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const darkBrown = "#31302F";
const lightYellow = "#e8e3c1";
const Container = styled.View`
  flex-direction: column;
  background-color: #1c1a1c;
  flex: 1;
  align-items: stretch;
`;
const Label = styled.Text`
  font-family: ProductSans;
  color: #f3eff1;
  font-size: 24px;
`;
const Title = styled(Label)`
  font-size: 36px;
`;
const Header = styled.View`
  padding: 30px;
`;
const Content = styled.View`
  background-color: #31302f;
  border-radius: 30px;
  padding: 30px;
  flex: 14;
`;
const TabBar = styled.View`
  padding-top: 30px;
  padding-bottom: 30px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex: 1;
  flex-direction: row;
`;
const SelectedTabIndicator = styled.View`
  width: 19%;
  min-height: 30px;
  border-radius: 20px;
  background-color: #e8e3c1;
  justify-content: center;
  align-items: center;
`;
export default function App() {
  let [fontsLoaded] = useFonts({
    ProductSans: require("./assets/ProductSans.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <Container>
      <Header>
        <Label>Timer</Label>
      </Header>
      <Content>
        <Title>Pasta</Title>
      </Content>
      <TabBar>
        <MaterialCommunityIcons name="alarm" size={20} color={lightYellow} />
        <MaterialCommunityIcons
          name="clock-outline"
          size={20}
          color={lightYellow}
        />
        <SelectedTabIndicator>
          <MaterialCommunityIcons
            name="timer-sand-full"
            size={20}
            color={darkBrown}
          />
        </SelectedTabIndicator>
        <MaterialCommunityIcons
          name="timer-outline"
          size={20}
          color={lightYellow}
        />
        <MaterialCommunityIcons
          name="bed-outline"
          size={20}
          color={lightYellow}
        />
      </TabBar>
    </Container>
  );
}
