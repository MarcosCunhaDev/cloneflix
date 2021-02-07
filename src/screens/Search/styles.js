import styled from "styled-components/native";
import { colors } from "../../config/const";

export const BoxResults = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  margin-top: 10px;
  margin-right: 16px;
  border-width: 1px;
  border-color: #fff;
  border-radius: 5px;
`;
export const Label = styled.Text`
  color: ${colors.secondaryColor};
`;
