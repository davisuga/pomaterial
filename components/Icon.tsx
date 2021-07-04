import { MaterialCommunityIcons } from "@expo/vector-icons";
import type icons from "./available";
import React from "react";
import { TouchableOpacity } from "react-native";

const iconSizes = {
  sm: 20,
  md: 30,
  lg: 40,
};

type IconProps = {
  name: icons;
  size: keyof typeof iconSizes;
  color: string;
  onPress?: Function;
};

const Icon = ({
  name,
  size,
  color = "white",
  onPress = () => console.log("pressed"),
}: IconProps) => {
  const computedSize = iconSizes[size];
  return (
    <TouchableOpacity onPress={onPress}>
      <MaterialCommunityIcons name={name} size={computedSize} color={color} />
    </TouchableOpacity>
  );
};

export default Icon;
