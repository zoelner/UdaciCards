import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

function Deck({ id, title, navigate, questions }) {
  return (
    <View style={styles.deck}>
      <TouchableOpacity onPress={() => navigate("DeckDetail", { id: title })}>
        <View style={styles.deckContent}>
          <Text>{title}</Text>
          <Text>Questions {questions.length}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  deck: {
    minHeight: 150
  },
  deckContent: {
    minHeight: 150,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  }
});

export default Deck;
