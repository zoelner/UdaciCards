import React, { Component } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

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
    backgroundColor: "#ffffff"
  },
  deckContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 50,
    borderBottomColor: "#5a5a5a",
    borderBottomWidth: 1
  },
  title: {
    color: "#333333",
    fontSize: 25
  }
});

export default Deck;
