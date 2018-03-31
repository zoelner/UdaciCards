import React, { Component } from "react";
import { Text, TextInput, View, Button } from "react-native";
import { StyleSheet } from "react-native";
import { saveNewDeck } from "../utils/api";
import { NavigationActions } from "react-navigation";

class AddDeck extends Component {
  state = {
    text: ""
  };

  async save(text) {
    await saveNewDeck(text);
    this.props.navigation.dispatch(
      NavigationActions.reset({
        index: 1,
        actions: [
          NavigationActions.navigate({ routeName: "Main" }),
          NavigationActions.navigate({
            routeName: "DeckDetail",
            params: { id: text }
          })
        ]
      })
    );
  }

  render() {
    return (
      <View style={{}}>
        <Text style={{}}> Name </Text>
        <TextInput onChangeText={text => this.setState({ text })} />
        <Button
          title="Create Deck"
          onPress={() => this.save(this.state.text)}
        />
      </View>
    );
  }
}

export default AddDeck;
