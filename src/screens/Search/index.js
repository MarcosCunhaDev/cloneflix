import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { BoxResults } from "./styles";
import ContainerDefault from "../../components/Container";
import Card from "../../components/Card";
import Section from "../../components/Sections";
import InputText from "../../components/inputText";
import { getSearchedMovies } from "../../services/moviesActions";
import { useNavigation } from "@react-navigation/native";

function SearchScreen(props) {
  // const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [loadingData, setLoadingData] = useState(false);
  const [parsedData, setParsedData] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if (props.navigation) {
      props.navigation.addListener("focus", () => {
        setSearchValue("");
        setData([]);
      });
    }
  }, [props.navigation]);

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
      getSearchedMovies(searchValue, setData, setLoadingData);
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
            loadingData ? (
              <ActivityIndicator size={"small"} />
            ) : parsedData.length > 0 ? (
              <>
                {parsedData.map((item, index) => {
                  if (item.poster) {
                    return (
                      <Card
                        key={item.index}
                        title={item.title}
                        backPath={item.poster}
                      />
                    );
                  }
                })}
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
