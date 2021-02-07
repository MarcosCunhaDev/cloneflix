import styled from "styled-components/native";
import { colors } from "../../config/const";

export const Container = styled.SafeAreaView`
  background-color: ${colors.primaryColor};
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  padding-top: 40px;
  padding-left: 16px;
`;
export const Label = styled.Text`
  color: ${colors.secondaryColor};
`;
