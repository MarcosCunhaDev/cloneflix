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
import { parseDataMovies, parseDataMoviesSec } from "../../helpers/utils";

function HomeScreen(props) {
  const [data, setData] = useState([]);
  const [dataTrending, setDataTrending] = useState([]);
  const [parsedData, setParsedData] = useState([]);
  const [parsedTrending, setParsedTrending] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [failed, setFailed] = useState(false);
  const [loading, setLoading] = useState(false);
  // const navigation = useNavigation();
  const [arrayGenres, setArrayGenres] = useState([]);
  const [dataByGenres, setDataByGenres] = useState([]);
  const [parsedDataByGenres, setParsedDataByGenres] = useState([]);

  useEffect(() => {
    if (props.navigation) {
      props.navigation.addListener("focus", () => {
        getTrendingMovies(setDataTrending);
        getMoviesGenres(setArrayGenres);
      });
    }
  }, [props.navigation]);

  useEffect(() => {
    setParsedTrending(parseDataMovies(dataTrending));
  }, [dataTrending]);

  useEffect(() => {
    if (arrayGenres.length > 0) {
      getMoviesByGenre(arrayGenres, setDataByGenres);
    }
  }, [arrayGenres]);

  useEffect(() => {
    setParsedDataByGenres(dataByGenres);
  }, [dataByGenres]);

  useEffect(() => {
    getTrendingMovies(setData);
  }, []);

  const handleClickSearch = () => {
    props.navigation.navigate("Busca");
  };

  return (
    <ContainerDefault>
      <ScrollView style={{ flex: 1, width: "100%" }}>
        <InputText
          placeHolder={"Pesquisar Filme"}
          value={searchValue}
          setValue={setSearchValue}
          handleClick={handleClickSearch}
          fakeInput={true}
        />
        <Banner data={parsedTrending} sectionName={"Lançamentos"} />
        {arrayGenres.length > 0
          ? arrayGenres.map((item, index) => (
              <Section
                dif
                key={item.id}
                data={parsedDataByGenres[index]}
                sectionName={item.name}
              />
            ))
          : null}
      </ScrollView>
    </ContainerDefault>
  );
}

export default HomeScreen;
