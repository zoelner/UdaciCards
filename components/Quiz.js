import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { getDeck } from "../utils/api";

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
        <View>
          <Text>
            {"You have answered  "}
            {Math.floor(correct / deck.questions.length * 100)}% of the
            questions
          </Text>
          <View>
            <Button onPress={() => null} title="Restart" />
            <Button onPress={() => null} title="Exit" />
          </View>
        </View>
      );
    }

    return (
      <View>
        <Text>
          {currentQuestion + 1}/{deck.questions.length}
        </Text>
        <Text>{deck.questions[currentQuestion].question}</Text>
        {this.state.showAnswer && (
          <Text> {deck.questions[currentQuestion].answer}</Text>
        )}
        <Button onPress={() => this.showAnswer()} title="Show Answer" />
        <Button onPress={() => this.correctAnswer()} title="Correct" />
        <Button onPress={() => this.nextQuestion()} title="Incorrect" />
      </View>
    );
  }
}

export default Quiz;
