import React from "react";
import { View, Text } from "react-native";
import { Container, Label } from "./styles";

function ContainerDefault(props) {
  return <Container>{props.children}</Container>;
}

export default ContainerDefault;
