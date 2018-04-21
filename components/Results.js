import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { NavigationActions } from "react-navigation";
import {
  clearLocalNotification,
  setLocalNotification
} from "./../utils/helpers";

class Results extends Component {
  componentDidMount() {
    clearLocalNotification().then(setLocalNotification);
  }

  backToDeck() {
    this.props.navigation.dispatch(
      NavigationActions.navigate({
        routeName: "DeckDetail",
        params: { id: this.props.id, questions: this.props.questions },
        action: NavigationActions.navigate({ routeName: "DeckDetail" })
      })
    );
  }
  restart() {
    this.props.navigation.navigate("Quiz", {
      id: this.props.id
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.text, { fontWeight: "bold" }]}>
          {"You have answered  "}
          {this.props.correct &&
            Math.floor(
              this.props.correct / this.props.questions
                ? this.props.correct / this.props.questions * 100
                : 0
            )}% of the questions
        </Text>
        <View>
          <Button onPress={() => this.restart()} title="Restart" />
          <Button onPress={() => this.backToDeck()} title="Back to Deck" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  text: {
    fontSize: 15,
    padding: 10
  }
});

export default Results;
