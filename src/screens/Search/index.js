import React, { useState } from "react";
import { View, Text, FlatList, ScrollView } from "react-native";
import { BoxResults } from "./styles";
import ContainerDefault from "../../components/Container";
import Card from "../../components/Card";
import Section from "../../components/Sections";
import InputText from "../../components/inputText";

function SearchScreen() {
  const [dataFiltered, setDataFiltered] = useState([]);
  return (
    <ContainerDefault>
      <ScrollView style={{ flex: 1, width: "100%" }}>
        <InputText placeHolder={"Pesquisar filmes"} />
        <BoxResults>
          {dataFiltered.length > 0 ? (
            <Text>Resultados Encontrados</Text>
          ) : (
            <Text>Digite e busque.</Text>
          )}
        </BoxResults>
      </ScrollView>
    </ContainerDefault>
  );
}

export default SearchScreen;
