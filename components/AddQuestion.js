import React, { Component } from "react";
import { addCardToDeck } from "../utils/api";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";
import { NavigationActions } from "react-navigation";

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
      console.log("Campos não preenchidos ");
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
      <View style={{}}>
        <TextInput
          style={{}}
          onChangeText={question => this.setState(() => ({ question }))}
          value={this.state.question}
          placeholder="Question"
        />
        <TextInput
          style={{}}
          onChangeText={answer => this.setState(() => ({ answer }))}
          value={this.state.answer}
          placeholder="Answer"
        />
        <TouchableOpacity style={{}} onPress={() => this.handleSubmit()}>
          <Text style={{}}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default AddQuestion;
