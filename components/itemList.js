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
import { connect } from "react-redux";
import { removeTodo, updateTodo } from "../actions/todo";

let screenWidth = Dimensions.get("window").width;
let itemBoxHeight = Dimensions.get("window").height / 15;

function filter(data, visibilityFilter) {
  switch (visibilityFilter) {
    case "ALL":
      return data;

    case "ACTIVE":
      return data.filter(item => !item.isCompleted);

    case "COMPLETED":
      return data.filter(item => item.isCompleted);

    default:
      return data;
  }
}

function ItemList(props) {
  const data = filter(props.itemList, props.visibilityFilter);

  function onDelete(item) {
    props.onDelete(item.key);
  }

  function onCheckboxClicked(item) {
    props.onUpdate(item);
  }

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

const mapStateToProps = state => {
  return {
    itemList: state.todos.itemList,
    visibilityFilter: state.visibilityFilter.visibilityFilter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDelete: key => dispatch(removeTodo(key)),
    onUpdate: item => dispatch(updateTodo(item))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemList);
