import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { generateString } from "./utils";

const MainContainer = styled.View`
  display: flex;
  padding: 20px;
  padding-top: 60px;
`;

const TopContainer = styled.View`
  display: flex;
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: black;
  padding-bottom: 10px;
  align-items: center;
`;

const InputBar = styled.TextInput`
  display: flex;
  flex: 0.8;
  border: 1px solid black;
  padding: 2px;
`;

const AddItemButton = styled.TouchableOpacity`
  display: flex;
  flex: 0.2;
  justify-content: center;
  align-items: center;
`;

const BottomContainer = styled.View`
  display: flex;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const Item = styled.Text`
  display: flex;
  padding-top: 10px;
  font-weight: bold;
  border-bottom-width: 1px;
  border-bottom-color: black;
`;

const PlusIcon = styled.Image`
  width: 25px;
  height: 25px;
`;

export default function App() {
  const [listItem, setListItem] = React.useState([
    "Milk",
    "Coffee",
    "Oranges",
    "Bread",
  ]);

  const [displayList, setDisplayList] = React.useState([] as any);

  React.useEffect(() => {
    setDisplayList(listItem);
  }, [listItem]);

  const [searchText, setSearchText] = React.useState("");

  const textChangeHandler = (text: any) => {
    setSearchText(text);

    const filterResult = listItem.filter((item) => {
      return item.includes(text);
    });

    setDisplayList(filterResult);
  };

  const addItemHandler = () => {
    const result = generateString(Math.floor(Math.random() * 15 + 5));
    setListItem([...listItem, result]);
  };

  return (
    <MainContainer>
      <TopContainer>
        <InputBar
          placeholder="Search"
          onChangeText={(text: any) => textChangeHandler(text)}
          value={searchText}
        />
        <AddItemButton onPress={addItemHandler}>
          <PlusIcon
            source={{
              uri: "https://cdn0.iconfinder.com/data/icons/very-basic-2-android-l-lollipop-icon-pack/24/plus-512.png",
            }}
          />
        </AddItemButton>
      </TopContainer>
      <BottomContainer>
        <ScrollView>
          {displayList.map((item, id) => (
            <Item key={id}>{item}</Item>
          ))}
        </ScrollView>
      </BottomContainer>
    </MainContainer>
  );
}
