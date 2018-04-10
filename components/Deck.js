import React, { Component } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { COLOR_BLACK, COLOR_WHITE, COLOR_GRAY } from "../utils/helpers";

class Deck extends Component {
  render() {
    return (
      <View style={styles.deck}>
        <TouchableOpacity
          onPress={() =>
            this.props.navigate("DeckDetail", {
              id: this.props.title,
              questions: this.props.questions.length
            })
          }
        >
          <View style={styles.deckContent}>
            <Text style={styles.title}>{this.props.title}</Text>
            <Text>
              {this.props.questions.length}
              {this.props.questions.length === 1 ? " question" : " questions"}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  deck: {
    flex: 1,
    backgroundColor: COLOR_WHITE
  },
  deckContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 50,
    borderBottomColor: COLOR_BLACK,
    borderBottomWidth: 1
  },
  title: {
    color: COLOR_GRAY,
    fontSize: 25
  }
});

export default Deck;
