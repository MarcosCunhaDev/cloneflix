import React, { useState, useEffect } from "react";
import { View, Text, FlatList, ScrollView } from "react-native";
import { BoxResults } from "./styles";
import ContainerDefault from "../../components/Container";
import Card from "../../components/Card";
import Section from "../../components/Sections";
import InputText from "../../components/inputText";
import { getSearchedMovies } from "../Home/homeActions";

const RenderResults = (parsedData) => {
  if (parsedData.length > 0) {
    array.map((item) => {
      return <Text>{item.title}</Text>;
    });
  }
  return null;
};

function SearchScreen() {
  const [data, setData] = useState([]);
  const [parsedData, setParsedData] = useState([]);
  const [dataFiltered, setDataFiltered] = useState([]);
  const [searchValue, setSearchValue] = useState("");

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
  const handleSearch = () => {
    if (searchValue) {
      getSearchedMovies(searchValue, setData);
    }
  };
  useEffect(() => {
    setParsedData(parseDataMovies(data));
  }, [data]);

  useEffect(() => {
    if (!searchValue) setParsedData([]);
  }, [searchValue]);

  return (
    <ContainerDefault>
      <ScrollView style={{ flex: 1, width: "100%" }}>
        <InputText
          placeHolder={"Pesquisar Filme"}
          value={searchValue}
          setValue={setSearchValue}
          handleClick={handleSearch}
        />
        <BoxResults>
          {searchValue ? (
            parsedData.length > 0 ? (
              <>
                {parsedData.map((item) => (
                  <Card title={item.title} backPath={item.poster} />
                ))}
              </>
            ) : (
              <Text
                style={{
                  fontSize: 20,
                  color: "#fff",
                  alignSelf: "center",
                  textAlignVertical: "center",
                }}
              >
                Nenhum resultado encontrado.
              </Text>
            )
          ) : (
            <Text
              style={{
                fontSize: 20,
                color: "#fff",
                alignSelf: "center",
                textAlignVertical: "center",
              }}
            >
              Digite um nome para busca.
            </Text>
          )}
        </BoxResults>
      </ScrollView>
    </ContainerDefault>
  );
}

export default SearchScreen;
