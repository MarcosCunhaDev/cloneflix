import React from "react";
import { View, Text, Image } from "react-native";
import { BoxCard, Title, ContentImage, BoxTitle } from "./styles";

const Card = ({ title, uri }) => {
  return (
    <BoxCard>
      <ContentImage>
        <Image
          source={{
            uri:
              uri ||
              "https://upload.wikimedia.org/wikipedia/pt/f/f5/Marvels_avengers_capa.jpg",
          }}
          style={{ flex: 1 }}
        />
      </ContentImage>
      <BoxTitle>
        <Title numberOfLines={1} maxLength={5}>
          {title}
        </Title>
      </BoxTitle>
    </BoxCard>
  );
};

export default Card;
