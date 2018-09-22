import React, { Component } from "react";
import {
  View,
  CheckBox,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";

let screenWidth = Dimensions.get("window").width;
let itemBoxHeight = Dimensions.get("window").height / 15;

function filter(data, visibilityFilter) {
  switch (visibilityFilter) {
    case "ALL":
      return data;

    case "ACTIVE":
      i = 0;
      while (i < data.length) {
        if (data[i].isCompleted) {
          data.splice(i, 1);
        } else {
          i++;
        }
      }
      return data;

    case "COMPLETED":
      i = 0;
      while (i < data.length) {
        if (!data[i].isCompleted) {
          data.splice(i, 1);
        } else {
          i++;
        }
      }
      return data;

    default:
      return [];
  }
}

function onCheckboxClicked(item) {
  onCheckboxClicked(item);
}

function onDelete(item) {
  onDelete(item);
}

export default function ItemList({
  itemList,
  visibilityFilter,
  onDelete,
  onCheckboxClicked
}) {
  const data = filter(itemList, visibilityFilter);

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => {
        return (
          <View style={styles.itemContainer}>
            <View style={styles.innerContainer}>
              <CheckBox
                onValueChange={() => onCheckboxClicked(item)}
                value={item.isCompleted}
              />
              <Text style={styles.item}>{item.value}</Text>
            </View>
            <TouchableOpacity activeOpacity={50} onPress={() => onDelete(item)}>
              <Image
                style={styles.avatar}
                source={require("../Asset/cancel.png")}
              />
            </TouchableOpacity>
          </View>
        );
      }}
      keyExtractor={item => item.key}
    />
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    width: screenWidth,
    height: itemBoxHeight,
    justifyContent: "space-between",
    alignItems: "center",
    margin: 1,
    backgroundColor: "#cccccc"
  },
  innerContainer: {
    marginLeft: 5,
    flexDirection: "row"
  },
  item: {
    marginLeft: 10,
    fontSize: 20,
    color: "black"
  },
  avatar: {
    marginRight: 10,
    width: 18,
    height: 18
  }
});
