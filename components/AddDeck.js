import React, { Component } from "react";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
  Button
} from "react-native";
import { saveNewDeck } from "../utils/api";
import { NavigationActions } from "react-navigation";
import { COLOR_BLACK, COLOR_WHITE } from "../utils/helpers";

class AddDeck extends Component {
  state = {
    text: null
  };

  async save(text) {
    if (!text) return;

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
      <View style={styles.container}>
        <Text> Name </Text>
        <View>
          <TextInput
            style={styles.input}
            onChangeText={text => this.setState({ text })}
          />
          <Button onPress={() => this.save(this.state.text)} title="Submit" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    alignItems: "stretch"
  },
  input: {
    minWidth: 200
  }
});

export default AddDeck;
