import React, { useState, useEffect } from "react";
import { View, Text, FlatList, ScrollView } from "react-native";
import { Container, Label } from "./styles";
import ContainerDefault from "../../components/Container";
import Card from "../../components/Card";
import Section from "../../components/Sections";
import InputText from "../../components/inputText";
import { getSearchedMovies } from "./homeActions";
import {
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  FILTER_BASE_URL,
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  IMAGE_SIZE,
} from "../../services/api";

const data = [
  { id: 1, name: "teste" },
  { id: 2, name: "testeasdasdasdadadsaasd" },
  { id: 3, name: "teste" },
  { id: 4, name: "teste" },
  { id: 5, name: "teste" },
];

function HomeScreen() {
  const [data, setData] = useState([]);
  const [parsedData, setParsedData] = useState([]);
  const [searchValue, setSearchValue] = useState("jurassic");
  const [failed, setFailed] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getSearchedMovies(searchValue, setData);
  }, []);

  const parseDataMovies = (resultArray) => {
    const array = [...resultArray];
    const parsedArray = array.map((item) => {
      return {
        title: item.title,
        poster: item.poster_path,
      };
    });
    return parsedArray;
  };

  useEffect(() => {
    setParsedData(parseDataMovies(data));
  }, [data]);

  return (
    <ContainerDefault>
      <ScrollView style={{ flex: 1 }}>
        <InputText
          placeHolder={"Pesquisar Filme"}
          value={searchValue}
          setValue={setSearchValue}
        />
        <Section data={parsedData} sectionName={"Lançamentos"} />
        <Section data={parsedData} sectionName={"Populares"} />
        {/* <Section data={parsedData} sectionName={"Teste "} /> */}
      </ScrollView>
    </ContainerDefault>
  );
}

export default HomeScreen;
