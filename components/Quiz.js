import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { getDeck } from "../utils/api";
import { NavigationActions } from "react-navigation";

class Quiz extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: `${navigation.state.params.id} Quiz`
    };
  };

  state = {
    deck: null,
    correct: null,
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

  restartQuiz() {
    this.props.navigation.dispatch(
      NavigationActions.navigate({
        routeName: "DeckDetail",
        params: { id: this.props.navigation.state.params.id },
        action: NavigationActions.navigate({ routeName: "DeckDetail" })
      })
    );
  }

  exit() {
    this.props.navigation.dispatch(
      NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: "Main" })]
      })
    );
  }

  render() {
    const { isReady, deck, correct, currentQuestion } = this.state;

    if (!isReady) return <Text>Loading...</Text>;

    if (deck.questions.length === currentQuestion) {
      return (
        <View style={styles.container}>
          <Text style={[styles.text, { fontWeight: "bold" }]}>
            {"You have answered  "}
            {correct & Math.floor(correct / deck.questions.length * 100)}% of
            the questions
          </Text>
          <View>
            <Button onPress={() => this.restartQuiz()} title="Restart" />
            <Button onPress={() => this.exit()} title="Exit" />
          </View>
        </View>
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
