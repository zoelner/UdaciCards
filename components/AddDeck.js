import React, { Component } from "react";
import { Text, TextInput, View, Button } from "react-native";
import { StyleSheet } from "react-native";
import { saveNewDeck } from "./../api";

// TODO

// Uma opção de inserir o título do novo baralho
// Uma opção de enviar o novo título do baralho e assim criar o baralho

class AddDeck extends Component {
  state = {
    text: ""
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.name}> Name </Text>
        <TextInput onChangeText={text => this.setState({ text })} />
        <Button
          title="Create Deck"
          onPress={() => saveNewDeck(this.state.text)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  name: { alignItems: "stretch" }
});

export default AddDeck;
