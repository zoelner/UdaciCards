import React from "react";
import { Text, TextInput, View, Button } from "react-native";
import { StyleSheet } from "react-native";

// TODO

// Uma opção de inserir o título do novo baralho
// Uma opção de enviar o novo título do baralho e assim criar o baralho

const AddDeck = props => {
  function create() {}

  return (
    <View style={styles.container}>
      <Text style={styles.name}> Name </Text>
      <TextInput />
      <Button title="Create Deck" onPress={() => create()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  name: { alignItems: "stretch" }
});

export default AddDeck;
