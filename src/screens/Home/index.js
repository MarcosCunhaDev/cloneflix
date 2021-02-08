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
import Banner from "../../components/BannerAnimated";
import InputText from "../../components/inputText";
import {
  getTrendingMovies,
  getMoviesGenres,
  getMoviesByGenre,
} from "../../services/moviesActions";
import { useNavigation } from "@react-navigation/native";
import { parseDataMovies } from "../../helpers/utils";

function HomeScreen() {
  const [data, setData] = useState([]);
  const [dataTrending, setDataTrending] = useState([]);
  const [parsedData, setParsedData] = useState([]);
  const [parsedTrending, setParsedTrending] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [failed, setFailed] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const [arrayGenres, setArrayGenres] = useState([]);
  const [dataByGenres, setDataByGenres] = useState([]);

  useEffect(() => {
    navigation.addListener("focus", () => {
      getTrendingMovies(setDataTrending);
      getMoviesGenres(setArrayGenres);
    });
  }, [navigation]);

  useEffect(() => {
    setParsedTrending(parseDataMovies(dataTrending));
  }, [dataTrending]);

  useEffect(() => {
    let dataTotal = [];
    if (arrayGenres.length > 0) {
      arrayGenres.map((item) => {
        let movies = getMoviesByGenre(item.id);

        if (movies.length > 0) {
          console.log(movies);
          // dataTotal.push(parseDataMovies(movies));
        }
      });
    }
    // setDataByGenres(dataTotal);
  }, [arrayGenres]);

  useEffect(() => {
    getTrendingMovies(setData);
  }, []);

  const handleClickSearch = () => {
    navigation.navigate("Busca");
  };

  return (
    <ContainerDefault>
      <ScrollView style={{ flex: 1, width: "100%" }}>
        <InputText
          placeHolder={"Pesquisar Filme"}
          value={searchValue}
          setValue={setSearchValue}
          handleClick={handleClickSearch}
          fakeInput
        />
        <Banner data={parsedTrending} sectionName={"Lançamentos"} />
        {arrayGenres.length > 0
          ? arrayGenres.map((item) => (
              <Section key={item.id} data={item} sectionName={item.name} />
            ))
          : null}
      </ScrollView>
    </ContainerDefault>
  );
}

export default HomeScreen;
