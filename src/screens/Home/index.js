import React from "react";
import { View, Text, FlatList, ScrollView } from "react-native";
import { Container, Label } from "./styles";
import ContainerDefault from "../../components/Container";
import Card from "../../components/Card";
import Section from "../../components/Sections";
import InputText from "../../components/inputText";

const data = [
  { id: 1, name: "teste" },
  { id: 2, name: "testeasdasdasdadadsaasd" },
  { id: 3, name: "teste" },
  { id: 4, name: "teste" },
  { id: 5, name: "teste" },
];

function HomeScreen() {
  const RenderSectionCards = (data) => {
    return (
      <View
        style={{ width: "100%", minHeight: 200, backgroundColor: "skyblue" }}
      ></View>
    );
  };

  return (
    <ContainerDefault>
      <ScrollView style={{ flex: 1 }}>
        <InputText />
        <Section data={data} sectionName={"Lançamentos"} />
        <Section data={data} sectionName={"Populares"} />
        <Section data={data} sectionName={"Teste "} />
      </ScrollView>
    </ContainerDefault>
  );
}

export default HomeScreen;
