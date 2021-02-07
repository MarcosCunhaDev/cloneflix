import React, { useState } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { BoxIcon, ContainerInput } from "./styles";
import { set } from "react-native-reanimated";

const InputText = ({ placeHolder = "Pesquisar" }) => {
  const [value, onChangeText] = useState("");

  return (
    <ContainerInput>
      <TextInput
        style={{
          color: "white",
          marginRight: 5,
          flex: 1,
          fontSize: 16,
        }}
        placeholderTextColor={"lightgrey"}
        placeholder={placeHolder}
        numberOfLines={1}
        onChangeText={(text) => onChangeText(text)}
        value={value}
        editable
        maxLength={100}
      />
      <TouchableOpacity
        onPress={() => {
          console.log(value);
          onChangeText("");
        }}
      >
        <BoxIcon>
          <AntDesign name="search1" size={20} color={"white"} />
        </BoxIcon>
      </TouchableOpacity>
    </ContainerInput>
  );
};

export default InputText;