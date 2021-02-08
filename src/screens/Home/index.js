import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Container, Label } from "./styles";
import ContainerDefault from "../../components/Container";
import Card from "../../components/Card";
import Section from "../../components/Sections";
import InputText from "../../components/inputText";
import { getTrendingMovies } from "../../services/moviesActions";
import { useNavigation } from "@react-navigation/native";
import { parseDataMovies } from "../../helpers/utils";

function HomeScreen() {
  const [data, setData] = useState([]);
  const [parsedData, setParsedData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [failed, setFailed] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    getTrendingMovies(setData);
  }, []);

  useEffect(() => {
    setParsedData(parseDataMovies(data));
  }, [data]);

  const handleClickSearch = () => {
    navigation.navigate("Search");
  };

  return (
    <ContainerDefault>
      <ScrollView style={{ flex: 1, width: "100%" }}>
        <TouchableOpacity handleClick={handleClickSearch}>
          <InputText
            placeHolder={"Pesquisar Filme"}
            value={searchValue}
            setValue={setSearchValue}
          />
        </TouchableOpacity>
        <Section data={parsedData} sectionName={"Lançamentos"} />
        <Section data={parsedData} sectionName={"Populares"} />
      </ScrollView>
    </ContainerDefault>
  );
}

export default HomeScreen;
