import React, { Component } from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { getDeck, getDecks } from "../utils/api";
import { toArray } from "../utils/helpers";

class DeckDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    const { id } = navigation.state.params;
    return {
      title: `${id} details`
    };
  };
  state = {
    data: null,
    isReady: false
  };

  async componentDidMount() {
    const data = await getDeck(this.props.navigation.state.params.id);
    this.setState({ data, isReady: true });
  }

  render() {
    const { data, isReady } = this.state;
    return isReady ? (
      <View style={styles.container}>
        <Text style={styles.titleText}>{data.title}</Text>
        <Text style={styles.titleText}>
          {this.props.navigation.state.params.questions}
          {this.props.navigation.state.params.questions === 1
            ? " question"
            : " questions"}
        </Text>
        <Button
          onPress={() =>
            this.props.navigation.navigate("AddQuestion", {
              title: this.props.navigation.state.params.id
            })
          }
          title="ADD Question"
        />
        <Button
          onPress={() =>
            this.props.navigation.navigate("Quiz", {
              id: this.props.navigation.state.params.id
            })
          }
          title="Start Quiz"
        />
      </View>
    ) : (
      <Text>Loading...</Text>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around"
  },
  answerBtn: {
    backgroundColor: "green",
    color: "white",
    paddingTop: 12,
    paddingBottom: 12,
    width: 250,
    borderRadius: 10,
    margin: 4,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    overflow: "hidden"
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default DeckDetail;
