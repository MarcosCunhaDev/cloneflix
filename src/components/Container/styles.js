import styled from "styled-components/native";
import { colors } from "../../config/const";

export const Container = styled.SafeAreaView`
  background-color: ${colors.primaryColor};
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const Label = styled.Text`
  color: ${colors.secondaryColor};
`;
