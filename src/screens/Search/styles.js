import styled from "styled-components/native";
import { colors } from "../../config/const";

export const BoxResults = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  padding-horizontal: 20px;
  margin-right: 16px;
  border-radius: 5px;
`;
export const Label = styled.Text`
  color: ${colors.secondaryColor};
`;
