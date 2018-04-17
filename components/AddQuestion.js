import React, { Component } from "react";
import { addCardToDeck } from "../utils/api";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { NavigationActions } from "react-navigation";
import { COLOR_WHITE, COLOR_GRAY } from "./../utils/helpers";

class AddQuestion extends Component {
  static navigationOptions = ({ navigation }) => {
    const { title } = navigation.state.params;
    return {
      title: `Add Question in ${title}`
    };
  };

  state = {
    question: null,
    answer: null
  };

  async handleSubmit() {
    const { title } = this.props.navigation.state.params;
    const { question, answer } = this.state;
    if (!question || !answer) {
      alert("Favor preencher todos os campos!");
      return;
    }

    await addCardToDeck(title, this.state);

    this.props.navigation.dispatch(
      NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: "Main" })]
      })
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={question => this.setState(() => ({ question }))}
          value={this.state.question}
          placeholder="Question"
        />
        <TextInput
          style={styles.input}
          onChangeText={answer => this.setState(() => ({ answer }))}
          value={this.state.answer}
          placeholder="Answer"
        />
        <Button onPress={() => this.handleSubmit()} title="Submit" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginTop: 50,
    padding: 20,
    backgroundColor: COLOR_WHITE
  },
  input: {
    margin: 15,
    padding: 10,
    height: 40,
    borderColor: COLOR_GRAY,
    borderWidth: 1,
    borderRadius: 5
  }
});

export default AddQuestion;
