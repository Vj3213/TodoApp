import React, { Component } from "react";
import { View, TextInput, Text, StyleSheet, Dimensions } from "react-native";
import ItemList from "./components/itemList";
import VisibilityFilter from "./components/visibilityFilter";

let screenHeight = Dimensions.get("window").height;
let inputBoxHeight = screenHeight / 12;
let textSize = inputBoxHeight / 2;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      itemList: [],
      visibilityFilter: "ALL"
    };
  }

  handleChange = value => {
    this.setState({
      newItem: value
    });
  };

  addItem = () => {
    let date = new Date();
    let key = date.getTime().toString();
    this.setState({
      itemList: [
        ...this.state.itemList,
        {
          key: key,
          value: this.state.newItem,
          isCompleted: false,
          visibilityFilter: "ALL"
        }
      ],
      newItem: ""
    });
  };

  updateItemList = oldItem => {
    let newItemList = [...this.state.itemList];
    newItemList.map((newItem, index) => {
      if (newItem.key === oldItem.key) {
        newItemList[index] = {
          key: oldItem.key,
          value: oldItem.value,
          isCompleted: true,
          visibilityFilter: "ALL"
        };
      }
    });
    this.setState({ itemList: newItemList });
  };

  onDelete = oldItem => {
    let newItemList = [...this.state.itemList];
    newItemList.map((item, index) => {
      if (item.key === oldItem.key) {
        newItemList.splice(index, 1);
      }
    });
    this.setState({ itemList: newItemList });
  };

  onSelection = visibilityFilter => {
    if (visibilityFilter === "CLEAR_COMPLETED") {
      let newItemList = [...this.state.itemList];
      i = 0;
      while (i < newItemList.length) {
        if (newItemList[i].isCompleted) {
          newItemList.splice(i, 1);
        } else {
          i++;
        }
      }
      this.setState({ itemList: newItemList });
    } else {
      this.setState({ visibilityFilter });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputBox}
          onChangeText={value => this.handleChange(value)}
          onSubmitEditing={this.addItem}
          value={this.state.newItem}
        />

        <VisibilityFilter
          numberOfItems={this.state.itemList.length}
          onSelection={this.onSelection}
        />

        <ItemList
          visibilityFilter={this.state.visibilityFilter}
          itemList={[...this.state.itemList]}
          onDelete={this.onDelete}
          onCheckboxClicked={this.updateItemList}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 2
  },
  inputBox: {
    height: inputBoxHeight,
    alignSelf: "stretch",
    borderWidth: 2,
    borderColor: "#0a5d00",
    fontSize: textSize
  }
});
