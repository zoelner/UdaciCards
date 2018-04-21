import React, { Component } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { COLOR_BLACK, COLOR_WHITE, COLOR_GRAY } from "../utils/helpers";

function Deck(props) {
  return (
    <View style={styles.deck}>
      <TouchableOpacity
        onPress={() =>
          props.navigate("DeckDetail", {
            id: props.title,
            questions: props.questions.length
          })
        }
      >
        <View style={styles.deckContent}>
          <Text style={styles.title}>{props.title}</Text>
          <Text>
            {props.questions.length}
            {props.questions.length === 1 ? " question" : " questions"}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
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
