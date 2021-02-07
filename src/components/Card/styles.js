import styled from "styled-components/native";
import { colors } from "../../config/const";

export const BoxCard = styled.SafeAreaView`
  width: 120px;
  height: 160px;
  justify-content: flex-start;
  align-items: center;
  margin: 10px 10px;
  overflow: hidden;
  border-radius: 5px;
`;

export const ContentImage = styled.View`
  width: 120px;
  height: 130px;
  border-radius: 5px;
  overflow: hidden;
`;
export const BoxTitle = styled.View`
  border-radius: 5px;
  padding: 5px;
  padding-left: 0px;
  padding-horizontal: 6px;
  height: 30px;
  width: 100%;
  flex-direction: row;
  align-items: center;
`;
export const Title = styled.Text`
  color: white;
`;
