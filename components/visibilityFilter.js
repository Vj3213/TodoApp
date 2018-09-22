import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

let selectedFilter = "ALL";

export default function VisibilityFilter(props) {
  onSelection = visibilityFilter => {
    selectedFilter = visibilityFilter;
    props.onSelection(visibilityFilter);
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity activeOpacity={50}>
        <Text style={styles.text}>{props.numberOfItems} items left</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => this.onSelection("ALL")}>
        {(selectedFilter == "ALL" && (
          <Text style={[styles.text, styles.elementBorder]}>All</Text>
        )) || <Text style={styles.text}>All</Text>}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => this.onSelection("ACTIVE")}>
        {(selectedFilter == "ACTIVE" && (
          <Text style={[styles.text, styles.elementBorder]}>Active</Text>
        )) || <Text style={styles.text}>Active</Text>}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => this.onSelection("COMPLETED")}>
        {(selectedFilter == "COMPLETED" && (
          <Text style={[styles.text, styles.elementBorder]}>Completed</Text>
        )) || <Text style={styles.text}>Completed</Text>}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => this.onSelection("CLEAR_COMPLETED")}>
        {(selectedFilter == "CLEAR_COMPLETED" && (
          <Text style={[styles.text, styles.elementBorder]}>
            Clear-Completed
          </Text>
        )) || <Text style={styles.text}>Clear-Completed</Text>}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "black",
    borderRadius: 0.2,
    borderWidth: 1,
    padding: 2
  },
  text: {
    color: "#0a5d00",
    fontSize: 18
  },
  elementBorder: {
    borderColor: "black",
    borderRadius: 0.2,
    borderWidth: 1,
    padding: 2
  }
});
