import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { getDeck } from "../utils/api";
import { NavigationActions } from "react-navigation";
import {
  clearLocalNotification,
  setLocalNotification
} from "./../utils/helpers";
import Results from "./Results";

class Quiz extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: `${navigation.state.params.id} Quiz`
    };
  };

  state = {
    deck: null,
    correct: 0,
    currentQuestion: 0,
    showAnswer: false,
    isReady: false
  };

  async componentDidMount() {
    await this.setState({
      deck: await getDeck(this.props.navigation.state.params.id),
      isReady: true
    });
    clearLocalNotification().then(setLocalNotification);
  }

  async nextQuestion() {
    await this.setState(state => {
      return { currentQuestion: state.currentQuestion + 1, showAnswer: false };
    });
  }

  async showAnswer() {
    await this.setState(state => {
      return { showAnswer: !state.showAnswer };
    });
  }

  async correctAnswer() {
    this.nextQuestion();
    await this.setState(state => {
      return { correct: state.correct + 1 };
    });
  }

  render() {
    const { isReady, deck, correct, currentQuestion } = this.state;

    if (!isReady) return <Text>Loading...</Text>;

    if (deck.questions.length === currentQuestion) {
      return (
        <Results
          correct={this.state.correct}
          questions={deck.questions.length}
          id={this.props.navigation.state.params.id}
          navigation={this.props.navigation}
        />
      );
    }

    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>
          {currentQuestion + 1}/{deck.questions.length}
        </Text>
        <Text style={styles.text}>
          {deck.questions[currentQuestion].question}
        </Text>
        {this.state.showAnswer && (
          <Text style={styles.text}>
            {deck.questions[currentQuestion].answer}
          </Text>
        )}
        <Button onPress={() => this.showAnswer()} title="Show Answer" />
        <Button onPress={() => this.correctAnswer()} title="Correct" />
        <Button onPress={() => this.nextQuestion()} title="Incorrect" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  },
  text: {
    fontSize: 15,
    padding: 10
  }
});

export default Quiz;
