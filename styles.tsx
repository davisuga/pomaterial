import styled from "styled-components/native";
import { primary, accent, bg, surface } from "./App";

export const Container = styled.View`
  flex-direction: column;
  background-color: ${bg};
  flex: 1;
  align-items: stretch;
`;
export const Label = styled.Text`
  font-family: ProductSans;
  color: #f3eff1;
  font-size: 24px;
`;
export const Title = styled.TextInput`
  font-family: ProductSans;
  color: #f3eff1;
  font-size: 36px;
`;
export const Header = styled.View`
  padding: 30px;
`;
export const Content = styled.View`
  background-color: ${surface};
  border-radius: 30px;
  padding: 30px;
  flex: 14;
  justify-content: space-between;
`;
export const TabBar = styled.View`
  padding-top: 30px;
  padding-bottom: 30px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex: 1;
  flex-direction: row;
`;
export const Row = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
export const SelectedTabIndicator = styled.View`
  width: 19%;
  min-height: 30px;
  border-radius: 200px;
  background-color: ${primary};
  justify-content: center;
  align-items: center;
  padding: 12px;
`;
export const Button = styled.TouchableOpacity`
  background-color: ${primary};
  width: 18%;
  aspect-ratio: 1;
  background: ${primary};
  border-radius: 68px;
  justify-content: center;
  align-items: center;
`;
Button.defaultProps = {
  activeOpacity: 0.86,
};
export const BigButton = styled(Button)`
  width: 24%;
  background: ${accent};
  border-radius: 30px;
`;
export const flex = { flex: 1, paddingTop: 10 };
