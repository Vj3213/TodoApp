import React, { Component } from "react";
import { View, TextInput, Text, StyleSheet, Dimensions } from "react-native";
import ItemList from "./components/itemList";
import VisibilityFilter from "./components/visibilityFilter";
import { addTodo } from "./actions/todo";
import { connect } from "react-redux";

let screenHeight = Dimensions.get("window").height;
let inputBoxHeight = screenHeight / 12;
let textSize = inputBoxHeight / 2;

class App extends Component {
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
    this.props.onAdd({ key: key, value: this.state.newItem });
    this.setState({
      newItem: ""
    });
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

        <VisibilityFilter numberOfItems={this.state.itemList.length} />

        <ItemList />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAdd: data => dispatch(addTodo(data))
  };
};

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

export default connect(
  null,
  mapDispatchToProps
)(App);
